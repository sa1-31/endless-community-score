let totalScore = 0;
const completedTasks = {};
const leaderboardEntries = [];

function submitTask(taskId) {
  const input = document.getElementById(`task${taskId}Input`);
  const button = input.nextElementSibling;

  if (!input.value || input.value.length < 4) {
    alert("Please provide a valid value");
    return;
  }

  if (completedTasks[taskId]) return;

  completedTasks[taskId] = true;
  totalScore += 25;

  button.disabled = true;
  button.innerText = "Completed";
  input.disabled = true;

  updateScore();
  updateLeaderboard("Sa1", totalScore);
}

function updateScore() {
  document.getElementById("scoreValue").innerText = totalScore;
}

function calculateScore() {
  const twitter = document.getElementById("twitterInput").value.trim();
  const luffa = document.getElementById("luffaInput").value.trim();
  const eds = document.getElementById("edsInput").value.trim();
  const discord = document.getElementById("discordInput").value.trim();

  let score = 0;
  if (twitter) score += 25;
  if (luffa) score += 25;
  if (eds) score += 25;
  if (discord) score += 25;

  document.getElementById("checkScoreValue").innerText = score;
  updateLeaderboard("Sa1", score);
}

// MENU / TAB LOGIC
function openTab(tabId, button) {
  document.querySelectorAll(".section").forEach(sec => {
    sec.classList.add("hidden");
  });

  document.querySelectorAll(".menu-btn").forEach(btn => {
    btn.classList.remove("active");
  });

  document.getElementById(tabId).classList.remove("hidden");
  button.classList.add("active");
}

// UPDATE LEADERBOARD
function updateLeaderboard(name, score) {
  const leaderboard = document.getElementById("userEntry");
  leaderboard.innerHTML = `${name} · ${score} points`;
}
