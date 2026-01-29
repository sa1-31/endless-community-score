let totalScore = 0;
const completedTasks = {};

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
}

function updateScore() {
  document.getElementById("scoreValue").innerText = totalScore;
}
function openTab(tabId, button) {
  // bütün section-ları gizlət
  document.querySelectorAll(".section").forEach(sec => {
    sec.classList.add("hidden");
  });

  // bütün menu button-lardan active-i sil
  document.querySelectorAll(".menu-btn").forEach(btn => {
    btn.classList.remove("active");
  });

  // seçilən section-u aç
  document.getElementById(tabId).classList.remove("hidden");

  // seçilən button-u aktiv et
  button.classList.add("active");
}
