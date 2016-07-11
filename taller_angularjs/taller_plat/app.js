(function() {
    var app=angular.module('supercampeones', []);

    app.controller('PlayerController', function () {
        this.pokemon = {
            kick: '99',
            speed: '90',
            force: '80',
            skill: '80'
        }
    });

})();
