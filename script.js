let currentAudio = null;


// Alphabets button
const alphabetBtn = document.getElementById("alphabetBtn");
const numberBtn = document.getElementById("numberBtn");
const animalBtn = document.getElementById("animalBtn");
const colourBtn = document.getElementById("colourBtn");
const homeBtn = document.getElementById("homeBtn");
const shapeBtn = document.getElementById("shapeBtn");

const homeButtons = document.getElementById("homeButtons");
const alphabets = document.getElementById("alphabets");
const animals = document.getElementById("animals");
const numbers = document.getElementById("numbers");
const colours = document.getElementById("colours");
const shapes = document.getElementById("shapes");


console.log({
  alphabetBtn,
  numberBtn,
  animalBtn,
  colourBtn,
  shapeBtn,
  homeBtn
});
// Alphabets click
alphabetBtn.addEventListener("click", () => {
  alphabets.style.display = "block";
  numbers.style.display = "none";
  animals.style.display = "none";
  colours.style.display = "none";
  shapes.style.display = "none";

  homeButtons.style.display = "none";
  homeBtn.style.display = "inline-block";

  alphabets.scrollIntoView({ behavior: "smooth" });
});

// Numbers click
numberBtn.addEventListener("click", () => {
  numbers.style.display = "block";
  alphabets.style.display = "none";
  animals.style.display = "none";
  colours.style.display = "none";
  shapes.style.display = "none";

  homeButtons.style.display = "none";
  homeBtn.style.display = "inline-block";

  numbers.scrollIntoView({ behavior: "smooth" });
});

animalBtn.addEventListener("click", () => {
  animals.style.display = "block";
  alphabets.style.display = "none";
  numbers.style.display = "none";
  colours.style.display = "none";
  shapes.style.display = "none";

  homeButtons.style.display = "none";
  homeBtn.style.display = "inline-block";

  animals.scrollIntoView({ behavior: "smooth" });
});

// Colours
colourBtn.addEventListener("click", () => {
  colours.style.display = "block";
  alphabets.style.display = "none";
  numbers.style.display = "none";
  animals.style.display = "none";
  shapes.style.display = "none";

  homeButtons.style.display = "none";
  homeBtn.style.display = "inline-block";

  colours.scrollIntoView({ behavior: "smooth" });
});

shapeBtn.addEventListener("click", () => {
  shapes.style.display = "block";
  alphabets.style.display = "none";
  numbers.style.display = "none";
  animals.style.display = "none";
  colours.style.display = "none";

  homeButtons.style.display = "none";
  homeBtn.style.display = "inline-block";

  shapes.scrollIntoView({ behavior: "smooth" });
});

// Home click
homeBtn.addEventListener("click", () => {
  alphabets.style.display = "none";
  numbers.style.display = "none";
  animals.style.display = "none";
  colours.style.display = "none";
  shapes.style.display = "none";

  homeButtons.style.display = "block";
  homeBtn.style.display = "none";

  window.scrollTo({ top: 0, behavior: "smooth" });
});


// Speak function (same for alphabets & numbers)
function speak(text) {
  // Stop any previous speech immediately
  window.speechSynthesis.cancel();

  const speech = new SpeechSynthesisUtterance(text);
  speech.rate = 0.5;     // normal speed
  speech.pitch = 1.1; // kid-friendly tone
  speech.volume = 1;

  window.speechSynthesis.speak(speech);
}

function playAnimalSound(soundFile, event) {
  event.stopPropagation(); // 🚫 prevents card click

  // Stop speech
  window.speechSynthesis.cancel();

  // Stop previous sound
  if (currentAudio) {
    currentAudio.pause();
    currentAudio.currentTime = 0;
  }

  currentAudio = new Audio(soundFile);
  currentAudio.play();
}


