module.exports =  function($scope, $rootScope, $http, $cookies, $location) {
    $scope.name = 'loginFormController';
    //0 out username and password
    $scope.username = '';
    $scope.password = '';
    $scope.cookieLogin = function() {
      if ($cookies.get('username') == null || $cookies.get('password') == null) {
        console.log('cookie login failed');
      } else {
        $scope.username = $cookies.get('username');
        $scope.password = $cookies.get('password');
          $http({
              method: 'GET',
              url: 'https://startandselect.com/scripts/Login.php',
              params: {
                  username: $scope.username,
                  password: $scope.password
              }
          }).then(function successCallback(response) {
              // this callback will be called asynchronously
              // when the response is available
              $rootScope.accountInfo = JSON.parse(angular.toJson(response.data));
              //make log in var to true to hide login and display account info
              $rootScope.isLoggedIn = true;
              //debug response callback logs
              console.log('successCallback, parsed: ' + $scope.accountInfo);
          }, function errorCallback(response) {
              // called asynchronously if an error occurs
              // or server returns response with an error status.
              console.log('errorCallback, response: ' + $scope.accountInfoTemp);
          });
      }
    }
    $scope.login = function() {
        accountInfo = '';
        $http({
            method: 'GET',
            url: 'https://startandselect.com/scripts/Login.php',
            //production params
            //  params: {username: $scope.username,
            //           password: $scope.password}
            //debug default account
            params: {
                username: usr,
                password: pass
            }
        }).then(function successCallback(response) {
            // this callback will be called asynchronously
            // when the response is available
            $location.path('/account');
            $rootScope.accountInfo = JSON.parse(angular.toJson(response.data));
            $rootScope.isLoggedIn = true;
            // set cookie
            $cookies.put('username', $rootScope.accountInfo.username);
            $cookies.put('password', $rootScope.accountInfo.password);
            //debug response callback logs
            console.log('successCallback, parsed: ' + $scope.accountInfo);
        }, function errorCallback(response) {
            // called asynchronously if an error occurs
            // or server returns response with an error status.
            $scope.accountInfoTemp = JSON.parse(angular.toJson(response.data));
            console.log('errorCallback, response: ' + $scope.accountInfoTemp);
        });
    }
};
