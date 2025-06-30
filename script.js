// script.js

// Thai Alphabet Data (Consonants & Vowels)
const consonants = [
  { letter: "ก", pronunciation: "gaw gai (chicken)", obsolete: false },
  { letter: "ข", pronunciation: "khaw khai (egg)", obsolete: false },
  { letter: "ฃ", pronunciation: "khaw khuat (obsolete)", obsolete: true },
  { letter: "ค", pronunciation: "khaw khwai (buffalo)", obsolete: false },
  { letter: "ฅ", pronunciation: "khaw khon (obsolete)", obsolete: true },
  { letter: "ฆ", pronunciation: "khaw ra-khang (bell)", obsolete: false },
  { letter: "ง", pronunciation: "ngaw ngoo (snake)", obsolete: false },
  { letter: "จ", pronunciation: "jaw jaan (plate)", obsolete: false },
  { letter: "ฉ", pronunciation: "chaw ching (cymbals)", obsolete: false },
  { letter: "ช", pronunciation: "chaw chang (elephant)", obsolete: false },
  { letter: "ซ", pronunciation: "saw so (chain)", obsolete: false },
  { letter: "ฌ", pronunciation: "chaw choe (tree)", obsolete: false },
  { letter: "ญ", pronunciation: "yaw ying (woman)", obsolete: false },
  { letter: "ฎ", pronunciation: "daw cha-da (headdress)", obsolete: false },
  { letter: "ฏ", pronunciation: "dtaw pa-tak (goad/stick)", obsolete: false },
  { letter: "ฐ", pronunciation: "thaw than (pedestal)", obsolete: false },
  { letter: "ฑ", pronunciation: "thaw montho (mythical woman)", obsolete: false },
  { letter: "ฒ", pronunciation: "thaw phu-thao (elder)", obsolete: false },
  { letter: "ณ", pronunciation: "naw nen (novice monk)", obsolete: false },
  { letter: "ด", pronunciation: "daw dek (child)", obsolete: false },
  { letter: "ต", pronunciation: "dtaw dtao (turtle)", obsolete: false },
  { letter: "ถ", pronunciation: "thaw thung (bag)", obsolete: false },
  { letter: "ท", pronunciation: "thaw thahan (soldier)", obsolete: false },
  { letter: "ธ", pronunciation: "thaw thong (flag)", obsolete: false },
  { letter: "น", pronunciation: "naw nu (mouse)", obsolete: false },
  { letter: "บ", pronunciation: "baw bai-mai (leaf)", obsolete: false },
  { letter: "ป", pronunciation: "bpaw bplaa (fish)", obsolete: false },
  { letter: "ผ", pronunciation: "phaw phueng (bee)", obsolete: false },
  { letter: "ฝ", pronunciation: "faw faa (lid)", obsolete: false },
  { letter: "พ", pronunciation: "phaw phaan (tray)", obsolete: false },
  { letter: "ฟ", pronunciation: "faw fan (teeth)", obsolete: false },
  { letter: "ภ", pronunciation: "phaw sam-phao (junk/ship)", obsolete: false },
  { letter: "ม", pronunciation: "maw maa (horse)", obsolete: false },
  { letter: "ย", pronunciation: "yaw yak (giant)", obsolete: false },
  { letter: "ร", pronunciation: "raw ruea (boat)", obsolete: false },
  { letter: "ล", pronunciation: "law ling (monkey)", obsolete: false },
  { letter: "ว", pronunciation: "waw waaen (ring)", obsolete: false },
  { letter: "ศ", pronunciation: "saw saa-laa (pavilion)", obsolete: false },
  { letter: "ษ", pronunciation: "saw rue-si (hermit)", obsolete: false },
  { letter: "ส", pronunciation: "saw suea (tiger)", obsolete: false },
  { letter: "ห", pronunciation: "haw heep (chest)", obsolete: false },
  { letter: "ฬ", pronunciation: "law chu-laa (kite)", obsolete: false },
  { letter: "อ", pronunciation: "aw aang (basin)", obsolete: false },
  { letter: "ฮ", pronunciation: "haw nok-huk (owl)", obsolete: false }
];

const vowels = [
  { letter: "ะ", pronunciation: "a (short)", obsolete: false },
  { letter: "า", pronunciation: "aa (long)", obsolete: false },
  { letter: "ิ", pronunciation: "i (short)", obsolete: false },
  { letter: "ี", pronunciation: "ii (long)", obsolete: false },
  { letter: "ุ", pronunciation: "u (short)", obsolete: false },
  { letter: "ู", pronunciation: "uu (long)", obsolete: false },
  { letter: "เ", pronunciation: "e (long)", obsolete: false },
  { letter: "แ", pronunciation: "ae (long)", obsolete: false },
  { letter: "โ", pronunciation: "o (long)", obsolete: false },
  { letter: "ไ", pronunciation: "ai (short)", obsolete: false },
  { letter: "ใ", pronunciation: "ai (short)", obsolete: false }
];

// ---------- STATE & VARIABLES ----------

let allCards = [];
let deck = [];
let currentIndex = 0;
let correctCount = 0;
let wrongCount = 0;
let historyStack = [];
let isRevealed = false;

// ---------- STARTUP ----------

function startApp() {
  const useConsonants = document.getElementById("chkConsonants").checked;
  const useVowels = document.getElementById("chkVowels").checked;
  const useObsolete = document.getElementById("chkObsolete").checked;

  let selected = [];

  if (useConsonants || useObsolete) {
    if (useConsonants && useObsolete) {
      selected = selected.concat(consonants);
    } else if (useConsonants) {
      selected = selected.concat(consonants.filter(c => !c.obsolete));
    } else if (useObsolete) {
      selected = selected.concat(consonants.filter(c => c.obsolete));
    }
  }

  if (useVowels) {
    selected = selected.concat(vowels);
  }

  if (selected.length === 0) {
    alert("Please select at least one category.");
    return;
  }

  allCards = selected.map(card => ({ ...card }));
  deck = shuffleArray([...allCards]);
  correctCount = 0;
  wrongCount = 0;
  historyStack = [];

  document.getElementById("menu").style.display = "none";
  document.getElementById("app").style.display = "block";

  updateScore();
  showCard();
}

// ---------- FLASHCARD LOGIC ----------

function showCard() {
  if (deck.length === 0) {
    document.getElementById("letter").textContent = "🎉";
    document.getElementById("pronunciation").textContent = "All correct! Well done.";
    document.querySelector(".controls").style.display = "none";
    return;
  }

  currentIndex = 0;
  document.getElementById("letter").textContent = deck[currentIndex].letter;
  document.getElementById("pronunciation").textContent = "?";
  document.querySelector(".controls").style.display = "flex";
  isRevealed = false;
}

function reveal() {
  document.getElementById("pronunciation").textContent = deck[currentIndex].pronunciation;
}

function markCorrect() {
  if (deck.length === 0) return;
  historyStack.push({ action: 'correct', card: deck[currentIndex], index: currentIndex });
  deck.splice(currentIndex, 1);
  correctCount++;
  updateScore();
  showCard();
}

function markWrong() {
  if (deck.length === 0) return;
  historyStack.push({ action: 'wrong', card: deck[currentIndex], index: currentIndex });
  const wrongCard = deck.splice(currentIndex, 1)[0];
  wrongCount++;
  const randIndex = Math.floor(Math.random() * (deck.length + 1));
  deck.splice(randIndex, 0, wrongCard);
  updateScore();
  showCard();
}

function undoLastAction() {
  if (historyStack.length === 0) return;
  const lastAction = historyStack.pop();

  if (lastAction.action === 'correct') {
    deck.splice(lastAction.index, 0, lastAction.card);
    correctCount = Math.max(0, correctCount - 1);
  } else if (lastAction.action === 'wrong') {
    const foundIndex = deck.findIndex(c => c.letter === lastAction.card.letter);
    if (foundIndex !== -1) {
      deck.splice(foundIndex, 1);
      deck.splice(lastAction.index, 0, lastAction.card);
    }
    wrongCount = Math.max(0, wrongCount - 1);
  }

  updateScore();
  showCard();
}

function updateScore() {
  const cardsLeft = deck.length;
  document.getElementById("score").textContent =
    `Correct: ${correctCount} | Wrong: ${wrongCount} | Cards Left: ${cardsLeft}`;
}

function goBack() {
  document.getElementById("app").style.display = "none";
  document.getElementById("menu").style.display = "block";
}

// ---------- UTILS ----------

function shuffleArray(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
}

// ---------- KEYBOARD SHORTCUTS ----------

document.addEventListener("keydown", function(event) {
  if (document.getElementById("app").style.display !== "block") return;

  const isMac = navigator.platform.toUpperCase().indexOf('MAC') >= 0;
  if ((isMac && event.metaKey && event.key.toLowerCase() === 'z') ||
      (!isMac && event.ctrlKey && event.key.toLowerCase() === 'z')) {
    event.preventDefault();
    undoLastAction();
    return;
  }

  if (event.code === "Space") {
    event.preventDefault();
    if (!isRevealed) {
      reveal();
      isRevealed = true;
    } else {
      markCorrect();
      isRevealed = false;
    }
  }

  if (event.key.toLowerCase() === "q") {
    markWrong();
    isRevealed = false;
  }
});