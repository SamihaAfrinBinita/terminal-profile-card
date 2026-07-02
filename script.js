// Sequence of "commands" typed into the terminal, and the output block
// that should appear right after each one finishes typing.
const sequence = [
  { cmdId: "cmd1", cursorId: "cursor1", text: "whoami", outputId: "output1", nextLineId: "line2" },
  { cmdId: "cmd2", cursorId: "cursor2", text: "cat about.txt", outputId: "output2", nextLineId: "line3" },
  { cmdId: "cmd3", cursorId: "cursor3", text: "ls skills/", outputId: "output3", nextLineId: "line4" },
  { cmdId: "cmd4", cursorId: "cursor4", text: "cat contact.txt", outputId: "output4", nextLineId: "line5" },
];

const TYPE_SPEED = 38;   // ms per character
const PAUSE_AFTER_CMD = 250;
const PAUSE_AFTER_OUTPUT = 350;

function typeText(el, text, speed) {
  return new Promise((resolve) => {
    let i = 0;
    const timer = setInterval(() => {
      el.textContent += text[i];
      i++;
      if (i >= text.length) {
        clearInterval(timer);
        resolve();
      }
    }, speed);
  });
}

async function runSequence() {
  for (const step of sequence) {
    const cmdEl = document.getElementById(step.cmdId);
    const cursorEl = document.getElementById(step.cursorId);

    // hide this line's cursor blink while "typing" (we render manually)
    cursorEl.style.animation = "none";
    cursorEl.style.opacity = "1";

    await typeText(cmdEl, step.text, TYPE_SPEED);

    // restore blinking cursor after typing finishes
    cursorEl.style.animation = "";

    await sleep(PAUSE_AFTER_CMD);

    if (step.outputId) {
      const out = document.getElementById(step.outputId);
      out.hidden = false;
      await sleep(PAUSE_AFTER_OUTPUT);
    }

    if (step.nextLineId) {
      document.getElementById(step.nextLineId).hidden = false;
    }
  }
}

function sleep(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

document.addEventListener("DOMContentLoaded", () => {
  runSequence();
});
