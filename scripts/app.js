angular.module('MyApp', [
    'MyApp.controllers',
    'MyApp.directives',
    'MyApp.providers',
    'MyApp.services',
    'MyApp.filters'
]).config([
    function () {
        'use strict';
        /*your code */
    }
]).factory([
    function () {
        'use strict';
        /*your code */
    }
]).run([
    function () {
        'use strict';
        /*your code */
    }
]);
angular.module('MyApp.controllers', []);
angular.module('MyApp.services', ['ngResource']);
angular.module('MyApp.providers', []);
angular.module('MyApp.directives', []);
angular.module('MyApp.filters', []);
