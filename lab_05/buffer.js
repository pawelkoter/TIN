'use strict';
function createBuffer() {
    var _buffer = [];

    return function () {
        // var _buffer = [];
        if (arguments.length > 0) {
            _buffer.push(arguments[0]);        
        } else {
            return _buffer.join('');
        }
    };
}