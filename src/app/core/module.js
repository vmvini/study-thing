/**Dependencies */

//external modules
require('angular');
require('angular-ui-router');
require('angular-animate');
require('angular-aria');
require('angular-material');
require('angular-material/angular-material.scss');

//local modules
require('./../screens/start-screen/module');
require('./../web-components/module');

angular
    .module('servesom', [
        'ui.router',
        'start-screen',
        'ngMaterial',
        'web-components'
    ]);

//module internal components
require('./routeConfig.js');