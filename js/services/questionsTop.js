module.exports = function(userService, $http) {
    this.get = function(currentPage, order, size) {
        //multiply page number for first question desired
        var startQuestion = currentPage * userService.questionsAPage;
        //request
        var returnData = $http({
            method: 'GET',
            url: 'http://api.iex.ist/' + size + '/question/',
            params: {
                limit: userService.numIteratedPerPage,
                offset: startQuestion,
                order_by: order
            },
            headers: {
                'Content-type': 'application/json'
            }
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
}
