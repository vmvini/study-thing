require('./style.scss');
const template = require('!ngtemplate-loader?relativeTo=/src/!html-loader!./template.html');

angular
    .module('search-bar')
    .directive('searchBar', function() {
        'ngInject';

        return {
            link: link,
            scope: {

            },
            controller: 'SearchBarCtrl as vm',
            templateUrl: template

        };

        function link(scope, elem, attrs) {
            console.log("link searchBar");
        }

    });