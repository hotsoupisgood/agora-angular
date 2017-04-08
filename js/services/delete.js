module.exports = function($rootScope, $http, userService) {
    this.delete = function(type, id) {
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
    }
    this.deleteQuestion(id) {this.delete("question");};
    this.deleteResponse(id) {this.delete("response");};
    this.deleteModule(id) {this.delete("module");};
    this.deleteComment(id) {this.delete("comment");};
}
