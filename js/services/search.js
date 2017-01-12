module.exports = function ($http, userService) {
    this.questions = function (currentSearchTerm) {
      var returnData = $http({
          method: 'GET',
          url: 'http://api.iex.ist/min/question/search/',
          params: {
              limit: 10,
              query: currentSearchTerm,
              offset: 0
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
           console.log(response.data);
          return response.data.objects;
      }, function errorCallback(response) {
          // called asynchronously if an error occurs
          // or server returns response with an error status.
          //show response for debug
          console.log('errorCallback unparsed response: ' + response);
      });
      return returnData;
    };
    this.responses = function (currentSearchTerm) {
      var returnData = $http({
          method: 'GET',
          url: 'http://api.iex.ist/min/response/search/',
          params: {
              limit: 10,
              query: currentSearchTerm,
              offset: 0
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
          return response.data.objects;
      }, function errorCallback(response) {
          // called asynchronously if an error occurs
          // or server returns response with an error status.
          //show response for debug
          console.log('errorCallback unparsed response: ');
          console.log(response.data.objects);
      });
      return returnData;
    };this.users = function (currentSearchTerm) {
      var returnData = $http({
          method: 'GET',
          url: 'http://api.iex.ist/min/user/search/',
          params: {
              limit: 10,
              query: currentSearchTerm,
              offset: 0
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
          return response.data.objects;
      }, function errorCallback(response) {
          // called asynchronously if an error occurs
          // or server returns response with an error status.
          //show response for debug
          console.log('errorCallback unparsed response: ');
          console.log(response.data.objects);
      });
      return returnData;
    };this.tagz = function (currentSearchTerm) {
      var returnData = $http({
          method: 'GET',
          url: 'http://api.iex.ist/min/tag/search/',
          params: {
              limit: 10,
              query: currentSearchTerm,
              offset: 0
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
          return response.data.objects;
      }, function errorCallback(response) {
          // called asynchronously if an error occurs
          // or server returns response with an error status.
          //show response for debug
          console.log('errorCallback unparsed response: ');
          console.log(response.data.objects);
      });
      return returnData;
    };
}
