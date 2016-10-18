angular.module('MyApp.directives')
    .directive('animation',[
        function () {
            'use strict';
            return{
                restrict: 'A',
                link: function (scope, element, attrs) {
                    element.hover(function () {
                        $(this).transition({
                            scale: 1.1
                        })
                    }, function () {
                        $(this).transition({
                            scale: 1
                        })
                    })    
                }
            };
         }]);
