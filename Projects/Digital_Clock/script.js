let is24HourFormat = true; // Default to 24-hour format

function updateClock() {
  const now = new Date();
  let hours = now.getHours();
  const minutes = String(now.getMinutes()).padStart(2, '0');
  const seconds = String(now.getSeconds()).padStart(2, '0');

  let amPm = ''; // Empty for 24-hour format

  // Convert to 12-hour format if needed
  if (!is24HourFormat) {
    amPm = hours >= 12 ? ' PM' : ' AM';
    hours = hours % 12 || 12; // Convert 0 to 12 for 12-hour format
  }

  const timeString = `${String(hours).padStart(2, '0')}:${minutes}:${seconds}${amPm}`;
  document.getElementById("clock").textContent = timeString;
}

function toggleFormat() {
  is24HourFormat = !is24HourFormat; // Toggle between 24-hour and 12-hour
  const button = document.getElementById("toggle-format");
  button.textContent = is24HourFormat
    ? "Switch to 12-Hour Format"
    : "Switch to 24-Hour Format";
  updateClock(); // Update the clock immediately
}

// Initialize the clock and add event listener
setInterval(updateClock, 1000);
updateClock(); // Call immediately to avoid 1-second delay
document.getElementById("toggle-format").addEventListener("click", toggleFormat);
