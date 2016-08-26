module.exports = function($location, $anchorScroll, $cookies, $timeout) {
      this.scrollToId = function (id) {
        $location.hash(id);
        $anchorScroll();
      };
      this.scrollToLastOpen = function () {
        // $timeout(function () {
        //   var old = $location.hash();
        //   // $location.hash('#' + old);
        //   $anchorScroll();
        //   // console.log($location.hash());
        //   // $anchorScroll();
        // });
      };
      this.storeLastOpen = function (id) {
        $location.hash(id);
      };
      this.getLastOpen = function () {
        return $location.hash();
      };
      this.clearLastOpen = function () {
        $location.hash(null);
      };
};
