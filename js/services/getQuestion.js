module.exports = function(getUserService, $http, $rootScope) {
    this.getDetail = function(id) {
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
    this.getList = function(currentPage, order, size) {
        //multiply page number for first question desired
        var startQuestion = currentPage * getUserService.questionsAPage;
        //request
        var returnData = $http({
            method: 'GET',
            url: 'https://api.iex.ist/' + size + '/question/',
            params: {
                limit: getUserService.numIteratedPerPage,
                offset: startQuestion,
                order_by: order
            },
            headers: {
                'Content-type': 'application/json'
            },
            timeout: 5000,
        }).then(function successCallback(response) {
            // this callback will be called asynchronously
            // when the response is available
            // console.log(response.data);
            return response.data;
        }, function errorCallback(response) {
            // called asynchronously if an error occurs
            // or server returns response with an error status.
            //show response for debug
            return false;
        });
        return returnData;
    };
    this.getRandomTags = function() {
        var returnData = $http({
            method: 'GET',
            url: 'https://api.iex.ist/full/tag/?order_by=?'
        }).then(function successCallback(response) {
            // this callback will be called asynchronously
            // when the response is available
            console.log(response.data.objects);
            return response.data.objects;
        }, function errorCallback(response) {
            // called asynchronously if an error occurs
            // or server returns response with an error status.
            //show response for debug
            return false;
        });
        return returnData;
    };
}
