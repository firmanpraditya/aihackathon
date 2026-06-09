// Tab switching
function switchTab(tabId) {
  document.querySelectorAll('.tab-btn').forEach(btn => btn.classList.remove('active'));
  document.querySelectorAll('.tab-panel').forEach(panel => panel.classList.remove('active'));
  document.querySelector(`.tab-btn[data-tab="${tabId}"]`).classList.add('active');
  document.getElementById(`panel-${tabId}`).classList.add('active');
  window.scrollTo({ top: document.querySelector('.tabs-wrapper').offsetTop - 80, behavior: 'smooth' });
}

// Step accordion
function toggleStep(card) {
  const isOpen = card.classList.contains('open');
  // Close all in same panel
  const panel = card.closest('.tab-panel');
  panel.querySelectorAll('.step-card.open').forEach(c => c.classList.remove('open'));
  if (!isOpen) card.classList.add('open');
}

// Copy prompt
function copyPrompt(btn) {
  const pre = btn.closest('.prompt-box').querySelector('pre');
  navigator.clipboard.writeText(pre.textContent).then(() => {
    btn.textContent = '✓ Tersalin!';
    btn.classList.add('copied');
    setTimeout(() => {
      btn.textContent = 'Salin';
      btn.classList.remove('copied');
    }, 2000);
  });
}

// Scroll progress bar
function updateProgress() {
  const scrollTop = document.documentElement.scrollTop;
  const scrollHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
  const progress = scrollHeight > 0 ? (scrollTop / scrollHeight) * 100 : 0;
  document.getElementById('progress-bar').style.width = progress + '%';
}

window.addEventListener('scroll', updateProgress);

// Init: open first step in each panel
document.addEventListener('DOMContentLoaded', () => {
  document.querySelectorAll('.tab-panel').forEach(panel => {
    const first = panel.querySelector('.step-card');
    if (first) first.classList.add('open');
  });
});
