(() => {
    require('./style.scss');
    const template = require('!ngtemplate-loader?relativeTo=/src/!html-loader!./template.html');
    const controller = require('./controller.js').controller;

    angular
        .module('start-screen')
        .config(($stateProvider) => {

            'ngInject';

            $stateProvider
                .state('start', {
                    name: 'start',
                    url: '/start',
                    templateUrl: template,
                    controller: controller,
                    controllerAs: 'vm'
                });

        });

})();