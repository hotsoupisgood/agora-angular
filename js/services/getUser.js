module.exports = function($cookies, $http, $rootScope) {
      // account info
      this.accountInfo = null;
      this.isLoggedIn = false;
      this.questionsAPage = 15;
      this.totalQueriedQuestions = null;
      this.minLengthOfUsernames = 4;
      this.getIsLoggedIn = function () {
        return this.isLoggedIn;
      };
      this.setIsLoggedIn = function (infoToSet) {
        this.isLoggedIn = this.infoToSet;
      };
      this.getApiKey = function () {
        return 'ApiKey ' + $rootScope.accountInfo.username + ':' + $rootScope.accountInfo.key
      };
      this.get = function(inputUsername) {
        console.log(inputUsername);
          //request
          var returnData = $http({
              method: 'GET',
              url: 'https://api.iex.ist/full/user/'+inputUsername

          }).then(function successCallback(response) {
              // this callback will be called asynchronously
              // when the response is available
              //  console.log('successCallback unparsed response: ' + JSON.stringify(response.data.questions));
              console.log(response.data);

              return response.data;
          }, function errorCallback(response) {
              // called asynchronously if an error occurs
              // or server returns response with an error status.
              //show response for debug
              return false;
          });
          return returnData;
      };

};
