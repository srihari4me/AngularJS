angular.module('MyApp.controllers')
    .controller('FourthCtrl',['$scope','MyDataServiceByProvider',
        function ($scope,MyDataServiceByProvider) {
            'use strict';
            
            $scope.names=MyDataServiceByProvider.getNames();
            
            console.log($scope.names);
            
            $scope.addName=function(){
                var name=prompt('Please enter a name');
                if(name) {
                    MyDataServiceByProvider.addName(name);
                }                
            }
            
            $scope.removeName=function(){
                var index=document.querySelector('#nameList').options.selectedIndex;
                console.log("Selected index " + index);
                if(index!=-1) {
                    MyDataServiceByProvider.removeName(index-1);
                }
            }
         }]);
