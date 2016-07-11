module.exports = function (accountService, $http) {
  this.get = function (currentPage) {
    //multiply page number for first question desired
    var startQuestion = currentPage * accountService.questionsAPage;

    //request
    var returnData = $http({
        method: 'POST',

        url: 'https://startandselect.com/scripts/GetPopularQuestion.php',

        params: {
            limit: accountService.numIteratedPerPage,
            offset: startQuestion
        }

    }).then(function successCallback(response) {
        // this callback will be called asynchronously
        // when the response is available
        //  console.log('successCallback unparsed response: ' + JSON.stringify(response.data.questions));
        return response.data.questions;
    }, function errorCallback(response) {
        // called asynchronously if an error occurs
        // or server returns response with an error status.
        //show response for debug
        console.log('errorCallback unparsed response: ' + response);
    });
    return returnData;
  };
}
