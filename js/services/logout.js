module.exports = function ($rootScope, $cookies, userService) {
  this.submit = function () {
      userService.setIsLoggedIn(false);
      userService.setAccountInfo(null);
      $rootScope.accountInfo = null;
      $rootScope.isLoggedIn = false;
      $cookies.remove('username');
      $cookies.remove('password');
      // $location.path('/login');
      console.log('logged out');
  };
}
