/**
 * Created by iakoupov on 2016-11-22.
 */


angular.module('controllers').controller('PetDetailController', PetDetailController);

PetDetailController.$inject = ['$routeParams', 'petService'];

function PetDetailController($routeParams, petService) {
    
    var vm = this;
    
    petService.getPetById($routeParams.petId).then(function (data) {
        vm.pet = data;
        //vm.mainImage = data.images[0];
    }).catch(function (error) {
        console.log('error in  petService.getPetById()', error);
    })

    vm.setImage = function(image) {
        vm.mainImage = image;
    };
    
}