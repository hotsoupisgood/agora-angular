module.exports = function($http) {
    this.submit = function (id) {
            return $http({
                method: 'GET',
                url: 'https://api.iex.ist/full/comment/',
                data: {
                    id: id
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
    };
};
