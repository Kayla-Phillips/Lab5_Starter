// expose.js

window.addEventListener('DOMContentLoaded', init);
const confetti = new JSConfetti();

function init() {
  // TODO
  const hornSelect = document.getElementById("horn-select");
  const volumeSlider = document.getElementById("volume");
  const volumeIcon = document.querySelector("#volume-controls img");
  const playButton = document.querySelector("button");
  const audioElement = document.querySelector("audio");
  const imageElement = document.querySelector("main img");

  hornSelect.addEventListener("change", function() {
    const selectedHorn = hornSelect.value;
    console.log("Horn selected: ", selectedHorn);
    imageElement.src = `assets/images/${selectedHorn}.svg`;
    console.log("Setting image src to: ", imageElement.src);
    imageElement.alt = `${selectedHorn.replace("-", " ")} image`;
    audioElement.src = `assets/audio/${selectedHorn}.mp3`;
  });

  volumeSlider.addEventListener("input", function() {
    const volume = parseInt(volumeSlider.value);
    audioElement.volume = volume / 100;

    if (volume === 0) {
      volumeIcon.src = "assets/icons/volume-level-0.svg";
      volumeIcon.alt = "Volume level 0"
    } else if (volume < 33) {
      volumeIcon.src = "assets/icons/volume-level-2.svg";
      volumeIcon.alt = "Volume level 2";
    } else if (volume < 67) {
      volumeIcon.src = "assets/icons/volume-level-2.svg";
      volumeIcon.alt = "Volume level 2";
    } else {
      volumeIcon.src = "assets/icons/volume-level-3.svg";
      volume.alt = "Volume level 3";
    }
  });

  playButton.addEventListener("click", function(){
    audioElement.play();
    if (hornSelect.value == "party-horn") {
      confetti.addConfetti();
    }
  });
}