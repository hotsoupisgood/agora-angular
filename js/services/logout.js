module.exports = function ($rootScope, $cookies, userService) {
  this.submit = function () {
      $rootScope.accountInfo = null;
      $rootScope.isLoggedIn = false;
      $cookies.remove('username');
      $cookies.remove('password');
      console.log('logged out');
  };
}
