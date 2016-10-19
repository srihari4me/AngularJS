angular.module('MyApp.services')
    .service('PlayerRestService',['$resource',
        function ($resource) {
            'use strict';
            return $resource('http://localhost:9999/service/players/:player_id', {
                player_id: '@player_id'
            }, {
                'update': {
                    method: 'PUT'
                }
            })
         }]);
