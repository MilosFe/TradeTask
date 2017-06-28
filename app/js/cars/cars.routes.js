(function() {
    'use strict';

    angular.module('TradeCoreApp')
        .config(CarsRoutes);
    CarsRoutes.$inject = ['$routeProvider', '$locationProvider', ]

    function CarsRoutes($routeProvider, $locationProvider) {
        $routeProvider.when('/add-cars', {
            templateUrl: 'js/cars/add-cars.html',
            controller: 'CarsController',
            controllerAs: "vmAdd",
        });
        $routeProvider.when('/edit-cars/:id', {
            templateUrl: 'js/cars/edit-cars.html',
            controller: 'CarsController',
            controllerAs: "vmEdit",
        })
    }
})();