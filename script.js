// script.js

// Thai Alphabet Data (Consonants & Vowels)
const consonants = [
  { letter: "ก", pronunciation: "gaw gai (chicken)", speak: "ก ไก่", obsolete: false },
  { letter: "ข", pronunciation: "khaw khai (egg)", speak: "ข ไข่", obsolete: false },
  { letter: "ฃ", pronunciation: "khaw khuat (obsolete)", speak: "ฃ ขวด", obsolete: true },
  { letter: "ค", pronunciation: "khaw khwai (buffalo)", speak: "ค ควาย", obsolete: false },
  { letter: "ฅ", pronunciation: "khaw khon (obsolete)", speak: "ฅ คน", obsolete: true },
  { letter: "ฆ", pronunciation: "khaw ra-khang (bell)", speak: "ฆ ระฆัง", obsolete: false },
  { letter: "ง", pronunciation: "ngaw ngoo (snake)", speak: "ง งู", obsolete: false },
  { letter: "จ", pronunciation: "jaw jaan (plate)", speak: "จ จาน", obsolete: false },
  { letter: "ฉ", pronunciation: "chaw ching (cymbals)", speak: "ฉ ฉิ่ง", obsolete: false },
  { letter: "ช", pronunciation: "chaw chang (elephant)", speak: "ช ช้าง", obsolete: false },
  { letter: "ซ", pronunciation: "saw so (chain)", speak: "ซ โซ่", obsolete: false },
  { letter: "ฌ", pronunciation: "chaw choe (tree)", speak: "ฌ เฌอ", obsolete: false },
  { letter: "ญ", pronunciation: "yaw ying (woman)", speak: "ญ หญิง", obsolete: false },
  { letter: "ฎ", pronunciation: "daw cha-da (headdress)", speak: "ฎ ชฎา", obsolete: false },
  { letter: "ฏ", pronunciation: "dtaw pa-tak (goad/stick)", speak: "ฏ ปฏัก", obsolete: false },
  { letter: "ฐ", pronunciation: "thaw than (pedestal)", speak: "ฐ ฐาน", obsolete: false },
  { letter: "ฑ", pronunciation: "thaw montho (mythical woman)", speak: "ฑ มณโฑ", obsolete: false },
  { letter: "ฒ", pronunciation: "thaw phu-thao (elder)", speak: "ฒ ผู้เฒ่า", obsolete: false },
  { letter: "ณ", pronunciation: "naw nen (novice monk)", speak: "ณ เณร", obsolete: false },
  { letter: "ด", pronunciation: "daw dek (child)", speak: "ด เด็ก", obsolete: false },
  { letter: "ต", pronunciation: "dtaw dtao (turtle)", speak: "ต เต่า", obsolete: false },
  { letter: "ถ", pronunciation: "thaw thung (bag)", speak: "ถ ถุง", obsolete: false },
  { letter: "ท", pronunciation: "thaw thahan (soldier)", speak: "ท ทหาร", obsolete: false },
  { letter: "ธ", pronunciation: "thaw thong (flag)", speak: "ธ ธง", obsolete: false },
  { letter: "น", pronunciation: "naw nu (mouse)", speak: "น หนู", obsolete: false },
  { letter: "บ", pronunciation: "baw bai-mai (leaf)", speak: "บ ใบไม้", obsolete: false },
  { letter: "ป", pronunciation: "bpaw bplaa (fish)", speak: "ป ปลา", obsolete: false },
  { letter: "ผ", pronunciation: "phaw phueng (bee)", speak: "ผ ผึ้ง", obsolete: false },
  { letter: "ฝ", pronunciation: "faw faa (lid)", speak: "ฝ ฝา", obsolete: false },
  { letter: "พ", pronunciation: "phaw phaan (tray)", speak: "พ พาน", obsolete: false },
  { letter: "ฟ", pronunciation: "faw fan (teeth)", speak: "ฟ ฟัน", obsolete: false },
  { letter: "ภ", pronunciation: "phaw sam-phao (junk/ship)", speak: "ภ สำเภา", obsolete: false },
  { letter: "ม", pronunciation: "maw maa (horse)", speak: "ม ม้า", obsolete: false },
  { letter: "ย", pronunciation: "yaw yak (giant)", speak: "ย ยักษ์", obsolete: false },
  { letter: "ร", pronunciation: "raw ruea (boat)", speak: "ร เรือ", obsolete: false },
  { letter: "ล", pronunciation: "law ling (monkey)", speak: "ล ลิง", obsolete: false },
  { letter: "ว", pronunciation: "waw waaen (ring)", speak: "ว แหวน", obsolete: false },
  { letter: "ศ", pronunciation: "saw saa-laa (pavilion)", speak: "ศ ศาลา", obsolete: false },
  { letter: "ษ", pronunciation: "saw rue-si (hermit)", speak: "ษ ฤๅษี", obsolete: false },
  { letter: "ส", pronunciation: "saw suea (tiger)", speak: "ส เสือ", obsolete: false },
  { letter: "ห", pronunciation: "haw heep (chest)", speak: "ห หีบ", obsolete: false },
  { letter: "ฬ", pronunciation: "law chu-laa (kite)", speak: "ฬ จุฬา", obsolete: false },
  { letter: "อ", pronunciation: "aw aang (basin)", speak: "อ อ่าง", obsolete: false },
  { letter: "ฮ", pronunciation: "haw nok-huk (owl)", speak: "ฮ นกฮูก", obsolete: false }
];

const vowels = [
  { letter: "ะ", pronunciation: "a (short)", speak: "อะ", obsolete: false },
  { letter: "า", pronunciation: "aa (long)", speak: "อา", obsolete: false },
  { letter: "ิ", pronunciation: "i (short)", speak: "อิ", obsolete: false },
  { letter: "ี", pronunciation: "ii (long)", speak: "อี", obsolete: false },
  { letter: "ุ", pronunciation: "u (short)", speak: "อุ", obsolete: false },
  { letter: "ู", pronunciation: "uu (long)", speak: "อู", obsolete: false },
  { letter: "เ", pronunciation: "e (long)", speak: "เอ", obsolete: false },
  { letter: "แ", pronunciation: "ae (long)", speak: "แอ", obsolete: false },
  { letter: "โ", pronunciation: "o (long)", speak: "โอ", obsolete: false },
  { letter: "ไ", pronunciation: "ai (short)", speak: "ไอ", obsolete: false },
  { letter: "ใ", pronunciation: "ai (short)", speak: "ใอ", obsolete: false }
];

// Viewport fix for responsive layout
document.addEventListener("DOMContentLoaded", () => {
  const meta = document.createElement('meta');
  meta.name = "viewport";
  meta.content = "width=device-width, initial-scale=1.0";
  document.head.appendChild(meta);
});

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
  const card = deck[currentIndex];
  document.getElementById("pronunciation").textContent = card.pronunciation;
  speakCurrentCard();
}

function speak(text) {
  if ('speechSynthesis' in window) {
    const utterance = new SpeechSynthesisUtterance(text);
    utterance.lang = 'th-TH';
    window.speechSynthesis.speak(utterance);
  }
}

function speakCurrentCard() {
  const card = deck[currentIndex];
  if (!card || !card.speak) return;

  const utterance = new SpeechSynthesisUtterance(card.speak);

  const voices = window.speechSynthesis.getVoices();
  const thaiVoice = voices.find(v => v.lang === "th-TH");
  if (thaiVoice) utterance.voice = thaiVoice;

  window.speechSynthesis.cancel();
  window.speechSynthesis.speak(utterance);
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
