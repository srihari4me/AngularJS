angular.module('MyApp.services')
    .service('RestService',['$resource',
        function ($resource) {
            'use strict';
            return $resource('http://jsonplaceholder.typicode.com/posts/:resource_id', {
                resource_id: '@resource_id'
            }, {
                'update': {
                    method: 'PUT'
                }
            })
         }]);
