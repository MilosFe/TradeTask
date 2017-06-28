(function() {
    'use strict';

    angular.module('TradeCoreApp')
        .controller('TabController', TabController);


    ///////Tab Controller function
    TabController.$inject = ['$scope', '$q']

    function TabController($scope, $q) {
        var self = this;
        self.tab = 1;

        self.isSet = function(checkTab) {
            return self.tab === checkTab;
        };

        self.setTab = function(setTab) {
            self.tab = setTab;
        };
    }

})();