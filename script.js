// Real-Time Clock and Date
function updateClockAndDate() {
  const timeElement = document.getElementById('time');
  const dateElement = document.getElementById('date');

  const now = new Date();
  const hours = String(now.getHours()).padStart(2, '0');
  const minutes = String(now.getMinutes()).padStart(2, '0');
  const day = now.toLocaleDateString('lt-LT', { weekday: 'long' });
  const date = now.toLocaleDateString('lt-LT', { year: 'numeric', month: 'long', day: 'numeric' });

  timeElement.textContent = `${hours}:${minutes}`;
  dateElement.textContent = `${day}, ${date}`;
}

// Update clock and date every second
setInterval(updateClockAndDate, 1000);
updateClockAndDate(); // Initialize immediately
