'use strict';
function cached(cache, fun) {
    var f = function(){
        var n = arguments[0];
        var value = cache[n];
        if (typeof value != 'undefined') {
            return value;
        } else {
            var result = fun(f, n);
            cache[n] = result;
            return result;
        }
    };
    return f;
}