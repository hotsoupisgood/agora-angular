module.exports = function ($http, $location, $rootScope, $cookies, accountService) {
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
          // accountService.setAccountInfo(response.data);
          //show response for debug
          if (remember) {
            accountService.setAccountInfo(response.data);
            accountService.setIsLoggedIn(true);
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
