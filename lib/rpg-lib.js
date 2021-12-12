class Prompt {
  constructor(summary, choices) {
    this.summary = summary;
    this.choices = choices;
  }
}

class GoodEndPrompt {
  constructor(summary) {
    this.summary = summary;
  }
}

class Choice {
  constructor(label, summary, isDeadEnd) {
    this.label = label;
    this.summary = summary;
    this.isDeadEnd = isDeadEnd;
  }
}

class Game {
  constructor(prompts) {
    this.prompts = prompts;
    this.promptIndex = 0;

    document.addEventListener("choiceEvent", (e) => {
      const choice = e.detail.choice;

      updateChoice(choice.summary);

      if (choice.isDeadEnd) this.badEnd(choice);
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

  badEnd(choice) {
    disableButtons();
    updatePrompt(choice.summary);
  }

  goodEnd(goodEndPrompt) {
    updatePrompt(goodEndPrompt.summary);
  }

  continue() {
    this.prompts.shift();
    this.update();
  }

  update() {
    clearButtonDiv();
    let prompt = this.getPrompt();

    if (prompt instanceof GoodEndPrompt) {
      updatePrompt(prompt.summary);
      return;
    }

    updatePrompt(prompt.summary);
    for (let choice of prompt.choices) createButtonDivBtn(this, choice);
  }
}
