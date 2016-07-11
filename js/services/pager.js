module.exports = function (accountService) {
  this.getTotalNumberOfPages = function (totalQuestions) {
    return totalQuestions / accountService.questionsAPage;
  };
};
