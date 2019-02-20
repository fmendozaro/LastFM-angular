'use strict';

// Declare app level module which depends on views, and core components
angular.module('myApp', [
  'ngRoute',
  'myApp.view1',
  'myApp.view2',
  'myApp.version'
]).
config(['$locationProvider', '$routeProvider', function($locationProvider, $routeProvider) {
  $locationProvider.hashPrefix('!');

  $routeProvider.otherwise({redirectTo: '/view1'});
}]);

//http://ws.audioscrobbler.com/2.0/?method=user.gettopartists&user=fernandoza&api_key=a0a0ddf863c0fb600a0eff7243ed04af&format=json
