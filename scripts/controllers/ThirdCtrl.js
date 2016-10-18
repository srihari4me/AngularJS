angular.module('MyApp.controllers')
    .controller('ThirdCtrl',['$scope','MyDataServiceByService',
        function ($scope,MyDataServiceByService) {
            'use strict';
            
            $scope.names=MyDataServiceByService.getNames();
            
            console.log($scope.names);
            
            $scope.addName=function(){
                var name=prompt('Please enter a name');
                if(name) {
                    MyDataServiceByService.addName(name);
                }                
            }
            
            $scope.removeName=function(){
                var index=document.querySelector('#nameList').options.selectedIndex;
                console.log("Selected index " + index);
                if(index!=-1) {
                    MyDataServiceByService.removeName(index-1);
                }
            }
         }]);
