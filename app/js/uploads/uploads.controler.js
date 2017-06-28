(function() {
    'use strict';

    angular.module('TradeCoreApp')
        .controller('UploadsController', UploadsController);


    ///////Uploads Service function

    UploadsController.$inject = ['$scope', '$q', 'UploadsService', '$routeParams', "$location"]

    function UploadsController($scope, $q, UploadsService, $routeParams, $location) {
        var self = this;
        self.uploads = [];
        self.order = 'id';
        self.editUpload = [];
        self.form = {};

        self.setOder = function(key) {
            self.order = key;
        }

        if ($routeParams) {
            UploadsService.getUploads().then(function(data) {
                self.uploads = data.data;
                return self.editUpload = self.uploads[$routeParams.id];
            });

        } else {
            UploadsService.getUploads().then(resolve);
        }

        self.editUploads = function(id) {
            UploadsService.uploadsEdit(id, self.formData).then(function(data) {})
            $location.path('/');
        }

        self.addUploads = function() {
            UploadsService.postUploads(self.formData).then(function(data) {})
            $location.path('/');
        }

        self.delUpload = function(index, id) {
            toastr.info('Upload deleted from DB')
            self.uploads.splice(index, 1);
            UploadsService.delUpload(id).then(function(data) {

            })
        }



        function resolve(data) {
            if (data) {
                return self.uploads = data.data;

            } else {
                toastr.warning('No data to display');
            }

        }
    }


})();