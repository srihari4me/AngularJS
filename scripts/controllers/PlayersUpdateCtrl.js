angular.module('MyApp.controllers')
    .controller('PlayersUpdateCtrl', ['$scope', '$stateParams', '$state', 'Player',
        function ($scope, $stateParams, $state, Player) {
            'use strict';

            $scope.loadPlayer = function () {
                $scope.player = Player.get({
                    id: $stateParams.id
                })
            }
            $scope.loadPlayer();

            $scope.updatePlayer = function () {
                $scope.player.$update(function () {
                    $state.go('players');
                })
            }

         }]);