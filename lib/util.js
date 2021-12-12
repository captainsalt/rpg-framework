let buttonDiv = document.querySelector("#button-div");
let promptText = document.querySelector("#prompt-text");
let lastChoice = document.querySelector("#last-choice");

function clearButtonDiv() {
  buttonDiv.innerHTML = "";
}

function createButtonDivBtn(game, choice) {
  let btn = document.createElement("button");
  btn.innerHTML = choice.label;
  btn.value = JSON.stringify(choice);

  btn.onclick = (e) => {
    let choice = JSON.parse(e.target.value);
    let choiceEvent = new CustomEvent("choiceEvent", {
      detail: {
        choice: choice,
      },
    });

    document.dispatchEvent(choiceEvent);
  };

  buttonDiv.appendChild(btn);
}

function disableButtons() {
  for (const btn of buttonDiv.children) btn.disabled = true;
}

function updatePrompt(text) {
  promptText.innerHTML = text;
}

function updateChoice(text) {
  lastChoice.innerHTML = text;
}
