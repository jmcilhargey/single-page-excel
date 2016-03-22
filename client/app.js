angular.module("linkApp", [])

  .controller("MainController", ["$scope", function($scope) {
    
  $scope.test = "Tester";
}]);


$(document).ready(function() {
  $(".navbar-nav a").on("click", function(event) {
    event.preventDefault();
    var hash = this.hash;
    
    var windowOffset = $(hash).offset().top;
    
    $("html, body").animate({scrollTop : windowOffset}, 500, function() {
      window.location.hash = hash;
    });
  });
});