module.exports = function($rootScope, $http, userService) {
    this.get = function(id) {
        //multiply page number for first question desired
        //request
        var req={
            method: 'GET',
            url: 'https://api.iex.ist/full/question/' + id
        }
        if($rootScope.isLoggedIn){
          req.params={}
          req.params.username=$rootScope.accountInfo.username
        }
        var returnData = $http(req).then(function successCallback(response) {
            return response.data;
        }, function errorCallback(response) {
            return false;
        });
        return returnData;
    };
}
