'use strict';

angular.module('myApp.view1', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/view1', {
    templateUrl: 'view1/view1.html',
    controller: 'View1Ctrl'
  });
}])

.controller('View1Ctrl', [ () => {
      let apiUrl = 'http://ws.audioscrobbler.com/2.0/?method=user.gettopartists&user=fernandoza&api_key=a0a0ddf863c0fb600a0eff7243ed04af&format=json&period=overall';
      fetch(apiUrl);
}]);


