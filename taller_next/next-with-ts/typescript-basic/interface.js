var a = {
    purrs: true,
    colour: 'red'
};
console.log('interface');
console.log(a);
// Note that this is an object is not a class
var player = {
    currentSong: "Nadie Te Ama Como Yo",
    currentSongLength: 50000,
    playNext: function () { return console.log('Playing Next'); },
    playPrevious: function () { return console.log('Playing previous'); }
};
// Here in the class instead of assigning values is declaring the variables or initializyng
var AudioPlayerSample1 = /** @class */ (function () {
    function AudioPlayerSample1() {
    }
    return AudioPlayerSample1;
}());
// Here is an example initializyng
var AudioPlayerSample2 = /** @class */ (function () {
    function AudioPlayerSample2() {
        this.currentSong = 'Shape of you'; // we use = in class not : as in objects
        this.currentSongLength = 40000; // 
        this.playNext = function () { return console.log('playing next'); };
        this.playPrevious = function () { return console.log('playing previous'); };
    }
    return AudioPlayerSample2;
}());
// Here is an example initializyng
var AudioPlayerSample3 = /** @class */ (function () {
    function AudioPlayerSample3(songInfo) {
        this.playNext = function () { return console.log('playing next'); };
        this.playPrevious = function () { return console.log('playing previous'); };
        this.stopAudio = function () { };
        this.currentSong = songInfo.name;
        this.currentSongLength = songInfo.length;
    }
    return AudioPlayerSample3;
}());
var AudioPlayer = new AudioPlayerSample3({ name: 'shape of you', length: 40000 });
var anotherAudioPlayer = new AudioPlayerSample3({ name: 'closer', length: 50000 });
console.log(AudioPlayer.currentSong, AudioPlayer.currentSongLength);
console.log(anotherAudioPlayer.currentSong, anotherAudioPlayer.currentSongLength);
