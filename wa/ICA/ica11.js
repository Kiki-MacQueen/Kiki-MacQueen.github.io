// Complete variable definitions and random functions

const customName = document.getElementById("custom-name");
const generateBtn = document.querySelector(".generate");
const story = document.querySelector(".story");

function randomValueFromArray(array) {
  const random = Math.floor(Math.random() * array.length);
  return array[random];
}

const characters = ["Martha the chicken", "Mr. Pickles the horse", "Gary the wizard"];
const places = ["the gym", "the bank", "the bakery"];
const events = [
  "sneezed halfway",
  "crashed through a window",
  "turned into a suspiciously formal puddle,",
];


function returnRandomStoryString() {
    const randomCharacter = randomValueFromArray(characters);
    const randomPlace = randomValueFromArray(places);
    const randomEvent = randomValueFromArray(events);
    let storyText = `On Tuesday morning, ${randomCharacter} floated into ${randomPlace}, they stared in horror for a few moments, then ${randomEvent}. she had forgotten where the shed was and accused the neighbor’s goat of theft. ${randomCharacter} went home and cried.`;
  return storyText;
}

// Event listener and partial generate function definition

generateBtn.addEventListener("click", generateStory);

function generateStory() {
  let newStory = returnRandomStoryString();

  if (customName.value !== "") {
    const name = customName.value;
    newStory = newStory.replace("Bob", name);
  }

  if (document.getElementById("uk").checked) {
    const weight = `${Math.round(300 / 14)} stone`;
    const temperature = `${Math.round((94 - 32) * (5 / 9))} Celsius`;
    newStory = newStory.replace("300 pounds", weight);
    newStory = newStory.replace("94 Fahrenheit", temperature);
  }

  story.textContent = newStory;
  story.style.visibility = "visible";
}