(function(){
    var app = angular.module('HelioTema', ['ngRoute']);
    
    app.config(['$routeProvider', '$locationProvider', function($routeProvider, $locationProvider){
        $locationProvider.html5Mode(true);
        $routeProvider
            .when('/', {templateUrl: '/templates/main.html'})
            .otherwise({templateUrl: '/templates/main.html'});
    }]);

    app.controller('ApplicationController', [function(){
        alert('Yey!');
    }]);

})();
