/**
 * Created by iakoupov on 2016-11-22.
 */

angular.module('services').factory('petService', PetService);

PetService.$inject = ['$resource', '$http'];

function PetService($resource, $http) {

    var nginxHost = 'http://localhost:8000';

    var Pets = $resource(nginxHost + '/pet-store/pet/:petId');

    function getPets(param) {
        return $http({
            url: nginxHost + '/pet-store/pets/' + param,
            mehtod: 'GET'
        })
    }
    
    function addPet(pet, photos) {
        var fd = new FormData();

        fd.append('pet', JSON.stringify(pet));
        
        angular.forEach(photos, function (value, key) {
            fd.append('file', value);
        })
        
        return $http({
            url: nginxHost + '/pet-store/pet',
            method: 'POST',
            headers: {
                'Content-Type': undefined
            },
            data: fd,
            transformRequest: function (data, headersGetterFunction) {
                return data;
            }
        })
    }
    
    function removePet(id) {
        return $http({
            url: nginxHost + '/pet-store/pet/' + id,
            method: 'DELETE'
        })
    }
    
    function updatePet(pet) {
        
        return $http({
            url: nginxHost + '/pet-store/pet',
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            data: pet
        })
    }
    
    function getPetById(petId) {
        return Pets.get({petId: petId}).$promise;
    }

    function login(user) {

        var fd = new FormData();
        fd.append('username', user.username);
        fd.append('password', user.password);

        return $http({
            url: nginxHost + '/login',
            method: 'POST',
            headers: {'Content-Type': undefined},
            data: fd
        })
    }

    function logout(user) {

        return $http({
            url: nginxHost + '/logout',
            method: 'POST',
            headers: {'Content-Type': undefined},
            data: {}
        })
    }
    
    function Pet() {
        
    }
    
    return {
        getPets: getPets,
        addPet: addPet,
        removePet: removePet,
        updatePet: updatePet,
        getPetById: getPetById,
        login: login,
        logout: logout
    }
}


