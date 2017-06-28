(function() {
    'use strict';

    angular.module('TradeCoreApp')
        .controller('CarsController', CarsController);


    CarsController.$inject = ['$scope', '$q', 'CarService', '$routeParams', "$location"]

    function CarsController($scope, $q, CarService, $routeParams, $location) {
        var self = this;
        self.cars = [];
        self.order = 'id';
        self.edit = [];
        self.form = {}

        if ($routeParams) {
            CarService.getCars().then(function(data) {
                self.cars = data.data;
                return self.edit = self.cars[$routeParams.id];
            });

        } else {
            CarService.getCars().then(resolve);
        }

        self.setOder = function(key) {
            self.order = key;
        }
        self.editCars = function(id) {
            CarService.carsEdit(id, self.formData).then(function(data) {})
            $location.path('/');
        }

        self.addCars = function() {
            CarService.postCars(self.formData).then(function(data) {})
            $location.path('/');
        }

        self.delCar = function(index, id) {
            toastr.info('Cars deleted from DB')
            self.cars.splice(index, 1);
            CarService.delCars(id).then(function(data) {

            })
        }

        function resolve(data) {
            if (data) {
                toastr.info('Cars loaded');
                return self.cars = data.data;
            } else {
                toastr.warning('No data to display');
            }
        }
    }
})();