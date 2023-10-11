
interface Kitten {
    purrs: boolean;
}
interface Kitten {
    colour: string;
}

let a: Kitten = {
    purrs: true,
    colour: 'red'
};

console.log('interface');
console.log(a);


interface Player {
    currentSong: string;
    currentSongLength: number;
    playNext: () => void;
    playPrevious: () => void;
}

// Note that this is an object is not a class
const player: Player = {
    currentSong: "Nadie Te Ama Como Yo",
    currentSongLength: 50_000,
    playNext: () => console.log('Playing Next'),
    playPrevious: () => console.log('Playing previous')
}

// Here in the class instead of assigning values is declaring the variables or initializyng
class AudioPlayerSample1 implements Player{
    currentSong: string;
    currentSongLength: number;
    playNext: () => void;
    playPrevious: () => void;
}

// Here is an example initializyng
class AudioPlayerSample2 implements Player{
    currentSong = 'Shape of you'; // we use = in class not : as in objects
    currentSongLength = 40_000; // 
    playNext = () => console.log('playing next');
    playPrevious = () => console.log('playing previous');
}


type song = { name: string, length: number };

// Here is an example initializyng
class AudioPlayerSample3 implements Player{
    currentSong : string;
    currentSongLength : number;

    constructor(songInfo: song) {
        this.currentSong = songInfo.name;
        this.currentSongLength = songInfo.length;
    }

    playNext = () => console.log('playing next');
    playPrevious = () => console.log('playing previous');

    stopAudio = () => {};
}

const AudioPlayer = new AudioPlayerSample3({name: 'shape of you', length: 40_000});
const anotherAudioPlayer = new AudioPlayerSample3({name: 'closer', length: 50_000});

console.log(AudioPlayer.currentSong, AudioPlayer.currentSongLength)
console.log(anotherAudioPlayer.currentSong, anotherAudioPlayer.currentSongLength)


