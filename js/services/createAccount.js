module.exports = function ($http, $location, $rootScope, $cookies, userService) {
  this.submit = function(inputUsername, inputPassword, remember) {
      $http({
          method: 'POST',
          url: 'http://api.iex.ist/full/register/',
          params: {
              username: inputUsername,
              password: inputPassword
          },
          headers: {
            'Content-Type': 'application/json'
          }
      }).then(function successCallback(response) {
          // this callback will be called asynchronously
          // when the response is available
          // userService.setAccountInfo(response.data);
          //show response for debug
          if (remember) {
            userService.setAccountInfo(response.data);
            userService.setIsLoggedIn(true);
            $rootScope.accountInfo = response.data;
            $rootScope.isLoggedIn = true;
            // set cookie
            $cookies.put('username', inputUsername);
            $cookies.put('password', inputPassword);
            $cookies.put('key', $rootScope.accountInfo.key);
            $location.url('/questions');
          }
          // console.log('successCallback unparsed response: ');
          // console.log(response.data);
      }, function errorCallback(response) {

          // called asynchronously if an error occurs
          // or server returns response with an error status.
          //show response for debug
          console.log('errorCallback unparsed response: ');
          console.log(response.data);
      });
  };
}
