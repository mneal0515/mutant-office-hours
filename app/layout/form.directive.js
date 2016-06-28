(function() {
    'use strict';

    angular
        .module('mutantApp.layout')
        .directive('xtForm', xtForm);

    function xtForm() {
        return {
            templateUrl: 'app/layout/mutantListForm.html',
            restrict: 'E',
            // controller: FormController,
            // controllerAs: 'vm',
            // scope: {}
        };
    }

    // FormController.$inject = ['$state', 'authService'];
    //
    // function FormController($state, authService) {
    //     var vm = this;
    //
    //     vm.isLoggedIn = authService.isLoggedIn;
    //     vm.logout = logout;
    //
    //     function logout() {
    //         authService.logout();
    //         $state.go('home');
    //     }
    // }

})();