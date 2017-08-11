module.exports = function ($cookies, $rootScope, $location, $http) {
  this.login = function(inputUsername, inputPassword, remember) {
      var returnData = $http({
          method: 'GET',
          url: 'https://api.iex.ist/full/login/',
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
            $rootScope.accountInfo = response.data;
            $rootScope.isLoggedIn = true;
            $rootScope.loggingIn=false;
            $rootScope.$emit("login-done");
            // set cookie
            if (remember) {
              $cookies.put('username', inputUsername);
              $cookies.put('password', inputPassword);
              $cookies.put('key', $rootScope.accountInfo.key);
            }else {
              $rootScope.rememberLogin = false;
            }
            $location.url('user/'+inputUsername);
            return true;
          //debug response callback logs
      }, function errorCallback(response) {
        $cookies.put('password', null);
          // called asynchronously if an error occurs
          // or server returns response with an error status.
          console.log('successCallback, response: ');
          console.log(response)
          $rootScope.$emit("login-done");
          $rootScope.loggingIn=false;
          return false;
      });
      return returnData;
  }
  this.cookieLogin = function() {
    if ($cookies.get('username') == null || $cookies.get('password') == null) {
      $rootScope.$broadcast("login-done");
      $rootScope.loggingIn=false;
      console.log('cookie login failed, well I did not try.');
    } else {
      this.username = $cookies.get('username');
      this.password = $cookies.get('password');
        $http({
            method: 'GET',
            url: 'https://api.iex.ist/full/login/',
            params: {
                username: this.username,
                password: this.password
            },
            headers: {
              'Content-type': 'application/json'
            }
        }).then(function successCallback(response) {
            console.log("Accound info: ");
            console.log(response.data);
            $rootScope.accountInfo = response.data;
            $rootScope.isLoggedIn = true;
            $rootScope.loggingIn=false;
            $rootScope.$emit("login-done");
            // set cookie
            // $cookies.put('username', inputUsername);
            // $cookies.put('password', inputPassword);
            $cookies.put('key', $rootScope.accountInfo.key);
            //debug response callback logs
            // console.log('successCallback, response: ');
            console.log(response.data);
        }, function errorCallback(response) {
            // called asynchronously if an error occurs
            // or server returns response with an error status.
            $rootScope.loggingIn=false;
            $rootScope.$emit("login-done");
            console.log('errorCallback, response: ');
            console.log(response.data);
        });
    }
  }
}
