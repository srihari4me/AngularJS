angular.module('MyApp.services')
    .service('AsyncPlayerService', ['$q', 
                                    '$timeout',
        function ($q, $timeout) {
            'use strict';

            var players = [
                {
                    name: "Sachin",
                    mentor: "Sunil",
                    birthDate: "20-02-1973",
                    friends: [
                        "Dravid", "Ganguly", "Laxman"
                    ]
                },
                {
                    name: "Sachin1",
                    mentor: "Sunil1",
                    birthDate: "20-02-1975",
                    friends: [
                        "Dravid1", "Ganguly1", "Laxman1"
                    ]
                }
            ];


            var getPlayers = function () {

                var deferred = $q.defer();

                var flag = true;

                $timeout(function () {

                    if (flag) {
                        deferred.resolve(players);
                    } else {
                        deferred.reject('Unable to process')
                    }

                }, 3000)
                return deferred.promise;
            }

            return {
                getPlayers: getPlayers
            }
         }]);