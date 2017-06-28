(function() {
    'use strict';


    angular.module('TradeCoreApp')
        .factory('CarService', CarService);

    CarService.$inject = ['$http', '$log'];

    function CarService($http, $log) {
        var service = {
            getCars: getCars,
            postCars: postCars,
            carsEdit: carsEdit,
            delCars: delCars
        }

        return service;

        //Service Function

        function getCars() {
            return $http.get("http://localhost:3000/cars")
                .then(success)
                .catch(fail);;
        }

        function postCars(data) {
            return $http.post('http://localhost:3000/cars', data)
                .then(success)
                .catch(fail);
        }

        function carsEdit(id, data) {
            return $http.put('http://localhost:3000/cars/' + id, data)
                .then(success)
                .catch(fail);
        }

        function delCars(id) {
            return $http.delete('http://localhost:3000/cars/' + id)
                .then(success)
                .catch(fail);
        }


        //Success and error functions

        function success(data) {
            return data;
        }

        function fail(response) {
            $log.info("Something went wrong");
        }
    }

})();