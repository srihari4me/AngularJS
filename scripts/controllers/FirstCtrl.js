angular.module('MyApp.controllers')
    .controller('FirstCtrl',['$scope','$interval',
        function ($scope, $interval) {
            'use strict';
            
            $scope.model={ // creating model inside controller itself
                now: new Date() //name value pair
            }
            
            var update=function() {
                $scope.model.now=new Date();
            }
            
            //function update(){}
            
            /*setInterval(function() {              
                $scope.$apply(update);
            },1000);*/
            
            $interval(function() {              
                update();
            },1000);
            
            $scope.$watch("model.now", function(newValue,oldValue) {
              console.log("Old " + oldValue + ", New " + newValue);  
            })
         }]);

angular.bootstrap(document.body, ["MyApp"])
