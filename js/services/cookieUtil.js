module.exports = function ($http, $cookies, $rootScope, loginService) {
  this.all = function () {
    loginService.cookieLogin();
    $rootScope.minBanner = $cookies.get('minBanner');
    $rootScope.lastTab = $cookies.get('lastTab');
  }
};
