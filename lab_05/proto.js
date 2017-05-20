'use strict';
String.prototype.normalizeErLik = function normalizeErLik() {
    return this.replace(/é|è|ê'/g, 'e')
               .replace(/ó|ò|ô/g, 'o')
               .replace('å', 'aa')
               .replace('æ', 'ae')
               .replace('ø', 'oe')
               .replace(/É|È|Ê'/g, 'E')
               .replace(/Ó|Ò|Ô/g, 'O')
               .replace('Å', 'Aa')
               .replace('Æ', 'Ae')
               .replace('Ø', 'Oa');

};

String.prototype.erLik = function erLik(text) {
    return text.normalizeErLik() == this.normalizeErLik();
};