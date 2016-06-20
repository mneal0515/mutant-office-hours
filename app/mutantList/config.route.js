(function() {
    'use strict';

    angular.module('mutantApp.mutantList').conf(configFunction);

    configFunction.$inject = ['$stateProvider'];

    function configFunction($stateProvider) {
        $stateProvider.state('mutantList', {
            url: '/mutantlist',
            templateUrl: 'app/mutantList/mutantList.html'
        });
    }
})();