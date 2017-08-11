module.exports = function ($animate) {
  this.getId=function(id){
    return angular.element(document.getElementById(id));
  }
  this.run=function(ele,animation){
    $animate.addClass(ele, animation).then(function(){
      $animate.removeClass(ele, animation);
    });
  }
  this.fly=function(){
    this.run(this.getId("overlay-submit"), 'fly');
  }
  this.thumbsDown=function(){
    this.run(this.getId("overlay-unvote"), 'pop-shake');
  }
  this.thumbsUp=function(){
    this.run(this.getId("overlay-vote"), 'pop-shake');
  }
};
