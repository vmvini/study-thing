/**Dependencies */

//external modules
require('angular');
require('angular-ui-router');
require('angular-animate');
require('angular-aria');
require('angular-material');

//local modules
require('./../screens/start-screen/module');

angular
    .module('servesom', ['ui.router', 'start-screen', 'ngMaterial']);

//module internal components
require('./routeConfig.js');