module.exports = function (accountService, $http) {
  this.get = function (currentPage) {
    //multiply page number for first question desired
    var startQuestion = currentPage * accountService.questionsAPage;
    // console.log(startQuestion);
    //request
    var returnData = $http({
        method: 'GET',
        url: 'https://startandselect.com/api/full/question/',
        params: {
            limit: accountService.numIteratedPerPage,
            offset: startQuestion
        },
        headers: {
          // 'headers': 'ApiKey',
          // 'username': 'apikey23452345en23ghqhnnhsren',
          'Content-type': 'application/json'
        }

    }).then(function successCallback(response) {
        // this callback will be called asynchronously
        // when the response is available
        //  console.log('successCallback unparsed response: ' + JSON.stringify(response.data.questions));
        console.log('successCallback unparsed response: ' + response.data);
        return response.data;
    }, function errorCallback(response) {
        // called asynchronously if an error occurs
        // or server returns response with an error status.
        //show response for debug
        console.log('errorCallback unparsed response: ' + JSON.stringify(response.data));
    });
    return returnData;
  };
}
