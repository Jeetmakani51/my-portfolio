let playButton = document.getElementById("play-button");
let experimentOutput = document.getElementById("experiment-output");

const ideas = [
  "Build a website that insults your code when you make a syntax error.",
  "Build a weather app that only predicts whether you should go outside.",
  "Build a to-do list that refuses to accept more than 3 tasks.",
  "Build a website that generates completely useless productivity advice.",
  "Build a game where the enemy is your own procrastination.",
  "Build a chatbot that only answers with movie quotes.",
  "Build a website that tracks how many times you say 'I'll do it later'.",
  "Build an app that randomly chooses what you should eat today.",
  "Build a digital room where every object does something unexpected.",
  "Build something at 3 AM and pretend it was intentional.",
  "Build a calculator that gives answers that are almost right, then apologizes.",
  "Build a website with a 'Submit' button that runs away from your cursor.",
  "Build a clicker game where the upgrades make the game worse.",
  "Build a tower defense game where the towers are your unfinished side projects.",
  "Build a 'Guess the Language' game using snippets of code.",
  "Build a website whose layout rearranges itself based on the time of day.",
  "Build a poem generator that turns your commit messages into verse.",
  "Build a site that rates your playlist's emotional stability.",
  "Build something that looks like an error page but is actually the entire product.",
];

function randomIdea() {
  let randomIndex = Math.floor(Math.random() * ideas.length);
  return ideas[randomIndex];
}

playButton.addEventListener("click", function () {
  const experiments = ["projects", "terminal", "dontPress", "reaction"];

  const randomExperiment =
    experiments[Math.floor(Math.random() * experiments.length)];

  if (randomExperiment === "projects") {
    showProjectExperiment();
  }

  if (randomExperiment === "terminal") {
    showterminalExperiment();
  }

  if (randomExperiment === "dontPress") {
    showDontPressExperiment();
  }

  if (randomExperiment === "reaction") {
    showReactionExperiment();
  }
});

function showProjectExperiment() {
  experimentOutput.innerHTML = `
        <div class="experiment-result">
            <span class="experiment-number">EXPERIMENT #01</span>

            <h3>WHAT SHOULD I BUILD?</h3>

            <p>${randomIdea()}</p>

            <button id="another-button">ANOTHER</button>
        </div>
    `;
  document
    .getElementById("another-button")
    .addEventListener("click", function () {
      experimentOutput.querySelector("p").textContent = randomIdea();
    });
}

function showterminalExperiment() {
  experimentOutput.innerHTML = `
        <div class="terminal">

            <div class="terminal-header">
                JEET@INTERNET-CORNER:~$
            </div>

            <div id="terminal-output">
                <p>Welcome to the corner.</p>
                <p>Type <strong>help</strong> to see available commands.</p>
            </div>

            <div class="terminal-input">
                <span>&gt;</span>
                <input
                    type="text"
                    id="terminal-command"
                    autocomplete="off"
                    autofocus
                >
            </div>

        </div>
    `;

  const input = document.getElementById("terminal-command");

  input.focus();

  input.addEventListener("keydown", function (event) {
    if (event.key === "Enter") {
      const command = input.value.trim().toLowerCase();

      runCommand(command);

      input.value = "";
    }
  });
}

function runCommand(command) {
  const output = document.getElementById("terminal-output");

  let response = "";

  if (command === "help") {
    response = `
            <p>Available commands:</p>
            <p>→ whoami</p>
            <p>→ ls</p>
            <p>→ about</p>
            <p>→ clear</p>
        `;
  } else if (command === "whoami") {
    response = `
            <p>jeet</p>
            <p>builder / developer / overthinker</p>
        `;
  } else if (command === "ls") {
    response = `
            <p>projects/</p>
            <p>experiments/</p>
            <p>thoughts/</p>
            <p>chaos/</p>
        `;
  } else if (command === "about") {
    response = `
            <p>This is Jeet's little corner of the internet.</p>
        `;
  } else if (command === "clear") {
    output.innerHTML = "";
    return;
  } else if (command === "") {
    return;
  } else {
    response = `
            <p>command not found: ${command}</p>
            <p>Try <strong>help</strong>.</p>
        `;
  }

  output.innerHTML += response;
}

function showDontPressExperiment() {
  experimentOutput.innerHTML = `
    <div class="dont-press-experiment">
      <span class="experiment-number">EXPERIMENT #03</span>

      <h3>DO NOT PRESS</h3>

      <button id="dont-press-button">DO NOT PRESS</button>

      <p id="dont-press-message"></p>
    </div>
  `;

  const button = document.getElementById("dont-press-button");
  const message = document.getElementById("dont-press-message");

  const reactions = [
    "I told you not to press it.",
    "Why did you do that?",
    "You had ONE job.",
    "Nothing happened. Probably.",
    "Congratulations. You pressed a button.",
    "The button is disappointed in you.",
    "Okay. Now stop.",
    "That was definitely a mistake.",
    "Interesting choice.",
    "You really can't follow instructions, can you?",
  ];

  button.addEventListener("click", function () {
    const randomIndex = Math.floor(Math.random() * reactions.length);

    message.textContent = reactions[randomIndex];
  });
}

function showReactionExperiment() {
  experimentOutput.innerHTML = `
    <div class="reaction-experiment">
      <span class="experiment-number">EXPERIMENT #04</span>

      <h3>REACTION TEST</h3>

      <p id="reaction-message">WAIT FOR GREEN...</p>

      <button id="reaction-button">WAIT...</button>

      <p id="reaction-result"></p>
    </div>
  `;

  const button = document.getElementById("reaction-button");
  const message = document.getElementById("reaction-message");
  const result = document.getElementById("reaction-result");

  const delay = Math.floor(Math.random() * 3000) + 2000;
  let startTime;

  setTimeout(function () {
    button.textContent = "CLICK!";
    message.textContent = "GO!";
    startTime = Date.now();
  }, delay);
  button.addEventListener("click", function () {
    if (!startTime) {
      result.textContent = "TOO EARLY 😭";
      return;
    }

    const reactionTime = Date.now() - startTime;

    result.textContent = `YOUR TIME: ${reactionTime} ms`;
  });
}
