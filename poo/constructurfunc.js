var Song = function(title, artist) {
    this.artist = artist;
    this.title = title;
    this.play = function() {
        console.log("playin: " + this.title);
    };
}
var song1 = new Song('Time', 'Pink Floyd');
var song2 = new Song('Sweet Life', 'Frank Ocean');
var song3 = new Song('Intro', 'M83');
var song4 = new Song('Bloom', 'ODESZA');
//var song4 = Object.create(Song);
//song4.artist = 'Bloom';
//song4.title = 'ODESZA'
var song5 = new Song('The Less I Know The Better', 'Tame Impala');
song4.play();
song2.play();
song3.play();