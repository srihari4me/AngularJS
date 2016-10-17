angular.module('MyApp.controllers')
    .controller('SecondCtrl',['$scope','MyDataService',
        function ($scope,MyDataService) {
            'use strict';
            
            $scope.names=MyDataService.getNames();
            
            console.log($scope.names);
            
            $scope.addName=function(){
                var name=prompt('Please enter a name');
                if(name) {
                    MyDataService.addName(name);
                }                
            }
            
            $scope.removeName=function(){
                var index=document.querySelector('#nameList').options.selectedIndex;
                console.log("Selected index " + index);
                if(index!=-1) {
                    MyDataService.removeName(index-1);
                }
            }
         }]);
