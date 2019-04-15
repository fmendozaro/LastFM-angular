'use strict';

let apiUrl = 'http://ws.audioscrobbler.com/2.0/?method=user.gettopartists&user=fernandoza&api_key=a0a0ddf863c0fb600a0eff7243ed04af&format=json&period=overall';

angular.module('myApp.view1', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/view1', {
    templateUrl: 'view1/view1.html',
    controller: 'View1Ctrl'
  });
}])

.controller('View1Ctrl', [ function() {
    httpClie
    this.fake = 'yes';
        fetch(apiUrl)
            .then(response => response.json())
            .then(results => {
                console.log(results.topartists);
                this.fake = 'no';
                this.artists = results.topartists.artist;
            });
}]);


