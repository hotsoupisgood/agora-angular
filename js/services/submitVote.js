module.exports = function ($rootScope, $http) {
    this.submit = function (id) {
      if ($rootScope.isLoggedIn) {
          return $http({
              method: 'POST',
              url: 'https://api.iex.ist/full/response_vote/',
              data: {
                "parent_id": id
              },
              headers: {
                  'Content-type': 'application/json',
                  'Authorization': 'ApiKey ' + $rootScope.accountInfo.username + ':' + $rootScope.accountInfo.key
              }
          }).then(function successCallback(response) {
              return response;
          }, function errorCallback(response) {
              return response;
          });
        }
    }
};
