angular.module('MyApp.services')
    .service('Player',['$resource',
        function ($resource) {
            'use strict';
            return $resource('http://localhost:9090/service/players/:id', {
                id: '@_id'
            }, {
                'update': {
                    method: 'PUT'
                }
            })
         }]);
