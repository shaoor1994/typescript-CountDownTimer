import { setInterval } from 'timers';

// Set the target date and time
const targetDate = new Date('2023-03-01T00:00:00');

// Update the countdown every second
setInterval(() => {
  // Get the current date and time
  const now = new Date();

  // Calculate the difference in milliseconds
  const diff = targetDate.getTime() - now.getTime();

  // Calculate the remaining time in days, hours, minutes, and seconds
  const days = Math.floor(diff / (1000 * 60 * 60 * 24));
  const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((diff % (1000 * 60)) / 1000);

  // Print the remaining time
  console.log(`${days} days, ${hours} hours, ${minutes} minutes, ${seconds} seconds`);
}, 1000);
