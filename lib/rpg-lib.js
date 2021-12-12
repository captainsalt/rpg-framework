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
      const choice = e.detail.choice;

      if (choice.isDeadEnd) this.endGame(choice);
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

  endGame(choice) {
    disableButtons();
    updatePrompt(choice.summary);
  }

  continue() {
    this.promptIndex++;
    prompts[this.promptIndex];
    this.update();
  }

  update() {
    clearButtonDiv();

    let prompt = this.getPrompt();
    updatePrompt(prompt.label);
    for (let choice of prompt.choices) createButtonDivBtn(this, choice);
  }
}
