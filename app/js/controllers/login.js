/**
 * Created by iakoupov on 2016-11-22.
 */


angular.module('controllers').controller('LoginController', LoginController);

LoginController.$inject = ['Session'];

function LoginController(Session) {
    var vm = this;
    
    vm.user = {};
    
    vm.login = function () {
        Session.login();
    }
    
    
    
}