(function(){
    var app = angular.module('HelioTema', ['ngRoute']);
    
    app.config(['$routeProvider', '$locationProvider', function($routeProvider, $locationProvider){
        $locationProvider.html5Mode(true);
        $routeProvider
            .when('/', {templateUrl: '/templates/main.html', controller: 'MainController', controllerAs: 'main'})
            .when('/services', {templateUrl: '/templates/services.html'})
            .when('/aboutus', {templateUrl: '/templates/aboutus.html'})
            .when('/contacts', {templateUrl: '/templates/contacts.html'})
            .when('/sunenergy', {templateUrl: '/templates/sunenergy.html'})
            .when('/sunwarmth', {templateUrl: '/templates/sunwarmth.html'})
            .when('/naturewarmth', {templateUrl: '/templates/naturewarmth.html'})
            .otherwise({redirectTo: '/'});
    }]);

    app.controller('ApplicationController', [function(){
        var minh = $(window).height() * 0.665;
        $('.content-wrapper').css('min-height', minh + 'px');
    }]);
    
    app.controller('NavigationController', ['$scope', '$location', function($scope, $location){
        var navbar = this;
        this.tab = 'none';
        this.refresh = function(){
            switch($location.path()) {
                case '/':
                    this.tab = 'none';
                    break;
                case '/services':
                    this.tab = 'services';
                    break;
                case '/aboutus':
                    this.tab = 'aboutus';
                    break;
                case '/contacts':
                    this.tab = 'contacts';
                    break;
                default:
                    this.tab = 'none';
            }
        };
        this.isSelceted = function(checkTab){
            return this.tab === checkTab;
        };
        $scope.$on('$locationChangeSuccess', function(event, data){
            navbar.refresh();
        });
        this.refresh();
    }]);
    
    app.controller('SideController', ['$scope', '$location', function($scope, $location){
        var sidepanel = this;
        this.tab = 'none';
        this.refresh = function(){
            switch($location.path()) {
                case '/':
                    this.tab = 'none';
                    break;
                case '/sunenergy':
                    this.tab = 'sunenergy';
                    break;
                case '/sunwarmth':
                    this.tab = 'sunwarmth';
                    break;
                case '/naturewarmth':
                    this.tab = 'naturewarmth';
                    break;
                default:
                    this.tab = 'none';
            }
        };
        this.isSelceted = function(checkTab){
            return this.tab === checkTab;
        };
        $scope.$on('$locationChangeSuccess', function(event, data){
            sidepanel.refresh();
        });
        this.refresh();
    }]);
    
    app.controller('MainController', [function(){
        $('.carousel').carousel({
            interval: 3000,
            pause: 'false'
        });
    }]);
    
    app.directive('navigationBar', function(){
        return {
            restrict: 'E',
            templateUrl: '/templates/navigation-bar.html',
            controller: 'NavigationController',
            controllerAs: 'nav'
        };
    });
    
    app.directive('sidePanel', function(){
        return {
            restrict: 'E',
            templateUrl: '/templates/side-panel.html',
            controller: 'SideController',
            controllerAs: 'side'
        };
    });

})();
