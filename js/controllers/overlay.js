module.exports =  function($scope, $rootScope, animationService, util) {
    $scope.name = 'overlay';
    $rootScope.$on("overlay-vote", function(){
      animationService.run(util.getId("overlay-vote"), 'pop-shake');
    });
    $rootScope.$on("overlay-unvote", function(){
      animationService.run(util.getId("overlay-unvote"), 'pop-shake');
    });
    $rootScope.$on("overlay-submit", function(){
      animationService.run(util.getId("overlay-submit"), 'fly');
    });
};
