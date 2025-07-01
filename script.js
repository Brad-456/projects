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

// FULL vowel list, including all you sent, grouped accordingly
const vowels = [
  // Group 1
  { letter: "ะ", pronunciation: "a (short)", speak: "อะ", group: "group1", obsolete: false },
  { letter: "า", pronunciation: "aa (long)", speak: "อา", group: "group1", obsolete: false },
  { letter: "ิ", pronunciation: "i (short)", speak: "อิ", group: "group1", obsolete: false },
  { letter: "ี", pronunciation: "ii (long)", speak: "อี", group: "group1", obsolete: false },
  { letter: "ึ", pronunciation: "ue (short)", speak: "อึ", group: "group1", obsolete: false },
  { letter: "ื", pronunciation: "uue (long)", speak: "อือ", group: "group1", obsolete: false },
  { letter: "ุ", pronunciation: "u (short)", speak: "อุ", group: "group1", obsolete: false },
  { letter: "ู", pronunciation: "uu (long)", speak: "อู", group: "group1", obsolete: false },
  { letter: "เะ", pronunciation: "e (short)", speak: "เอะ", group: "group1", obsolete: false },
  { letter: "เ", pronunciation: "ee (long)", speak: "เอ", group: "group1", obsolete: false },
  { letter: "แะ", pronunciation: "ae (short)", speak: "แอะ", group: "group1", obsolete: false },
  { letter: "แ", pronunciation: "aae (long)", speak: "แอ", group: "group1", obsolete: false },
  { letter: "โะ", pronunciation: "o (short)", speak: "โอะ", group: "group1", obsolete: false },
  { letter: "โ", pronunciation: "oo (long)", speak: "โอ", group: "group1", obsolete: false },
  { letter: "เอาะ", pronunciation: "aw (short)", speak: "เอาะ", group: "group1", obsolete: false },
  { letter: "ออ", pronunciation: "aaw (long)", speak: "ออ", group: "group1", obsolete: false },
  { letter: "เออะ", pronunciation: "ur (short)", speak: "เออะ", group: "group1", obsolete: false },
  { letter: "เออ", pronunciation: "uur (long)", speak: "เออ", group: "group1", obsolete: false },

  // Group 2
  { letter: "เอียะ", pronunciation: "ia (short)", speak: "เอียะ", group: "group2", obsolete: false },
  { letter: "เอีย", pronunciation: "iaa (long)", speak: "เอีย", group: "group2", obsolete: false },
  { letter: "เอือะ", pronunciation: "uea (short)", speak: "เอือะ", group: "group2", obsolete: false },
  { letter: "เอือ", pronunciation: "uuaa (long)", speak: "เอือ", group: "group2", obsolete: false },
  { letter: "อัวะ", pronunciation: "ua (short)", speak: "อัวะ", group: "group2", obsolete: false },
  { letter: "อัว", pronunciation: "uaa (long)", speak: "อัว", group: "group2", obsolete: false },
  { letter: "อำ", pronunciation: "am (short)", speak: "อำ", group: "group2", obsolete: false },
  { letter: "ไอ", pronunciation: "ai (short)", speak: "ไอ", group: "group2", obsolete: false },
  { letter: "ใอ", pronunciation: "ai (short)", speak: "ใอ", group: "group2", obsolete: false },

  // Group 3
  { letter: "ไม้ม่วน", pronunciation: "ai (long)", speak: "ไม้ม่วน", group: "group3", obsolete: false },
  { letter: "เอา", pronunciation: "ao", speak: "เอา", group: "group3", obsolete: false },
  { letter: "ฤ", pronunciation: "rue (short)", speak: "ฤ", group: "group3", obsolete: false },
  { letter: "ฤๅ", pronunciation: "ruue (long)", speak: "ฤๅ", group: "group3", obsolete: false },
  { letter: "ฦ", pronunciation: "lue (short)", speak: "ฦ", group: "group3", obsolete: false },
  { letter: "ฦๅ", pronunciation: "luue (long)", speak: "ฦๅ", group: "group3", obsolete: false }
];

// ---------- CONSONANT GROUPS ----------

const consonantGroups = {
  group1: ["ก", "ข", "ฃ", "ค", "ฅ", "ฆ", "ง"], // Velars + Nasal ง
  group2: ["จ", "ฉ", "ช", "ซ", "ฌ", "ญ"],     // Palatals + Nasal ญ
  group3: ["ฎ", "ฏ", "ฐ", "ฑ", "ฒ", "ด", "ต", "ถ", "ท", "ธ", "ณ", "น"], // Dentals
  group4: ["บ", "ป", "ผ", "ฝ", "พ", "ฟ", "ภ"], // Labials
  group5: ["ม", "ย", "ร", "ล", "ว", "ศ", "ษ", "ส", "ห", "ฬ", "อ", "ฮ"]  // Misc: liquids, sibilants, glottals
};

// ---------- VOWEL GROUPS ----------

const vowelGroups = {
  group1: ["ะ", "า", "ิ", "ี", "ึ", "ื", "ุ", "ู", "เะ", "เ", "แะ", "แ", "โะ", "โ", "เอาะ", "ออ", "เออะ", "เออ"],
  group2: ["เอียะ", "เอีย", "เอือะ", "เอือ", "อัวะ", "อัว", "อำ", "ไอ", "ใอ"],
  group3: ["ไม้ม่วน", "เอา", "ฤ", "ฤๅ", "ฦ", "ฦๅ"]
};

// ---------- STATE & VARIABLES ----------

let allCards = [];
let deck = [];
let currentIndex = 0;
let correctCount = 0;
let wrongCount = 0;
let isRevealed = false;
let startTime = null;
let timerInterval = null;

// Undo stack to store previous actions for undo functionality
let actionHistory = [];

// ---------- STARTUP ----------

function startApp() {
  const useConsonants = document.getElementById("chkConsonants").checked;
  const useVowels = document.getElementById("chkVowels").checked;
  const useObsolete = document.getElementById("chkObsolete").checked;

  let selected = [];

  // --- Consonants selection ---
  const selectedConsonantGroups = Array.from(
    document.querySelectorAll(".group-checkbox:checked")
  ).map(input => input.value);

  let selectedConsonantLetters = new Set();

  // If any consonant groups are checked
  if (selectedConsonantGroups.length > 0) {
    selectedConsonantGroups.forEach(group => {
      consonantGroups[group].forEach(letter => selectedConsonantLetters.add(letter));
    });
  }

  // If main checkbox is checked but no groups selected, use all consonants
  if (useConsonants && selectedConsonantGroups.length === 0) {
    consonants.forEach(c => {
      if (useObsolete || !c.obsolete) selectedConsonantLetters.add(c.letter);
    });
  }

  const filteredConsonants = consonants.filter(c => {
    const includeObsolete = useObsolete || !c.obsolete;
    return selectedConsonantLetters.has(c.letter) && includeObsolete;
  });

  selected = selected.concat(filteredConsonants);

  // --- Vowels selection ---
  const selectedVowelGroups = Array.from(
    document.querySelectorAll(".vowel-group-checkbox:checked")
  ).map(input => input.value);

  let selectedVowelLetters = new Set();

  // If any vowel groups are checked
  if (selectedVowelGroups.length > 0) {
    selectedVowelGroups.forEach(group => {
      vowelGroups[group].forEach(letter => selectedVowelLetters.add(letter));
    });
  }

  // If main checkbox is checked but no groups selected, use all vowels
  if (useVowels && selectedVowelGroups.length === 0) {
    vowels.forEach(v => {
      if (!v.obsolete) selectedVowelLetters.add(v.letter);
    });
  }

  const filteredVowels = vowels.filter(v => selectedVowelLetters.has(v.letter));
  selected = selected.concat(filteredVowels);

  // --- Handle obsolete-only mode ---
  if (useObsolete && !useConsonants && !useVowels &&
      selectedConsonantGroups.length === 0 && selectedVowelGroups.length === 0) {
    const onlyObsoleteConsonants = consonants.filter(c => c.obsolete);
    selected = selected.concat(onlyObsoleteConsonants);
  }

  // ✅ Final validation: allow if any group is selected
  if (selected.length === 0) {
    const anyConsonantGroupsSelected = selectedConsonantGroups.length > 0;
    const anyVowelGroupsSelected = selectedVowelGroups.length > 0;

    if (!anyConsonantGroupsSelected && !anyVowelGroupsSelected) {
      alert("Please select at least one group.");
      return;
    }
  }

  allCards = selected.map(card => ({ ...card }));
  deck = shuffleArray([...allCards]);
  correctCount = 0;
  wrongCount = 0;
  isRevealed = false;
  actionHistory = [];

  document.getElementById("menu").style.display = "none";
  document.getElementById("app").style.display = "block";

  updateScore();
  showCard();

  startTime = Date.now();
  timerInterval = setInterval(updateTimerDisplay, 1000); // update every second
}


// ---------- FLASHCARD LOGIC ----------

function showCard() {
  if (deck.length === 0) {
    document.getElementById("letter").textContent = "🎉";
    document.getElementById("pronunciation").textContent = "All correct! Well done.";
    document.querySelector(".controls").style.display = "none";

    document.getElementById("revealBtn").style.display = "none";
    document.getElementById("speakBtn").style.display = "none";

    clearInterval(timerInterval);

    const elapsedMs = Date.now() - startTime;
    const minutes = Math.floor(elapsedMs / 60000);
    const seconds = Math.floor((elapsedMs % 60000) / 1000);
    document.getElementById("timer").textContent = `Time: ${minutes}:${seconds.toString().padStart(2, '0')}`;

    return;
  }

  document.getElementById("revealBtn").style.display = "inline-block";
  document.getElementById("speakBtn").style.display = "inline-block";

  // Do NOT reset currentIndex here, you want to keep it for next cards:
  // currentIndex = 0;  <-- Remove this line if you have separate logic to advance currentIndex

  document.getElementById("letter").textContent = deck[currentIndex].letter;
  document.getElementById("pronunciation").textContent = "?";
  document.querySelector(".controls").style.display = "flex";

  // Hide wrong and correct buttons when showing new card
  document.getElementById('wrongBtn').style.display = 'none';
  document.getElementById('correctBtn').style.display = 'none';

  isRevealed = false;
}

function reveal() {
  if (!deck[currentIndex]) return;

  // Show the actual pronunciation
  document.getElementById("pronunciation").textContent = deck[currentIndex].pronunciation || "?";

  // Toggle buttons:
  document.getElementById('revealBtn').style.display = 'none';
  document.getElementById('wrongBtn').style.display = 'inline-block';
  document.getElementById('correctBtn').style.display = 'inline-block';

  isRevealed = true;
}

function markCorrect() {
  // Mark correct logic
  nextCard();
  resetButtons();
}

function markWrong() {
  // Mark wrong logic
  nextCard();
  resetButtons();
}

function resetButtons() {
  // Hide wrong/correct buttons, show reveal again
  document.getElementById('revealBtn').style.display = 'inline-block';
  document.getElementById('wrongBtn').style.display = 'none';
  document.getElementById('correctBtn').style.display = 'none';
}

function nextCard() {
  // Your existing logic to move to next card goes here
}

// Unlock speech synthesis on first user interaction (silent utterance)
function unlockSpeechSynthesis() {
  if (!window.speechSynthesis) return;
  const utterance = new SpeechSynthesisUtterance("");
  utterance.volume = 0;
  window.speechSynthesis.speak(utterance);
}

function speakCurrentCard() {
  if (!window.speechSynthesis) return;

  // Unlock speech synthesis just before speaking (in case not done)
  unlockSpeechSynthesis();

  const speakBtn = document.getElementById('speakBtn');

  // Cancel ongoing speech
  window.speechSynthesis.cancel();

  const utterance = new SpeechSynthesisUtterance(deck[currentIndex].speak || deck[currentIndex].letter);
  utterance.lang = "th-TH";

  // Disable button immediately on click
  speakBtn.disabled = true;

  utterance.onend = () => {
    // Re-enable button when speech ends
    speakBtn.disabled = false;
  };

  utterance.onerror = () => {
    // Re-enable button on error as well
    speakBtn.disabled = false;
  };

  window.speechSynthesis.speak(utterance);
}
function markCorrect() {
  actionHistory.push({
    type: "correct",
    card: deck[currentIndex],
    index: currentIndex
  });

  deck.splice(currentIndex, 1);
  correctCount++;
  updateScore();
  showCard();
}

function markWrong() {
  const wrongCard = deck.splice(currentIndex, 1)[0];

  actionHistory.push({
    type: "wrong",
    card: wrongCard,
    index: currentIndex
  });

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
  clearInterval(timerInterval);
  document.getElementById("timer").textContent = "0:00";
}

// ---------- UNDO FUNCTIONALITY ----------

function undoLastAction() {
  if (actionHistory.length === 0) return;

  const lastAction = actionHistory.pop();

  if (lastAction.type === "correct") {
    deck.splice(lastAction.index, 0, lastAction.card);
    correctCount = Math.max(0, correctCount - 1);
  } else if (lastAction.type === "wrong") {
    const currentPos = deck.findIndex(c => c.letter === lastAction.card.letter);
    if (currentPos !== -1) {
            deck.splice(currentPos, 1);
    }
    wrongCount = Math.max(0, wrongCount - 1);
    deck.splice(lastAction.index, 0, lastAction.card);
  }

  updateScore();
  showCard();
}

// ---------- HELPER FUNCTIONS ----------

function shuffleArray(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
}

// ---------- CHECKBOX SYNC LOGIC ----------

// Consonants master checkbox controls subgroups
document.getElementById("chkConsonants").addEventListener("change", e => {
  const checked = e.target.checked;
  document.querySelectorAll(".group-checkbox").forEach(cb => {
    cb.checked = checked;
  });
});

// If any consonant subgroup checkbox changes, update master checkbox
document.querySelectorAll(".group-checkbox").forEach(cb => {
  cb.addEventListener("change", () => {
    const allChecked = Array.from(document.querySelectorAll(".group-checkbox")).every(cb => cb.checked);
    document.getElementById("chkConsonants").checked = allChecked;
  });
});

// Vowels master checkbox controls vowel subgroups
document.getElementById("chkVowels").addEventListener("change", e => {
  const checked = e.target.checked;
  document.querySelectorAll(".vowel-group-checkbox").forEach(cb => {
    cb.checked = checked;
  });
});

// If any vowel subgroup checkbox changes, update master checkbox
document.querySelectorAll(".vowel-group-checkbox").forEach(cb => {
  cb.addEventListener("change", () => {
    const allChecked = Array.from(document.querySelectorAll(".vowel-group-checkbox")).every(cb => cb.checked);
    document.getElementById("chkVowels").checked = allChecked;
  });
});

window.addEventListener('DOMContentLoaded', () => {
  // Tick main checkboxes
  document.getElementById('chkConsonants').checked = true;
  document.getElementById('chkVowels').checked = true;
  document.getElementById('chkObsolete').checked = true;

  // Tick all consonant groups
  document.querySelectorAll('.group-checkbox').forEach(cb => cb.checked = true);

  // Tick all vowel groups
  document.querySelectorAll('.vowel-group-checkbox').forEach(cb => cb.checked = true);
});

function updateTimerDisplay() {
  if (!startTime) return;
  const elapsedMs = Date.now() - startTime;
  const minutes = Math.floor(elapsedMs / 60000);
  const seconds = Math.floor((elapsedMs % 60000) / 1000);
  document.getElementById("timer").textContent = `${minutes}:${seconds.toString().padStart(2, '0')}`;
}

// Unlock speech on first touchstart (iPhone needs this)
window.addEventListener('touchstart', () => {
  unlockSpeechSynthesis();
}, { once: true });