'use strict';

angular.module('appsflyerApp')
  .controller('MainCtrl', function ($scope, $http) {

    $scope.searchuUrl ={
      baseuUrl: 'https://www.googleapis.com/youtube/v3/search',
      part: 'snippet',
      videoCaption: 'closedCaption',
      type: 'video',
      maxResults: 25,
      key: 'AIzaSyBNPjKNPK_R8raVLKs33g5L4PAhpsNH0JU'
    };

    $scope.searchText = '';

    $scope.searchFunction = function() {
      var composerdUrl = $scope.searchuUrl.baseuUrl + '?part='  + $scope.searchuUrl.part + '&q=' + $scope.searchText + '&videoCaption=' + $scope.searchuUrl.videoCaption + '&type=' + $scope.searchuUrl.type + '&maxResults=' + $scope.searchuUrl.maxResults + '&key=' + $scope.searchuUrl.key;
      $http.get(composerdUrl).success(function(data) {
        $scope.searchList = data.items;
      });
    };

    $http.get('/api/things').success(function(awesomeThings) {
      $scope.awesomeThings = awesomeThings;
    });

  });
