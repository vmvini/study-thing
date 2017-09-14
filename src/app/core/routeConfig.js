angular
    .module('servesom')
    .config(($locationProvider, $urlRouterProvider, $stateProvider) => {
        'ngInject';
        $locationProvider.html5Mode(true);
        $urlRouterProvider.otherwise(function($injector, $location) {
            const state = $injector.get('$state');
            state.go('start');
        });
    });