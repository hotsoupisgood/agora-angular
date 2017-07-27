module.exports = function ($animate) {
  this.run=function(ele,animation){
    $animate.addClass(ele, animation).then(function(){
      $animate.removeClass(ele, animation);
    });
  }
};
