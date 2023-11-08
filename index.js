const textInput =
document.getElementById('text-input');

const speakbutton = 
document.getElementById('speak-button');
const stopbutton = 
document.getElementById('stop-button');

const synth =
window.speechSynthesis;
let speaking = false;

speakbutton.addEventListener('click', () => {
    if(speaking) {
        return;
    }

    const text = textInput.value;

    if (text) {
        const utterance = new
        SpeechSynthesisUtterance(text);
        synth.speak(utterance);
        speaking = true;

        utterance.onend = () => {
            speaking = false;
            stopbutton.disabled = true;
            speakbutton.disabled = false;
        };

        stopbutton.disabled = false;
        speakbutton.disabled = true;
    }
});

stopbutton.addEventListener('click', () => {
    if (speaking) {
        synth.cancel();
        speaking = false;
        stopbutton.disabled = true;
        speakbutton.disabled = false;
    }
});