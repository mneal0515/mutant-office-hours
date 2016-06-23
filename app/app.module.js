(function() {
    'use strict';
    
    angular.module('mutantApp',[
        //Angular modules
        'ui.router',
        
        //3rd Party modules
        'firebase',

        //Main modules
        'mutantApp.home',
        'mutantApp.mutantList',
        'mutantApp.auth',
        'mutantApp.core'
    ]);
})();