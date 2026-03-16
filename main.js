//find elements to use
const introDialog = document.getElementById("intro-dialog");
const dialogCloseButton = document.getElementById("dialog-close-button");
const playButton = document.getElementById("play-button");

//intro dialog setup
introDialog.showModal();

dialogCloseButton.addEventListener("click", () => {
    introDialog.close();
    Tone.start();
}
)

//tone synth initialisation
const synth = new Tone.Synth().toDestination();

//play a note
function playNote() {
    synth.triggerAttackRelease("C4", "8n");
}
playButton.addEventListener("click", playNote);