module.exports = function ($cookies, $rootScope, $location, $http, accountService) {
  this.login = function(inputUsername, inputPassword, remember) {
    $cookies.put('password', inputPassword);
    console.log("imapas" + inputUsername+ inputPassword );
      $http({
          method: 'GET',
          url: 'http://api.iex.ist/full/login/',
          // production params
           params: {
             username: inputUsername,
             password: inputPassword
          },
          headers: {
            'Content-type': 'application/json'
          }
      }).then(function successCallback(response) {
          // this callback will be called asynchronously
          // when the response is available
          // $location.path('/account');
          // if (remember) {
            accountService.setAccountInfo(response.data);
            accountService.setIsLoggedIn(true);
            $rootScope.accountInfo = response.data;
            $rootScope.isLoggedIn = true;
            // set cookie
            $cookies.put('username', inputUsername);
            $cookies.put('password', inputPassword);
            $cookies.put('key', $rootScope.accountInfo.key);
            $location.url('/questions');
          // }
          //debug response callback logs
          // console.log('successCallback, parsed: ' + JSON.stringify(response.data));
      }, function errorCallback(response) {
        $cookies.put('password', null);
          // called asynchronously if an error occurs
          // or server returns response with an error status.
          console.log('errorCallback, response: ' + JSON.stringify(response.data));
      });
  }
  this.cookieLogin = function() {
    if ($cookies.get('username') == null || $cookies.get('password') == null) {
      console.log('cookie login failed');
    } else {
      this.username = $cookies.get('username');
      this.password = $cookies.get('password');
        $http({
            method: 'GET',
            url: 'http://api.iex.ist/full/login/',
            params: {
                username: this.username,
                password: this.password
            },
            headers: {
              'Content-type': 'application/json'
            }
        }).then(function successCallback(response) {
            // this callback will be called asynchronously
            // when the response is available
            // accountService.setAccountInfo(response.data);

            // accountService.setIsLoggedIn(true);
            $rootScope.accountInfo = response.data;
            $rootScope.isLoggedIn = true;
            // set cookie
            // $cookies.put('username', inputUsername);
            // $cookies.put('password', inputPassword);
            $cookies.put('key', $rootScope.accountInfo.key);
            //debug response callback logs
            // console.log('successCallback, response: ');
            // console.log(response.data);
        }, function errorCallback(response) {
            // called asynchronously if an error occurs
            // or server returns response with an error status.
            console.log('errorCallback, response: ');
            console.log(response.data);
        });
    }
  }
}
