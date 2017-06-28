(function() {
    'use strict';


    angular.module('TradeCoreApp')
        .factory('UploadsService', UploadsService);

    UploadsService.$inject = ['$http', '$log'];

    function UploadsService($http, $log) {
        var service = {
            getUploads: getUploads,
            postUploads: postUploads,
            uploadsEdit: uploadsEdit,
            delUpload: delUpload
        }

        return service;
        //Service Function

        function getUploads() {
            return $http.get("http://localhost:3000/uploads")
                .then(success)
                .catch(fail);;
        }

        function postUploads(data) {
            return $http.post('http://localhost:3000/uploads', data)
                .then(success)
                .catch(fail);
        }

        function uploadsEdit(id, data) {
            return $http.post('http://localhost:3000/uploads/' + id, data)
                .then(success)
                .catch(fail);
        }



        function delUpload(id) {
            return $http.delete('http://localhost:3000/uploads/' + id)
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