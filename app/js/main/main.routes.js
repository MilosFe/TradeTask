(function() {
    'use strict';

    angular.module('TradeCoreApp')
        .config(TradeRoutes);
    TradeRoutes.$inject = ['$routeProvider', '$locationProvider']

    function TradeRoutes($routeProvider, $locationProvider) {
        $routeProvider.when('/', {
            templateUrl: 'js/main/main.html',
            controller: 'mainController',
            controllerAs: "main",
            title: 'Main Controller'
        })
    }

})();