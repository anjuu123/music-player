const songs = [
  "bensound-glitchfidelity.mp3",
  "bensound-mellowbreeze.mp3",
  "bensound-mila.mp3",
  "bensound-slider.mp3",
  "bensound-thecalling.mp3",
  "bensound-theday.mp3",
];

const player = document.getElementById("player");
//looping through length of song 
//creating a song list

function createSongList() {
  const list = document.createElement("ol");
  for (let i = 0; i < songs.length; i++) {
    const item = document.createElement("li");
    item.appendChild(document.createTextNode(songs[i]));
    list.appendChild(item);
  }
  return list;
}

const songList = document.getElementById("songList");
songList.appendChild(createSongList());

songList.onclick = function (e) {
  const source = document.getElementById("source");
  source.src = "songs/" + e.target.innerText;
  document.querySelector(
    "#currentsSong"
  ).innerText = `Now Playing: ${e.target.innerText}`;
 
  player.load();
  player.play();
};


function playAudio() {
   if(player.readyState) {
    player.play();
   }
  }

function pauseAudio() {
  player.pause();
}

const slider = document.getElementById("volumeSlider");
slider.oninput = function(e) {
  const volume = e.target.value;
  player.volume = volume;

}

function updateProgress() {
  const progressBar = document.getElementById('progress')
  progressBar.value = (player.currentTime / player.duration)*100;
}