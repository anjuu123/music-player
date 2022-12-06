const songs = [
                "bensound-glitchfidelity.mp3",
                "bensound-mellowbreeze.mp3",
                "bensound-mila.mp3",
                "bensound-slider.mp3",
                "bensound-thecalling.mp3",
                "bensound-theday.mp3",   
];

function createSongList(){
   const list = document.createElement("ol");
   for(let i = 0; i < songs.length; i++) {
    const item = document.createElement("li");
item.appendChild(document.createTextNode(songs[i]));
list.appendChild(item);
   }
   return list
}

const songList = document.getElementById('songList')
 songList.appendChild(createSongList());

 songList.onclick = function(e){
    const source = document.getElementById('source')
    source.src = "songs/" + e.target.innerText;

    document.querySelector('#currentSong').innerText = `Now Playing: ${e.target.innerText}`

    const player = document.getElementById('player')
    player.load();
    player.play();
 }

