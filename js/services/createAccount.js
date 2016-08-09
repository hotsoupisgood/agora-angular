module.exports = function ($http, $location, accountService) {
  this.submit = function(inputUsername, inputPassword) {
      $http({
          method: 'POST',
          url: 'https://startandselect.com/api/full/register/',
          data: {
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
          console.log('successCallback unparsed response: ' + response.data);
          console.log('successCallback parsed response: ' + JSON.stringify(response.data));
          // $location.path('/questions');
      }, function errorCallback(response) {

          // called asynchronously if an error occurs
          // or server returns response with an error status.
          //show response for debug
          console.log('errorCallback unparsed response: ' + response.data);
          console.log('errorCallback parsed response: ' + JSON.stringify(response.data));
      });
  };
}
