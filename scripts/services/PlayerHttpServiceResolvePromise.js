angular.module('MyApp.services')
    .service('PlayerHttpServiceResolvePromise', ['$http', '$q',
        function ($http, $q) {
            'use strict';

            var getPlayers = function () {
                return $http({
                    method: 'GET',
                    url: 'http://localhost:8888/players'
                }).then(function(players) {
                    return players.data
                }).catch(function(reason) {
                    return $q.reject("Status-" + reason.status)
                });
            }

            return {
                getPlayers: getPlayers
            };
         }]);