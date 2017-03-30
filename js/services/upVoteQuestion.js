module.exports = function ($rootScope, $http, userService) {
    this.response = function (id) {
      if ($rootScope.isLoggedIn) {
          //request
          var returnData = $http({
              method: 'POST',
              url: 'http://api.iex.ist/full/response_vote/',
              data: {
                response_id: id
              },
              headers: {
                  'Content-type': 'application/json',
                  'Authorization': 'ApiKey ' + $rootScope.accountInfo.username + ':' + $rootScope.accountInfo.key
              }
          }).then(function successCallback(response) {
              // this callback will be called asynchronously
              // when the response is available
              //show response for debug
              console.log('successCallback unparsed response: ');
              console.log(response.data);
              return true;
          }, function errorCallback(response) {
              // called asynchronously if an error occurs
              // or server returns response with an error status.
              //show response for debug
              console.log('errorCallback unparsed response: ');
              console.log(response.data);
              return false;
          });
          return returnData;
        }
    }
};
