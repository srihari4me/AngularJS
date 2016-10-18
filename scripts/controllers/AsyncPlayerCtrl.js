angular.module('MyApp.controllers')
    .controller('AsyncPlayerCtrl', ['$scope', 'AsyncPlayerService',
        function ($scope, AsyncPlayerService) {
            'use strict';

            var promise = AsyncPlayerService.getPlayers();
            console.log("Players-->" + promise);

            promise.then(function (players) {
                $scope.players = players;
            }).catch(function (reason) {
                alert(reason);
            }).finally(function () {
                console.log("Inside Finally");
            })

         }]);