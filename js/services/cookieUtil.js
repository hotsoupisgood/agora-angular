module.exports = function ($http, $cookies, $rootScope, loginService) {
  this.all = function () {
    $rootScope.loggingIn=true;
    loginService.cookieLogin();
    $rootScope.minBanner = $cookies.get('minBanner');
    $rootScope.lastTab = $cookies.get('lastTab');
  }
};
