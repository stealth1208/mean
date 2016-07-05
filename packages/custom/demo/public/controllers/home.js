(function() {
'use strict';
    /* jshint -W098 */
    angular
        .module('mean.demo')
        .controller('HomeController', Home);

    
    function Home() {
        var vm = this;
        vm.title = 'Home Page';
    }
})();