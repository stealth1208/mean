(function() {
    'use strict';

    function Demo($stateProvider) {
        $stateProvider.state('demo example page', {
            url: '/demo/example',
            templateUrl: 'demo/views/index.html'
        }).state('demo circles example', {
            url: '/demo/example/:circle',
            templateUrl: 'demo/views/example.html'
        }).state('demoHome', {
            url: '/demo/home',
            templateUrl: 'demo/views/index.html'
        });
    }

    angular
        .module('mean.demo')
        .config(Demo);

    Demo.$inject = ['$stateProvider'];

})();

