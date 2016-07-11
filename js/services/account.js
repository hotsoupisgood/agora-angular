module.exports = function($cookies) {
      // account info
      this.accountInfo = null;
      this.isLoggedIn = false;
      this.questionsAPage = 15;
      this.totalQueriedQuestions = null;
      this.minLengthOfUsernames = 4;
      //debug usr account
      this.usr = 'henry';
      this.pass = 'fuck';
      this.getAccountInfo = function () {
        return accountInfo;
      };
      this.setAccountInfo = function (infoToSet) {
        this.accountInfo = infoToSet;
      };
      this.getIsLoggedIn = function () {
        return this.isLoggedIn;
      };
      this.setIsLoggedIn = function (infoToSet) {
        this.isLoggedIn = this.infoToSet;
      };
};
