// Preset values
const FROGS = 3;

// Exercise 1.1 - Set up the track
for (let count = 1; count <= FROGS; count++) {
  const lane = document.createElement("li");
  lane.id = `lane-${count}`;

  const number = document.createElement("span");
  number.innerText = count;

  lane.appendChild(number);
  track.appendChild(lane);
}

// Exercise 1.2 - Call in the frogs!
const racers = [];
for (let x = 0; x < FROGS; x++) {
  racers.push(frogstable[x]);
}

// Exercise 1.3 - Line 'em up!
racers.forEach(function (racer, id) {
  const newFrog = document.createElement("span");
  newFrog.style.background = racer.color;
  newFrog.innerText = `${racer.number}`; // 1.4
  document.getElementById(`lane-${id + 1}`).appendChild(newFrog);

  // 1.4
  newFrog.classList.add("frog");
  const frogName = document.createElement("span");
  frogName.classList.add("frog-name");
  frogName.innerText = racer.name;
  document.getElementById(`lane-${id + 1}`).appendChild(frogName);

  // 1.5
  racers[id].progress = 0;
  racers[id].lane = `lane-${id + 1}`;
});

// Exercise 1.6 - Make 'em hop!
function racingFrog(racer) {
  const trackWidth = track.offsetWidth;

  const hop = setInterval(function () {
    const hopLength = Math.floor(((Math.random() * 100) / trackWidth) * 100);
    racer.progress += hopLength;

    console.log(racer.name, " is at ", racer.progress);

    if (racer.progress >= 100) {
      racer.progress = 100;
      console.log(racer.name, " has finished!");
      clearInterval(hop);
    }

    document.querySelector(
      `#${racer.lane} .frog`
    ).style.left = `${racer.progress}%`;
  }, Math.random() * 1000);
}

racers.forEach((racer) => racingFrog(racer));

console.log(racers);
