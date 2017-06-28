(function() {
    'use strict';


    angular.module('TradeCoreApp')
        .factory('UsersService', UsersService);

    UsersService.$inject = ['$http', '$log'];

    function UsersService($http, $log) {
        var service = {
            getUsers: getUsers,
            postUsers: postUsers,
            usersEdit: usersEdit,
            delUsers: delUsers
        }

        return service;

        //Service Function

        function getUsers() {
            return $http.get("http://localhost:3000/users")
                .then(success)
                .catch(fail);;
        }

        function postUsers(data) {
            return $http.post('http://localhost:3000/users', data)
                .then(success)
                .catch(fail);
        }

        function usersEdit(id, data) {
            return $http.put('http://localhost:3000/users/' + id, data)
                .then(success)
                .catch(fail);
        }

        function delUsers(id) {
            return $http.delete('http://localhost:3000/users/' + id)
                .then(success)
                .catch(fail);
        }



        //Success and error functions

        function success(data) {
            return data;
        }

        function fail(response) {
            $log.info('Something went wrong');
        }
    }

})();