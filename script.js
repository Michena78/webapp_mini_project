const startButton = document.getElementById('startButton');
const countdownDisplay = document.getElementById('countdownDisplay');

startButton.addEventListener('click', () => {
  const countdownNumber = parseInt(document.getElementById('countdownNumber').value);

  if (isNaN(countdownNumber) || countdownNumber <= 0) {
    countdownDisplay.textContent = 'Please enter a valid number greater than 0';
    return;
  }

  let currentCount = countdownNumber;
  countdownDisplay.textContent = formatTime(currentCount);

  const countdownInterval = setInterval(() => {
    currentCount--;

    if (currentCount >= 0) {
      countdownDisplay.textContent = formatTime(currentCount);
    } else {
      clearInterval(countdownInterval);
      countdownDisplay.textContent = 'Countdown complete!';
    }
  }, 1000);
});

function formatTime(seconds) {
  const hours = Math.floor(seconds / 3600);
  const minutes = Math.floor((seconds % 3600) / 60);
  const remainingSeconds = seconds % 60;
  
  let formattedTime = '';

  if (hours > 0) {
    formattedTime += `${hours} ชั่วโมง `;
  }

  if (minutes > 0 || hours > 0) {
    formattedTime += `${minutes} นาที `;
  }

  formattedTime += `${remainingSeconds} วินาที`;

  return formattedTime;
}