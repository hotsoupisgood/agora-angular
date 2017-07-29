module.exports =  function($location) {
  restrict: 'A',
  link: function (scope, element, attr) {
    element.attr('style', 'cursor:pointer');
    element.on('click', function(){
      $location.path(attr.suchHref)
      scope.$apply();
    });
  }
};
