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

    updatePrompt(prompt.label);
    for (let choice of prompt.choices) createButtonDivBtn(this, choice);
  }
}
