let promptText = document.querySelector("#prompt-text");

class Choice {
  constructor(label, summary, isDeadEnd) {
    this.label = label;
    this.summary = summary;
    this.isDeadEnd = isDeadEnd;
  }
}

class Prompt {
  constructor(label, choices) {
    this.label = label;
    this.choices = choices;
  }
}

class Game {
  constructor(prompts) {
    this.prompts = prompts;
    this.promptIndex = 0;

    document.addEventListener("choiceEvent", (e) => {
      const gameEnder = e.detail.isGameEnder;

      console.log("gameEnder :>> ", gameEnder);

      if (gameEnder == "true") this.endGame();
      else this.continue();
    });
  }

  promptIndex;

  init() {
    this.update();
  }

  getPrompt() {
    return prompts[this.promptIndex];
  }

  endGame() {}

  continue() {
    this.promptIndex++;
    prompts[this.promptIndex];
    this.update();
  }

  update() {
    clearButtonDiv();

    let prompt = this.getPrompt();
    promptText.innerHTML = prompt.label;
    for (let choice of prompt.choices) createButtonDivBtn(this, choice);
  }
}
