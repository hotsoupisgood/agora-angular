module.exports =  function($scope) {
    $scope.hiddenInfo = {};
    $scope.hiddenInfo.usernameTaken = true;

    $scope.liveNameTakenCheck = function () {
      // if ($scope.username.length < minLengthOfUsernames) {
        if (false) {
        console.log('name too small to check');
      } else {
        $interval(function () {
          $http({
              method: 'POST',
              url: 'https://startandselect.com/scripts/CheckUser.php',
              params: {
                  username: $scope.username
              }
          }).then(function successCallback(response) {
              // this callback will be called asynchronously
              // when the response is available
              $scope.createdAccount = true;
              //show response for debug
              console.log( ' successCallback unparsed response: ' + response.data);
          }, function errorCallback(response) {
              // called asynchronously if an error occurs
              // or server returns response with an error status.
              //show response for debug
              console.log('errorCallback unparsed response: ' + response.data);
          });
        }, 500);
      }
    }
};
