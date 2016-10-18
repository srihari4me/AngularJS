angular.module('MyApp.services')
    .service('MyDataServiceByService', [
        function () {
            'use strict';

            this.names = ["Name1", "Name2", "Name3"];

            this.addName = function (name) {
                this.names.push(name);
            }

            this.removeName = function (index) {
                this.names.splice(index, 1);
            }

            this.getNames = function () {
                return this.names;
            }

            /*return {
                // Closure (Kind of interface)
                addName: addName,
                removeName: removeName,
                getNames: getNames
            }*/
         }]);