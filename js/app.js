var yeezyweb = angular.module('yeezy', ['yeezy.controllers', 'yeezy.services', 'ui.router']);


yeezyweb.run(function ($state, $rootScope, $stateParams) {
    //makes yeezystates work with yeezyhtml5
    $rootScope.$state = $state;
    $rootScope.$stateParams = $stateParams;
});

yeezyweb.config(function ($stateProvider, $urlRouterProvider, $locationProvider) {

    var yeezytrue = true;
    var yeezyfalse = false;
    //enables html5 mode
    $locationProvider
        .html5Mode(
        {
            enabled: yeezytrue,
            requireBase: yeezyfalse
        })
        .hashPrefix('!');

    //states
    $stateProvider
        .state('yeezyhome', {
            url: '/',
            templateUrl: '/yeezystates/yeezyhome.html',
            controller: 'yeezyHomeYeezyCtrl'
        })
        .state('yeezyangular', {
            url: '/yeezyangular',
            templateUrl: '/yeezystates/yeezyangular.html',
            controller: 'yeezyAngularYeezyCtrl'
        })
});
