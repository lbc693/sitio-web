(function() {
    'use strict';
    var console;
    var angular;
    console.log('\'Allo \'Allo!');

    function HeaderController($scope, $location) {
        $scope.isActive = function(viewLocation) {
            return viewLocation === $location.path();
        };
    }

    animateApp.config(function($routeProvider) {
        $routeProvider
            .when('/', {
                templateUrl: 'page-home.html',
                controller: 'mainController'
            })
            .when('/carousel', {
                templateUrl: 'page-home.html#carousel',
                controller: 'mainController'
            })
            .when('/about', {
                templateUrl: 'page-about.html',
                controller: 'aboutController'
            })
            .when('/contact', {
                templateUrl: 'page-contact.html',
                controller: 'contactController'
            });

    });

    animateApp.controller('mainController', function($scope) {
        $scope.pageClass = 'page-home';
    });

    animateApp.controller('aboutController', function($scope) {
        $scope.pageClass = 'page-about';
    });

    animateApp.controller('contactController', function($scope) {
        $scope.pageClass = 'page-contact';
    });
}());
