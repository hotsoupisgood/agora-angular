module.exports = function($rootScope, $http, userService) {
    this.remove = function(type, id) {
        if (!confirm('Are you sure you want to delete this '+ type +'?\nIt will be gone FOREVER!')) {
          return false;
        }
        return $http({
            method: 'DELETE',
            url: 'https://api.iex.ist/full/' + type + '/' + id + '/',
            headers: {
                'Content-type': 'application/json',
                'Authorization': 'ApiKey ' + $rootScope.accountInfo.username + ':' + $rootScope.accountInfo.key
            }
        }).then(function successCallback(response) {
            console.log('successCallback, response: ');
            console.log(response.data);
            return true;
        }, function errorCallback(response) {
            console.log('errorCallback, response: ');
            console.log(response.data);
            return false;
        });
    };
    this.removeQuestion=function(id) {return this.remove("question", id);};
    this.removeResponse=function(id) {return this.remove("response", id);};
    this.removeModule=function(id) {return this.remove("module", id);};
    this.removeComment=function(id) {return this.remove("comment", id);};
}
