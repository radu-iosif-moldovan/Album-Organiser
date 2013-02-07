/*global angular:false*/
/*global BandCtrl:false*/
/*global DetailCtrl:false*/
/*global HomeCtrl:false*/
/*global BookCtrl:false*/
angular.module('mediaLibrary', []).
    config(['$routeProvider', function ($routeProvider) {
        "use strict";
        $routeProvider.
            when('/home', {templateUrl: './home.html' , controller: HomeCtrl}).
            when('/books', {templateUrl: './author-list.html' , controller: BookCtrl}).
            when('/bands', {templateUrl: './band-list.html',   controller: BandCtrl}).
            when('/bands/:bandName', {templateUrl: './band-detail.html', controller: DetailCtrl}).
            otherwise({redirectTo: '/home'});
    }]);