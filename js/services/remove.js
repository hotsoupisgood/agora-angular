module.exports = function($rootScope, $http, userService) {
    this.remove = function(type, id) {
        return $http({
            method: 'remove',
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
    }
    this.removeQuestion=function(id) {this.remove("question");};
    this.removeResponse=function(id) {this.remove("response");};
    this.removeModule=function(id) {this.remove("module");};
    this.removeComment=function(id) {this.remove("comment");};
}
