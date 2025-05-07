// explore.js

window.addEventListener('DOMContentLoaded', init);

function init() {
  // TODO
  const synth = window.speechSynthesis;
  const voiceSelect = document.getElementById("voice-select");
  const speakButton = document.querySelector("button");
  const textInput = document.getElementById("text-to-speak");
  const faceImage = document.querySelector("img");

  let voices = [];

  function populateVoiceList(){
    voices = synth.getVoices();
    voiceSelect.innerHTML = '<option value="select" disabled selected>Select Voices:</option>';

    voices.forEach((voice, index) => {
      const option = document.createElement("option");
      option.textContent = `${voice.name}`;
      option.value = index;
      voiceSelect.appendChild(option);
    });
  }

  synth.addEventListener("voiceschanged", populateVoiceList);
  populateVoiceList();

  speakButton.addEventListener("click", function() {
    const text = textInput.value;
    const selectedIndex = voiceSelect.value;

    if (!text || selectedIndex === "select") {
      alert("Please enter text and select a voice.");
      return;
    }

    const utterance = new SpeechSynthesisUtterance(text);
    utterance.voice = voices[selectedIndex];

    faceImage.src = "assets/images/smiling-open.png";

    utterance.addEventListener("end", function(){
      faceImage.src = "assets/images/smiling.png";
    });

    synth.speak(utterance);
  })
}