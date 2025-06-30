// ---------- DATA SETUP ----------

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

// ---------- CONSONANT GROUPS ----------

const consonantGroups = {
  group1: ["ก", "ข", "ค", "ง", "จ", "ช"],
  group2: ["ฌ", "ซ", "ฉ", "ญ", "ฃ", "ฅ"],
  group3: ["ฎ", "ฏ", "ด", "ต", "ถ", "ท"],
  group4: ["บ", "ป", "ผ", "ฝ", "พ", "ฟ", "ภ"],
  group5: ["ม", "ย", "ร", "ล", "ว", "ศ", "ษ", "ส", "ห", "ฮ", "อ", "ฬ"]
};

// ---------- STATE & VARIABLES ----------

let allCards = [];
let deck = [];
let currentIndex = 0;
let correctCount = 0;
let wrongCount = 0;
let isRevealed = false;

// ---------- STARTUP ----------

function startApp() {
  const useConsonants = document.getElementById("chkConsonants").checked;
  const useVowels = document.getElementById("chkVowels").checked;
  const useObsolete = document.getElementById("chkObsolete").checked;
  const groupSelect = document.getElementById("groupSelect");

  let selected = [];

  if (useConsonants) {
  const selectedGroups = Array.from(document.querySelectorAll(".group-checkbox:checked")).map(input => input.value);
  let selectedGroupLetters = new Set();
  selectedGroups.forEach(group => {
    consonantGroups[group].forEach(letter => selectedGroupLetters.add(letter));
  });

  const filteredConsonants = consonants.filter(c => {
    const includeObsolete = useObsolete || !c.obsolete;
    if (selectedGroupLetters.size > 0) {
      return selectedGroupLetters.has(c.letter) && includeObsolete;
    }
    return includeObsolete;
  });

  selected = selected.concat(filteredConsonants);
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
  speakCurrentCard();
  isRevealed = true;
}

function speakCurrentCard() {
  if (!window.speechSynthesis) return;

  window.speechSynthesis.cancel();

  const utterance = new SpeechSynthesisUtterance(deck[currentIndex].speak || deck[currentIndex].letter);
  utterance.lang = "th-TH";
  window.speechSynthesis.speak(utterance);
}

function markCorrect() {
  deck.splice(currentIndex, 1);
  correctCount++;
  updateScore();
  showCard();
}

function markWrong() {
  const wrongCard = deck.splice(currentIndex, 1)[0];
  wrongCount++;
  const randIndex = Math.floor(Math.random() * (deck.length + 1));
  deck.splice(randIndex, 0, wrongCard);
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

// ---------- EVENT LISTENERS ----------

document.addEventListener("keydown", function(event) {
  if (document.getElementById("app").style.display !== "block") return;

  if (event.code === "Space") {
    event.preventDefault();
    if (!isRevealed) {
      reveal();
    } else {
      markCorrect();
    }
  }

  if (event.key.toLowerCase() === "q") {
    markWrong();
  }
});

document.getElementById("chkConsonants").addEventListener("change", function () {
  document.getElementById("groupContainer").style.display = this.checked ? "block" : "none";
});
