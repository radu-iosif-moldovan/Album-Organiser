angular.module('bandlist', []).
  config(['$routeProvider', function($routeProvider) {
  $routeProvider.
      when('/bands', {templateUrl: './band-list.html',   controller: BandCtrl}).
      when('/bands/:bandName', {templateUrl: './band-detail.html', controller: NotYetCtrl}).
      otherwise({redirectTo: '/bands'});
}]);