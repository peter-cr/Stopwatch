// Finde die notwendigen Elemente
const minutesDisplay = document.getElementById('minutes');
const secondsDisplay = document.getElementById('seconds');
const millisecondsDisplay = document.getElementById('milliseconds');
const startBtn = document.getElementById('start-btn');
const stopBtn = document.getElementById('stop-btn');
const resetBtn = document.getElementById('reset-btn');

let totalMilliseconds = 0;
let intervalId;

// Funktionen zur Aktualisierung des Timers und zur Anzeige
function updateTime() {
    totalMilliseconds++;
    const minutes = Math.floor(totalMilliseconds / 6000).toString().padStart(2, '0');
    const seconds = Math.floor((totalMilliseconds / 100) % 60).toString().padStart(2, '0');
    const milliseconds = (totalMilliseconds % 100).toString().padStart(2, '0');
    minutesDisplay.innerText = minutes;
    secondsDisplay.innerText = seconds;
    millisecondsDisplay.innerText = milliseconds;
}
  

function startTimer() {
    if (!intervalId) {
    intervalId = setInterval(updateTime, 10);
  }
}

function stopTimer() {
    clearInterval(intervalId);
    intervalId = undefined;
}

function resetTimer() {
    clearInterval(intervalId);
    intervalId = undefined;
    totalMilliseconds = 0;
    minutesDisplay.innerText = '00';
    secondsDisplay.innerText = '00';
    millisecondsDisplay.innerText = '00';
}

// Füge Event-Listener zu den Buttons hinzu
startBtn.addEventListener('click', startTimer);
stopBtn.addEventListener('click', stopTimer);
resetBtn.addEventListener('click', resetTimer);
