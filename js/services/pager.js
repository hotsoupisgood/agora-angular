module.exports = function (userService) {
  this.getTotalNumberOfPages = function (totalQuestions) {
    return totalQuestions / userService.questionsAPage;
  };
};
