/**
 * Created by iakoupov on 2016-11-22.
 */

angular.module('controllers').controller('PetListController', PetListController);

PetListController.$inject = ['petService', '$location'];

function PetListController(petService, $location) {
    var vm = this;
    
    petService.getPets().then(function (response) {
        vm.pets = response.data;
    }).catch(function (error){
        console.log('error in petService.getPets()', error);
    });
    
    vm.addPet = function () {
        $location.path('/petForm');
    }
}
