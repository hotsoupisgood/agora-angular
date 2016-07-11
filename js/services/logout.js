module.exports = function ($rootScope, $cookies, accountService) {
  this.submit = function () {
      accountService.setIsLoggedIn(false);
      accountService.setAccountInfo(null);
      $rootScope.accountInfo = null;
      $rootScope.isLoggedIn = false;
      $cookies.remove('username');
      $cookies.remove('password');
      // $location.path('/login');
      console.log('logged out');
  };
}
