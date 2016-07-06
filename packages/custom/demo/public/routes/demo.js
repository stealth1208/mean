(function () {
    'use strict';

    angular
        .module('mean.demo')
        .config(Demo);

    Demo.$inject = ['$stateProvider', '$urlRouterProvider'];

    function Demo($stateProvider, $urlRouterProvider) {
        $stateProvider.state('index', {
            url: '/index',
            templateUrl: 'demo/views/index.html'            
        });

        $urlRouterProvider.otherwise('index');
    }


})();

