angular.module('MyApp.directives')
    .directive('playerInfoCard' ,[ 
        function () {
            'use strict';
            return{
                restrict: 'E',
                templateUrl:'scripts/partials/playerCard.html',
                 
                scope: {
                    player: '=' // = denotes an object
                },
                controller:function($scope) {
                    $scope.clickMe=function(player) {
                        alert(player.birthDate);
                    }
                }
            };
         }]);
