module.exports = function ($cookies, $rootScope, $location, $http, accountService) {
  this.login = function(inputUsername, inputPassword) {
      $http({
          method: 'POST',
          url: 'https://startandselect.com/api/full/user/login/',
          //production params
          //  data: {username: inputUsername,
          //           password: inputPassword},
          //debug default account
          data: {
              username: 'hairy',
              password: 'water'
          },
          headers: {
            'Content-type': 'application/json'
          }
      }).then(function successCallback(response) {
          // this callback will be called asynchronously
          // when the response is available
          $location.path('/account');
          accountService.setAccountInfo(response.data);
          
          accountService.setIsLoggedIn(true);
          $rootScope.accountInfo = response.data;
          $rootScope.isLoggedIn = true;
          // set cookie
          $cookies.put('username', accountService.getAccountInfo.username);
          $cookies.put('key', accountService.getAccountInfo.key);
          //debug response callback logs
          console.log('successCallback, parsed: ' + JSON.stringify(response.data));
      }, function errorCallback(response) {
          // called asynchronously if an error occurs
          // or server returns response with an error status.
          console.log('errorCallback, response: ' + JSON.stringify(response.data));
      });
  }
  // this.cookieLogin = function() {
  //   if ($cookies.get('username') == null || $cookies.get('password') == null) {
  //     console.log('cookie login failed');
  //   } else {
  //     this.username = $cookies.get('username');
  //     this.password = $cookies.get('password');
  //       $http({
  //           method: 'POST',
  //           url: 'https://startandselect.com/scripts/Login.php',
  //           params: {
  //               username: this.username,
  //               password: this.password
  //           }
  //       }).then(function successCallback(response) {
  //           // this callback will be called asynchronously
  //           // when the response is available
  //           accountService.setAccountInfo(response.data);
  //           accountService.setIsLoggedIn(true);
  //           $rootScope.accountInfo = response.data;
  //           $rootScope.isLoggedIn = true;
  //           //debug response callback logs
  //           console.log('successCallback, response: ' + response.data);
  //       }, function errorCallback(response) {
  //           // called asynchronously if an error occurs
  //           // or server returns response with an error status.
  //           console.log('errorCallback, response: ' + response.data);
  //       });
  //   }
  // }
}
