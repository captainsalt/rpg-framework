let bedroom = new Prompt("Your alarm has been beeping forever", [
  new Choice(
    "Ignore alarm",
    "You decide to ignore your alarm. Who cares about work anyways",
    true,
  ),
  new Choice(
    "Stop alarm",
    "You stop the alarm and get out of bed. Time to seize the day",
    false,
  ),
]);

let kitchen = new Prompt(
  "You get dressed and start to hurry out the door. Halfway out the door you realize you don't have any shoes on.",
  [
    new Choice(
      "Give up",
      "You give up looking for your shoes. You arrive at work and get fired for not wearing them. Good job",
      true,
    ),
    new Choice("Look", "You start looking for your shoes", false),
  ],
);

let prompts = [bedroom, kitchen];
let game = new Game(prompts);

game.init();
