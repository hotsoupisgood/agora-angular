module.exports = function ($animate, util) {
  this.run=function(ele,animation){
    $animate.addClass(ele, animation).then(function(){
      $animate.removeClass(ele, animation);
    });
  }
  this.fly=function(){
    this.run(util.getId("overlay-submit"), 'fly');
  }
  this.thumbsDown=function(){
    this.run(util.getId("overlay-unvote"), 'pop-shake');
  }
  this.thumbsUp=function(){
    this.run(util.getId("overlay-vote"), 'pop-shake');
  }
};
