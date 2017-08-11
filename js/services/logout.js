module.exports = function ($rootScope, $cookies) {
  this.submit = function () {
      $rootScope.accountInfo = null;
      $rootScope.isLoggedIn = false;
      $cookies.remove('username');
      $cookies.remove('password');
      console.log('logged out');
      //TODO: Send a logout request to the server
  };
}
