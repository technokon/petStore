/**
 * Created by iakoupov on 2016-11-22.
 */


angular.module('controllers').controller('LoginController', LoginController);

LoginController.$inject = ['$scope','Session', 'petService'];

function LoginController($scope, Session, petService) {
    var vm = this;
    
    vm.user = {};
    
    vm.login = function () {

        petService.login(vm.user).success(function (data) {
            // close the dialog
            $scope.closeThisDialog('User Logged In');
        })

    }
    
    vm.logout = function () {
        petService.logout(vm.user).success(function (data) {
            // close the dialog
            $scope.closeThisDialog('User Logged out');
        })
    }
    
    vm.cancel = function () {
        
    }


    
    
    
}