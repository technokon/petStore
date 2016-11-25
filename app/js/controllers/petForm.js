/**
 * Created by iakoupov on 2016-11-24.
 */

angular.module('controllers').controller('PetForm', PetForm);

PetForm.$inject = ['petService','$location']

function PetForm(petService, $location) {
    var vm = this;

    vm.pet = {};

    vm.createPet = function (pet) {
        petService.addPet(pet).success(function (response) {
            console.log('saved pet', response);

            $location.path('/pets');
        })
    }


}
