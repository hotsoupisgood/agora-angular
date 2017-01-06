module.exports = function ($http, $rootScope, $cookies) {
  this.submit = function(inputUsername, inputPassword, remember) {
      var returnData = $http({
          method: 'POST',
          url: 'http://api.iex.ist/full/register/',
          data: {
              username: inputUsername,
              password: inputPassword
          },
          headers: {
            'Content-Type': 'application/json'
          }
      }).then(function successCallback(response) {
          if (remember) {
            $rootScope.accountInfo = response.data;
            $rootScope.isLoggedIn = true;
            // set cookie
            $cookies.put('username', inputUsername);
            $cookies.put('password', inputPassword);
            $cookies.put('key', $rootScope.accountInfo.key);
            console.log('ate '+ inputUsername+"'s cookie'");
          }
          return true;
          // console.log('successCallback unparsed response: ');
          // console.log(response.data);
      }, function errorCallback(response) {

          // called asynchronously if an error occurs
          // or server returns response with an error status.
          //show response for debug
          console.log('errorCallback unparsed response: ');
          console.log(response.data);
          return false;
      });
      return returnData;
  };
}
