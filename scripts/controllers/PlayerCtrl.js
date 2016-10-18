angular.module('MyApp.controllers')
    .controller('PlayerCtrl',['$scope','PlayerService',
        function ($scope, PlayerService) {
            'use strict';
            
            $scope.players = PlayerService.getPlayers;
            console.log("Players-->" + $scope.players);
         }]);
