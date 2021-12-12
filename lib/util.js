let buttonDiv = document.querySelector("#button-div");

function clearButtonDiv() {
  buttonDiv.innerHTML = "";
}

function createButtonDivBtn(game, choice) {
  let btn = document.createElement("button");
  btn.innerHTML = choice.label;
  btn.value = choice.isDeadEnd;

  btn.onclick = (e) => {
    let end = e.target.value;
    let choiceEvent = new CustomEvent("choiceEvent", {
      detail: {
        isGameEnder: end,
      },
    });

    document.dispatchEvent(choiceEvent);
  };

  buttonDiv.appendChild(btn);
}
