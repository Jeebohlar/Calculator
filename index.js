function updateTime() {
  const now = new Date();
  const hours = now.getHours();
  const minutes = now.getMinutes();
  const seconds = now.getSeconds();

  // Format the time as HH:MM:SS
  const formattedTime = `${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;

  // Update the content of the "solar" div
  document.getElementById('solar').innerText = formattedTime;
}

// Call updateTime initially
updateTime();

// Update time every second (1000 milliseconds)
setInterval(updateTime, 1000);


const buttons = document.querySelectorAll('#buttons button');

    // Add event listeners for arrow keys
    document.addEventListener('keydown', function (event) {
      const activeElement = document.activeElement;
      const currentIndex = parseInt(activeElement.getAttribute('data-index'));

      if (event.key === 'ArrowLeft') {
        focusButton(currentIndex - 1);
      } else if (event.key === 'ArrowRight') {
        focusButton(currentIndex + 1);
      } else if (event.key === 'ArrowUp') {
        focusButton(currentIndex - 5);
      } else if (event.key === 'ArrowDown') {
        focusButton(currentIndex + 5);
      }
    });

    function focusButton(index) {
      const newButton = buttons[index];
      if (newButton) {
        activeElement.classList.remove('focused');
        newButton.focus();
        newButton.classList.add('focused');
      }
    }