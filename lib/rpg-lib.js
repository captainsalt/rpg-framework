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

    document.addEventListener("choiceEvent", (e) => {
      const choice = e.detail.choice;

      updateChoice(choice.summary);

      if (choice.isDeadEnd) this.badEnd(choice);
      else this.continue();
    });
  }

  init() {
    this.update();
  }

  getCurrentPrompt() {
    return prompts[0];
  }

  badEnd(choice) {
    disableButtons();
    updateChoice(choice.summary);
    updatePrompt("");
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
    let prompt = this.getCurrentPrompt();

    if (prompt instanceof GoodEndPrompt) {
      updatePrompt(prompt.summary);
      return;
    }

    updatePrompt(prompt.summary);
    for (let choice of prompt.choices) createButtonDivBtn(this, choice);
  }
}
