let speech = new SpeechSynthesisUtterance();
let voices = [];
const voiceSelect = document.querySelector("select");

// Load voices dynamically
window.speechSynthesis.onvoiceschanged = () => {
    voices = window.speechSynthesis.getVoices();
    speech.voice = voices[0]; // Default to the first voice

    // Populate the select dropdown with voices
    voices.forEach((voice, i) => {
        const option = new Option(voice.name, voice.name);
        voiceSelect.options[i] = option;
    });
};

// 
voiceSelect.addEventListener("change", () => {
    const selectedVoice = voices.find(voice => voice.name === voiceSelect.value);
    if (selectedVoice) {
        speech.voice = selectedVoice;
    }
});

//
document.querySelector("button").addEventListener("click", () => {
    const text = document.querySelector("textarea").value.trim();
    if (!text) {
        alert("Please enter some text to convert to speech.");
        return;
    }
    speech.text = text;
    window.speechSynthesis.speak(speech);
});
