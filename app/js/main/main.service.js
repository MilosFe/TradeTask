(function() {
    'use strict';


    angular.module('TradeCoreApp')
        .factory('MainService', MainService);
    MainService.$inject = ['$http', '$log'];

    function MainService($http, $log) {
        var service = {
            getCars: getCars,
            getUsers: getUsers,
            getUploads: getUploads
        }

        return service;

        //Service Function

        function getCars() {
            return $http.get("http://localhost:3000/cars")
                .then(success)
                .catch(fail);;
        }

        function getUsers() {
            return $http.get("http://localhost:3000/users")
                .then(success)
                .catch(fail);;
        }

        function getUploads() {
            return $http.get("http://localhost:3000/uploads")
                .then(success)
                .catch(fail);;
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