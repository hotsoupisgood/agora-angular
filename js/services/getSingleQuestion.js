module.exports = function($http) {
    this.get = function(id) {
        //multiply page number for first question desired
        //request
        var returnData = $http({
            method: 'GET',
            url: 'https://api.iex.ist/full/question/' + id

        }).then(function successCallback(response) {
            // this callback will be called asynchronously
            // when the response is available
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
