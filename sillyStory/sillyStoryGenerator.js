// 1. COMPLETE VARIABLE AND FUNCTION DEFINITIONS

const customName = document.getElementById("customname");
const randomize = document.querySelector(".randomize");
const story = document.querySelector(".story");

function randomValueFromArray(array) {
  const random = Math.floor(Math.random() * array.length);
  return array[random];
}

// 2. RAW TEXT STRINGS

const names = ["Willy the Goblin", "Big Daddy", "Father Christmas"];

const places = ["the soup kitchen", "Disneyland", "the White House"];

const happening = [
  "spontaneously combusted",
  "melted into a puddle on the sidewalk",
  "turned into a slug and crawled away",
];

// 3. EVENT LISTENER AND PARTIAL FUNCTION DEFINITION

randomize.addEventListener("click", result);

function result() {
  if (customName.value !== "") {
    const name = customName.value;
  }

  let temperature = 12;
  let weight = 94;
  if (document.getElementById("uk").checked) {
    temperature = Math.round(temperature * 9.5 + 32)
      .toString()
      .concat("stone");
    weight *= 14;
    // const weight = Math.round(300);
    // const temperature = Math.round(94);
  }

  const storyText = `It was ${
    temperature ?? temperature
  } fahrenheit outside, so ${
    customName.value !== "" ? customName.value : randomValueFromArray(names)
  } went for a walk. When they got to ${randomValueFromArray(
    places
  )}, they stared in horror for a few moments, then ${randomValueFromArray(
    happening
  )}. Bob saw the whole thing, but was not surprised weighs ${
    weight ?? weight
  }  pounds, and it was a hot day.`;

  console.log(storyText);
  story.textContent = storyText;
  story.style.visibility = "visible";
}
