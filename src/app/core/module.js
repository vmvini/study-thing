/**Dependencies */

//external modules
require('angular');
require('angular-ui-router');

//local modules
require('./../screens/start-screen/module');

angular
    .module('servesom', ['ui.router', 'start-screen']);

//module internal components
require('./routeConfig.js');