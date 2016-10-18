angular.module('MyApp.services')
    .provider('MyDataServiceByProvider', [
        function () {
            'use strict';

            this.$get=function() {
            var names = ["Name1", "Name2", "Name3"];

            var addName = function (name) {
                names.push(name);
            }

            var removeName = function (index) {
                names.splice(index, 1);
            }

            var getNames = function () {
                return names;
            }
            

            return {
                // Closure (Kind of interface)
                addName: addName,
                removeName: removeName,
                getNames: getNames
            }
            }
         }]);