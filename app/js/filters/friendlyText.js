(function() {
    'use strict';

    angular.module('TradeCoreApp')
        .filter('format', function() {
            return function(item) {

                return item
                    .toLowerCase()
                    .replace('_', ' ')
                    .split(' ')
                    .map(function(word) {
                        return word[0].toUpperCase() + word.substr(1);
                    })
                    .join(' ');
            };
        });
})();