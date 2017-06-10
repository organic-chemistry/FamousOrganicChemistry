angular.module('app.directives', [])


.directive('smallChem', function() {
  return {
    restrict: 'E',
    scope: {
      id: '=' ,
      img : '=',
      answered: '=',
      idclicked: '=' ,
      right: '=',
      platform: '=test'
    },
    templateUrl: 'templates/smallchem.html' ,

    link: function(scope, element, attrs) {
          scope.clicked = false
          scope.platform = "androido"
          },
  };
});
