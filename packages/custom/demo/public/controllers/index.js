(function () {
    'use strict';
    /* jshint -W098 */
    angular
        .module('mean.demo')
        .controller('IndexController', Index);


    function Index() {
        var vm = this;
        vm.title = 'Index Page';
    }
})();