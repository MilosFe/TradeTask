(function() {
    'use strict';

    angular.module('TradeCoreApp')
        .config(UploadsRoutes);

    UploadsRoutes.$inject = ['$routeProvider', '$locationProvider']

    function UploadsRoutes($routeProvider, $locationProvider) {
        $routeProvider.when('/add-uploads', {
            templateUrl: 'js/uploads/add-uploads.html',
            controller: 'UploadsController',
            controllerAs: "addUploads",
        });
        $routeProvider.when('/edit-uploads/:id', {
            templateUrl: 'js/uploads/edit-uploads.html',
            controller: 'UploadsController',
            controllerAs: "editUploads",
        })
    }
})();