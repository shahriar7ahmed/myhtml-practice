const word = document.getElementById("word");
const text = document.getElementById("text");
const scoreElement = document.getElementById("score");
const timeElement = document.getElementById("time");
const endgameElement = document.getElementById("end-game-container");
const settingsButton = document.getElementById("settings-btn");
const settings = document.getElementById("settings");
const settingsForm = document.getElementById("settings-form");
const difficultySelect = document.getElementById("difficulty");

// List of words for game
const words = [
    "sigh",
    "tense",
    "airplane",
    "ball",
    "pies",
    "juice",
    "warlike",
    "bad",
    "north",
    "dependent",
    "steer",
    "silver",
    "highfalutin",
    "superficial",
    "quince",
    "eight",
    "feeble",
    "admit",
    "drag",
    "loving",
    "abundant",
    "adjust",
    "admire",
    "alert",
    "analyze",
    "announce",
    "approve",
    "arrange",
    "artistic",
    "assist",
    "attractive",
    "average",
    "bargain",
    "beginner",
    "belong",
    "benefit",
    "blend",
    "blossom",
    "bold",
    "brilliant",
    "calculate",
    "captain",
    "careful",
    "celebrate",
    "challenge",
    "champion",
    "character",
    "charming",
    "cheerful",
    "choice",
    "classic",
    "comfort",
    "complete",
    "consider",
    "content",
    "courage",
    "create",
    "curious",
    "delicate",
    "desire",
    "different",
    "direct",
    "discover",
    "dramatic",
    "earnest",
    "efficient",
    "energy",
    "enjoy",
    "entertain",
    "entire",
    "escape",
    "essential",
    "excite",
    "expand",
    "explore",
    "express",
    "extreme",
    "faithful",
    "familiar",
    "famous",
    "fantastic",
    "favorite",
    "fearless",
    "flatter",
    "flexible",
    "frequent",
    "friendly",
    "frighten",
    "general",
    "genuine",
    "glorious",
    "graceful",
    "grateful",
    "handsome",
    "healthy",
    "honest",
    "honor",
    "ideal",
    "imagine",
    "improve",
    "include",
    "independent",
    "inform",
    "innocent",
    "intense",
    "intimate",
    "invite",
    "journey",
    "joyful",
    "justice",
    "knowledge",
    "lively",
    "loyal",
    "luxury",
    "magic",
    "marvelous",
    "master",
    "mercy",
    "mild",
    "miracle",
    "modest",
    "moral",
    "motion",
    "mutual",
    "natural",
    "neat",
    "noble",
    "normal",
    "observe",
    "obvious",
    "oppose",
    "order",
    "patience",
    "peaceful",
    "perfect",
    "plain",
    "polite",
    "popular",
    "positive",
    "powerful",
    "practical",
    "precious",
    "precise",
    "prefer",
    "preserve",
    "primary",
    "promote",
    "proper",
    "protect",
    "provide",
    "quality",
    "quick",
    "quiet",
    "rational",
    "realize",
    "reasonable",
    "recall",
    "receive",
    "recognize",
    "recommend",
    "recover",
    "refresh",
    "regular",
    "reliable",
    "remarkable",
    "remember",
    "remind",
    "remove",
    "repair",
    "replace",
    "request",
    "reserve",
    "resolve",
    "respect",
    "responsible",
    "restore",
    "result",
    "return",
    "reward",
    "rich",
    "righteous",
    "rigid",
    "satisfy",
    "secure",
    "select",
    "separate",
    "serious",
    "service",
    "severe",
    "shelter",
    "shine",
    "shock",
    "short",
    "sincere",
    "skilled",
    "smart",
    "smile",
    "smooth",
    "solid",
    "special",
    "spiritual",
    "steady",
    "strange",
    "strict",
    "strive",
    "strong",
    "sudden",
    "suitable",
    "support",
    "surprise",
    "surround",
    "survive",
    "swift",
    "symbol",
    "talent",
    "tender",
    "terrific",
    "thorough",
    "thoughtful",
    "thrive",
    "tolerant",
    "touch",
    "tradition",
    "train",
    "trust",
    "unique",
    "unite",
    "urgent",
    "valuable",
    "variety",
    "victory",
    "virtue",
    "vision",
    "vivid",
    "wealth",
    "wonder",
    "worthy",
    "yearn",
  ];
  

let randomWord;
let score = 0;
let time = 30;
// let difficulty = "medium";
let difficulty =
  localStorage.getItem("difficulty") !== null
    ? localStorage.getItem("difficulty")
    : "medium";

const timeInterval = setInterval(updateTime, 1000);

function getRandomWord() {
  return words[Math.floor(Math.random() * words.length)];
}

function addWordToDom() {
  randomWord = getRandomWord();
  word.innerText = randomWord;
}

function updateScore() {
  score++;
  scoreElement.innerText = score;
}

function updateTime() {
  time--;
  timeElement.innerText = time + "s";
  if (time === 0) {
    clearInterval(timeInterval);
    gameOver();
  }
}

function gameOver() {
  endgameElement.innerHTML = `
    <h1>Time ran out</h1>
    <p>Your final score is ${score}</p>
    <button onclick="history.go(0)">Play Again</button>
    `;
  endgameElement.style.display = "flex";
}

text.addEventListener("input", (e) => {
  const insertedText = e.target.value;
  if (insertedText === randomWord) {
    e.target.value = "";
    addWordToDom();
    updateScore();
    if (difficulty === "hard") time += 2;
    else if (difficulty === "medium") time += 3;
    else time += 5;
    updateTime();
  }
});

settingsButton.addEventListener("click", ()=>
settings.classList.toggle("hide")
);
settingsForm.addEventListener("change", (e)=>{
  difficulty = e.target.value;
  localStorage.setItem("difficulty", difficulty);
}
);
difficultySelect.value = difficulty;
addWordToDom ();
text.focus();