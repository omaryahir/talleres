(function() {
  
  var app=angular.module('supercampeones', []);
  app.controller('PlayerController', function (){
    this.player = {
      id: 001,
      name: 'Oliver',
      number: '10',
      position: 'Delantero',
      kick: '99',
      speed: '90',
      force: '80',
      skill: '99',
      techniques: [ 'Chilena', 'Tiro de remate' ],
      image: 'http://www.topkool.com/fr/wp-content/uploads/2012/12/olive-et-tom-014.jpg',
      birthdate: '1970-09-10T17:10:10'
    }

  });

})();
