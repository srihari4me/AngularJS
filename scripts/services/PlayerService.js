angular.module('MyApp.services')
    .service('PlayerService', [
        function () {
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

            return {
                getPlayers: players
            };
         }]);