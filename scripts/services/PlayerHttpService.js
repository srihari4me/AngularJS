angular.module('MyApp.services')
    .service('PlayerHttpService',['$http',
        function ($http) {
            'use strict';
            
            var getPlayers = function () {
                return $http({
                    method:'GET',
                    url:'http://localhost:8888/players'
                })
            }
            
            return {
                getPlayers: getPlayers
            };
         }]);
