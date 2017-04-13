module.exports = function(userService, $http) {
    this.get = function(currentPage, order, size) {
        //multiply page number for first question desired
        var startQuestion = currentPage * userService.questionsAPage;
        //request
        var returnData = $http({
            method: 'GET',
            url: 'https://api.iex.ist/' + size + '/question/',
            params: {
                limit: userService.numIteratedPerPage,
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
