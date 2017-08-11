module.exports = function($rootScope, $http) {
    this.edit = function(type, id, _text) {
        return $http({
            method: 'PATCH',
            url: 'https://api.iex.ist/full/' + type + '/' + id + '/',
            //production params
            data: {
                text: _text,
            },
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
    this.editQuestion = function(id, text) {
        return this.edit("question", id, text);
    };
    this.editResponse = function(id, text) {
        return this.edit("response", id, text);
    };
    this.editModule = function(id, text) {
        return this.edit("module", id, text);
    };
    this.editComment = function(id, text) {
        return this.edit("comment", id, text);
    };

    //GKRSLCAFKG
    this.submitQuestion = function(askedQuestion, questionsTags, id) {
        return $http({
            method: 'PATCH',
            url: 'https://api.iex.ist/full/question/' + id + '/',
            //production params
            data: {
                text: askedQuestion,
                tags: questionsTags
            },
            headers: {
                'Content-type': 'application/json',
                'Authorization': 'ApiKey ' + $rootScope.accountInfo.username + ':' + $rootScope.accountInfo.key
            }
        }).then(function successCallback(response) {
            // this callback will be called asynchronously
            // when the response is available
            console.log('successCallback, response: ');
            console.log(response.data);
            return true;
        }, function errorCallback(response) {
            // called asynchronously if an error occurs
            // or server returns response with an error status.
            console.log('errorCallback, response: ');
            console.log(response.data);
            return false;
        });
    }
}
