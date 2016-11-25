/**
 * Created by iakoupov on 2016-11-23.
 */


angular.module('services').factory('Session', Session);

Session.$inject = ['$location'];

function Session($location) {

    var Session = {
        login: login,
        logout: logout
    };

    function login() {
        $location.path('/pets');
        Session.loggedIn = true;
    }

    function logout() {
        $location.path('/login');
        Session.loggedIn = false;
    }

    return Session;
}


