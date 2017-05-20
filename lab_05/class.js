'use strict';
function switchClassName(obj, className) {
    var tab = obj.className.split(' ');

    var index = tab.indexOf(className);
    if (index > 0) {
        tab.splice(index, 1);
    } else {
        tab.push(className);
    }

    obj.className = tab.join(' ');
}