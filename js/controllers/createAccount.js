module.exports =  function($scope, $routeParams, $location) {
    $scope.name = 'createAccountController';
    $scope.$params = $routeParams;
    $scope.username;
    $scope.password;
    $scope.createdAccount;

    $scope.createAccount = function(usr, pass) {
        //request
        $http({
            method: 'POST',
            url: 'https://startandselect.com/scripts/MakeUser.php',
            params: {
                username: usr,
                password: pass
            }
        }).then(function successCallback(response) {
            // this callback will be called asynchronously
            // when the response is available
            $scope.createdAccount = response.data;
            $rootScope.accountInfo = $scope.createdAccount;
            $rootScope.isLoggedIn = true;
            $location.path('/questions');
            //show response for debug
            console.log('usr: ' + usr + ' pass: ' + pass + ' successCallback unparsed response: ' + response.data);
        }, function errorCallback(response) {
            // called asynchronously if an error occurs
            // or server returns response with an error status.
            //show response for debug
            console.log('errorCallback unparsed response: ' + response.data);
        });
    };
};
