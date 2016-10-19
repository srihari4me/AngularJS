angular.module('MyApp.controllers')
    .controller('PlayersCtrl', ['$scope', 'Player',
        function ($scope, Player) {
            'use strict';

            //$scope.players = PlayerRestService.query();

            Player.query().$promise
                .then(function (PlayerResponse) {
                    $scope.players = PlayerResponse
                }).catch(function (reason) {
                    alert("Reason " + reason)
                });
         }]);