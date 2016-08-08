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
      techniques: [ 'Chilena', 'Tiro de remate', 'Team' ],
      image: 'http://www.topkool.com/fr/wp-content/uploads/2012/12/olive-et-tom-014.jpg',
      birthdate: '1970-09-10T17:10:10',
      champeon:
        [
          { year:'1980', position:'1er'},
          { year:'1982', position:'TIE'},
          { year:'1984', position:'1er'},
          { year:'1985', position:'1er'},
          { year:'1990', position:'1er'},
          { year:'1995', position:'1er'},
        ]
    }
  });

  app.controller('TabsController', function(){
    this.tab = 1;
    this.selectTab = function (tab) {
      this.tab = tab;
    };

  });

  app.controller('CommentsController', function (){
    this.commentslist = [];
    this.comment = {};
    this.show = false;
    this.toggle = function() {
      this.show = !this.show;
    };

    this.annonymousChange = function() {
      if (this.comment.anonymous) {
        this.comment.email = "";
      }
    };

    this.addComment = function () {
      this.comment.date = Date.now();
      this.commentslist.push(this.comment);
      this.comment = {};
    };


  });

})();
