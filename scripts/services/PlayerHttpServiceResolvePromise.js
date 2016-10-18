angular.module('MyApp.services')
    .service('PlayerHttpServiceResolvePromise', ['$http', '$q',
        function ($http, $q) {
            'use strict';

            var getPlayers = function () {
                return $http({
                    
                    method: 'GET',
                    url: 'http://localhost:8888/players',
                    transformResponse : transformData //call back function
                    
                }).then(function(players) {
                    return players.data
                }).catch(function(reason) {
                    return $q.reject("Status-" + reason.status)
                });
            }
            
            function transformData(data, headers) {
                var transformed=angular.fromJson(data);
                transformed.forEach(function(currentValue, index, prop) {
                    currentValue.dateDownloaded = new Date().toLocaleDateString();
                })
                return transformed;
            }

            return {
                getPlayers: getPlayers
            };
         }]);