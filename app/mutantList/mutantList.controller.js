(function() {
    'use strict';

    angular.module('mutantApp.mutantList').controller('MutantListController',MutantListController);

    function MutantListController() {
        var vm = this;

        vm.addMutant = addMutant;
        vm.newMutant = new Mutant();
        vm.mutants = ['Gambit', 'Deadpool', 'Rogue', 'Jean Grey'];

        function Mutant() {
            this.name = '';
            this.phone = '';
            this.topic = '';
            this.notified = false;
            this.complete = false;
        };

        function addMutant() {
            vm.mutants.push(vm.newMutant);
        };
    }
})();