/**
 * Created by iakoupov on 2016-11-22.
 */

angular.module('controllers').controller('MainController', MainController);

MainController.$inject = ['petService','$location'];

function MainController(petService, $location) {
    var vm = this;
    
    vm.searchItem = function (item) {
        $location.path('/search/' + item);
    }
}

