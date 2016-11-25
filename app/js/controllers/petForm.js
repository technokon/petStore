/**
 * Created by iakoupov on 2016-11-24.
 */

angular.module('controllers').controller('PetForm', PetForm);

PetForm.$inject = ['petService','$location']

function PetForm(petService, $location) {
    var vm = this;

    vm.pet = {
        photos: []
    };

    vm.createPet = function (pet) {
        // send photos as well
        petService.addPet(pet).success(function (response) {
            console.log('saved pet', response);

            $location.path('/pets');
        })
    }

    vm.showPhotos = function () {
        return vm.pet && vm.pet.photos && vm.pet.photos.length;
    }

    vm.clearPhotoSelections = function () {
        delete vm.pet.photos;
    }




    vm.cancel = function () {
        vm.pet = {};
        $location.path('/pets');
    }



}
