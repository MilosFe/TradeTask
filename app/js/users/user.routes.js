(function() {
    'use strict';

    angular.module('TradeCoreApp')
        .config(UsersRoutes);

    UsersRoutes.$inject = ['$routeProvider', '$locationProvider']

    function UsersRoutes($routeProvider, $locationProvider) {
        $routeProvider.when('/add-users', {
            templateUrl: 'js/users/add-users.html',
            controller: 'UsersController',
            controllerAs: "addUsers",
        });
        $routeProvider.when('/edit-users/:id', {
            templateUrl: 'js/users/edit-users.html',
            controller: 'UsersController',
            controllerAs: "editUsers",
        })
    }
})();