const currentTimeDisplay = document.getElementById("current-time");
const alarmInput = document.getElementById("alarm-time");
const messageDisplay = document.getElementById("message");
const alarmSound = document.getElementById("alarm-sound");

let alarmTime = null;
let alarmTimeout = null;

// Function to update current time
function updateTime() {
    const now = new Date();
    const timeString = now.toLocaleTimeString("en-US", { hour12: false });
    currentTimeDisplay.textContent = timeString;

    // Check if the current time matches the alarm time
    if (timeString === alarmTime) {
        playAlarm();
    }
}

// Set the alarm
function setAlarm() {
    if (!alarmInput.value) {
        messageDisplay.textContent = "Please select a valid time!";
        messageDisplay.style.color = "red";
        return;
    }

    alarmTime = alarmInput.value + ":00";
    messageDisplay.textContent = `Alarm set for ${alarmTime}`;
    messageDisplay.style.color = "green";
}

// Play the alarm sound
function playAlarm() {
    alarmSound.play();
    messageDisplay.textContent = "Wake up! Alarm ringing!";
    messageDisplay.style.color = "red";

    // Clear the alarm to prevent it from ringing again
    clearTimeout(alarmTimeout);
    alarmTime = null;
}

// Update the time every second
setInterval(updateTime, 1000);
