module.exports = function ($http, accountService) {
    this.get = function (currentSearchTerm, startQuestion) {
      var returnData = $http({
          method: 'GET',
          url: 'http://api.iex.ist/full/question/search/',
          params: {
              limit: accountService.numIteratedPerPage,
              query: currentSearchTerm,
              offset: startQuestion
          },
          headers: {
            'Content-type': 'application/json'
          }
      }).then(function successCallback(response) {
        console.log(currentSearchTerm);
          // this callback will be called asynchronously
          // when the response is available
          //show response for debug
           console.log('successCallback response: ');
           console.log(response.data.objects);
          return response.data;
      }, function errorCallback(response) {
          // called asynchronously if an error occurs
          // or server returns response with an error status.
          //show response for debug
          console.log('errorCallback unparsed response: ' + response);
      });
      return returnData;
    };
}
