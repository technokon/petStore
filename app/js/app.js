/**
 * Created by iakoupov on 2016-11-22.
 */

var app = angular.module('petStoreApp', [
    'ngRoute',
    'petAnimations',
    'services',
    'controllers',
    'directives']);


app.config(['$routeProvider',
    function($routeProvider) {
        $routeProvider.
        when('/pets', {
            templateUrl: 'templates/pet-list.html',
            controller: 'PetListController',
            controllerAs: 'vm'
        }).
        when('/pets/:petId', {
            templateUrl: 'templates/pet-detail.html',
            controller: 'PetDetailController',
            controllerAs: 'vm'
        }).
        when('/petForm', {
            templateUrl: 'templates/pet-form.html',
            controller: 'PetForm',
            controllerAs: 'vm'
        }).
        when('/login', {
            templateUrl: 'templates/login.html',
            controller: 'LoginController',
            controllerAs: 'vm'
        }).
        otherwise({
            redirectTo: '/login'
        });
    }]);

