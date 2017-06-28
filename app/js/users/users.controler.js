(function() {
    'use strict';

    angular.module('TradeCoreApp')
        .controller('UsersController', UsersController);


    ///////Users Service function

    UsersController.$inject = ['$scope', '$q', 'UsersService', '$routeParams', '$location'];

    function UsersController($scope, $q, UsersService, $routeParams, $location) {
        var self = this;
        self.users = [];
        self.order = 'id';
        self.editUser = [];
        self.formData = {};

        self.setOder = function(key) {
            self.order = key;
        }


        if ($routeParams) {
            UsersService.getUsers().then(function(data) {
                self.users = data.data;
                return self.editUser = self.users[$routeParams.id];
            });

        } else {
            UsersService.getUsers().then(resolve);
        }

        self.setOder = function(key) {
            self.order = key;
        }
        self.editUsers = function(id) {
            UsersService.usersEdit(id, self.formData).then(function(data) {})
            $location.path('/');
        }

        self.addUsers = function() {
            UsersService.postUsers(self.formData).then(function(data) {})
            $location.path('/');
        }

        self.delUsers = function(index, id) {
            toastr.info('Cars deleted from DB')
            self.users.splice(index, 1);
            console.log(self.users[index]);
            // UsersService.delUsers(id).then(function(data) {

            // })
        }


        function resolve(data) {
            if (data) {
                toastr.info('Users loaded');
                return self.users = data.data;
            } else {
                toastr.warning('No data to display');
            }

        }
    }


})();