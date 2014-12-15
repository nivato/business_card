(function(){
    var app = angular.module('HelioTema', ['ngRoute']);
    
    app.config(['$routeProvider', '$locationProvider', function($routeProvider, $locationProvider){
        $locationProvider.html5Mode(true);
        $routeProvider
            .when('/', {templateUrl: '/templates/main.html'})
            .when('/services', {templateUrl: '/templates/services.html'})
            .when('/aboutus', {templateUrl: '/templates/aboutus.html'})
            .when('/contacts', {templateUrl: '/templates/contacts.html'})
            .otherwise({templateUrl: '/templates/main.html'});
    }]);

    app.controller('ApplicationController', [function(){
        console.log('Yey!');
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

    app.directive('navigationBar', function(){
        return {
            restrict: 'E',
            templateUrl: '/templates/navigation-bar.html',
            controller: 'NavigationController',
            controllerAs: 'nav'
        };
    });

})();
