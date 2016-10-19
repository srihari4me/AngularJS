angular.module('MyApp.controllers')
    .controller('PlayersAddCtrl', ['$scope','$state','Player',
        function ($scope, $state, Player) {
            'use strict';

            $scope.player = new Player();

            $scope.addPlayer = function () {
                $scope.player.$save(function () {
                    $state.go('players');
                })
            }

         }]);