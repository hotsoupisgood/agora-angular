module.exports = function() {
  /*this.getTotalNumberOfPages = function (totalQuestions) {
    return totalQuestions / userService.questionsAPage;
  };*/
  this.getId=function(id){
    return angular.element(document.getElementById(id));
  }
};
