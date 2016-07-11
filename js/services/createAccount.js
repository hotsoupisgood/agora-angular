module.exports = function ($http, $location, accountService) {
  this.submit = function(inputUsername, inputPassword) {
      $http({
          method: 'POST',
          url: 'https://startandselect.com/scripts/MakeUser.php',
          params: {
              username: inputUsername,
              password: inputPassword
          }
      }).then(function successCallback(response) {
          // this callback will be called asynchronously
          // when the response is available
          accountService.setAccountInfo(response.data);
          $location.path('/questions');
          //show response for debug
          console.log('successCallback unparsed response: ' + response.data);
      }, function errorCallback(response) {
          // called asynchronously if an error occurs
          // or server returns response with an error status.
          //show response for debug
          console.log('errorCallback unparsed response: ' + response.data);
      });
  };
}
