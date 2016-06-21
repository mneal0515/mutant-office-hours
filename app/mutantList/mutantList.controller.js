(function() {
    'use strict';

    angular.module('mutantApp.mutantList').controller('MutantListController',MutantListController);

    MutantListController.$inject = ['$firebaseArray'];

    function MutantListController($firebaseArray) {
        var vm = this;
        var mutantsRef = firebase.database().ref().child('mutants');
        var textsRef = firebase.database().ref().child('texts');

        vm.addMutant = addMutant;
        vm.deleteMutant = deleteMutant;
        vm.toggleComplete = toggleComplete;
        vm.sendText = sendText;
        vm.newMutant = new Mutant();
        vm.mutants = $firebaseArray(mutantsRef);

        function Mutant() {
            this.name = '';
            this.phone = '';
            this.topic = '';
            this.notified = false;
            this.complete = false;
        }

        function addMutant() {
            vm.mutants.$add(vm.newMutant);
        }

        function deleteMutant(mutant) {
            vm.mutants.$remove(mutant);
        }

        function toggleComplete(mutant) {
            vm.mutants.$save(mutant);
        }

        function sendText(mutant) {
            var newText = {
                name: mutant.name,
                topic: mutant.topic,
                phoneNumber: mutant.phone
            };
            textsRef.push(newText);
            mutant.notified = true;
            vm.mutants.$save(mutant);
        }
    }
})();