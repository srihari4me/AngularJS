/*angular.module('MyApp.controllers')
    .controller('PlayersCtrl', ['$scope', 'Player',
        function ($scope, Player) {
            'use strict';

            //$scope.players = PlayerRestService.query();

            Player.query().$promise
                .then(function (PlayerResponse) {
                    $scope.players = PlayerResponse
                }).catch(function (reason) {
                    alert("Reason " + reason)
                });
         }]);*/

/*angular.module('MyApp.controllers')
    .controller('PlayersCtrl', ['$scope', 'Player',
        function ($scope, Player) {
            'use strict';

            $scope.players = Player.query();
            
            // resolving promise will be taken care by router (ref - app.js)
            
         }]);*/

//angular.module('MyApp.controllers')
//	.controller('PlayersCtrl', ['$scope', 'Player',
//        function ($scope, Player) {
//			'use strict';
//			//$scope.players = PlayerRestService.query();
//
//			Player.query().$promise.then(function (PlayerResponse) {
//				$scope.players = PlayerResponse
//			}).catch(function (reason) {
//				alert("Reason " + reason)
//			});
//
//         }]);

angular.module('MyApp.controllers')
    .controller('PlayersCtrl', ['$scope', '$window', 'players',
        function ($scope, $window, players) {


            'use strict';

            $scope.players = players;
            $scope.gridOptions = {
                data: 'players',
                columnDefs: [{
                        field: 'name',
                        displayName: 'Name'
				},
                    {
                        field: 'debutYear',
                        displayName: 'Debut Year'
				},
                    {
                        /*displayName: 'Actions',
                        cellTemplate: '<td>' +
                            '<a class="btn btn-primary" ui-sref="playerDetails({id:row.entity._id})">View</a>' +
                            '</td>' +
                            '<td>' +
                            '<a class="btn btn-danger" ng-click="deletePlayer(row.entity)">Delete</a>' +
                            '</td>'
					}*/

                        displayName: 'Actions',
                        cellTemplate: '<div class="grid-action-cell">' +
                            '<a class="btn btn-xs btn-primary" ui-sref = "playerDetails({id:row.entity._id})" >View</a>' +
                            "&nbsp;&nbsp"+
                            '<a class="btn btn-xs btn-danger" ng-click=" $event.stopPropagation();deletePlayer(row.entity);" href="#">Delete</a></div>'
				}
							]
            };


            $scope.deletePlayer = function (player) {

                //var player = this.row.entity;

                player.$delete(function () {
                    $window.location.href = '';
                })
            }

            //$scope.players = players;



         }]);