module.exports = function ($http) {
    this.get = function (currentSearchTerm, startQuestion) {
      var returnData = $http({
          method: 'POST',
          url: 'https://startandselect.com/api/full/question/',
          params: {
              query: currentSearchTerm,
              offset: startQuestion
          },
          headers: {
            'Content-type': 'application/json'
          }
      }).then(function successCallback(response) {
          // this callback will be called asynchronously
          // when the response is available
          //show response for debug
           console.log('successCallback response: ' + response.data.questions);
          return response.data.questions;
      }, function errorCallback(response) {
          // called asynchronously if an error occurs
          // or server returns response with an error status.
          //show response for debug
          console.log('errorCallback unparsed response: ' + response);
      });
      return returnData;
    };
}
