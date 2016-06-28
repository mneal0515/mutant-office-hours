(function() {
    'use strict';

    angular
        .module('mutantApp.mutantList')
        .controller('MutantListController', MutantListController);

    MutantListController.$inject = ['mutantService', 'firebaseDataService', 'textMessageService', 'user'];

    function MutantListController(mutantService, firebaseDataService, textMessageService, user) {
        var vm = this;
        
        vm.mutants = mutantService.mutantsByUser(user.uid);
    }

})();