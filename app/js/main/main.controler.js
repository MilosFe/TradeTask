(function() {
    'use strict';
    /* Hotel Controller function is separated  and code looks cleaner and easy to read */
    angular.module('TradeCoreApp')
        .controller('mainController', mainController);


    ///////Cars Service function

    mainController.$inject = ['$scope', '$q', 'MainService'];

    function mainController($scope, $q, MainService) {
        var self = this;


    }
})();