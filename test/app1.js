console.log(new Date());

/*
class y {
    toString() {
        return "Hello";
    }
}
*/

function x() {
    'use strict';
    var age=32;
    return {
        age: age
    }
}

var instance1 = new x();
//var instance2 = new y();

console.log(instance1.age);
//console.log(instance2.toString());