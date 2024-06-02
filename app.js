let viewTimer = document.querySelector('.timer');
let btnStart = document.querySelector('.btn-start');
let btnReset = document.querySelector('.btn-reset');
let btnStop = document.querySelector('.btn-stop');
let hours = 0;
let minutes = 0;
let seconds = 0;
let startTimer;
let timerIsRunning = false;

btnStart.addEventListener('click', () => { 
	if (!timerIsRunning) {
		timerIsRunning = true;
		startTimer = setInterval(() => {
			seconds++;
			if (seconds > 60) {
				seconds = 0;
				minutes++;
			}
			if (minutes > 60) {
				minutes = 0;
				hours++;
			}
			viewTimer.innerText = `${(hours < 10) ? 0 : ''}${hours} : ${(minutes < 10) ? 0 : ''}${minutes} : ${(seconds < 10) ? 0 : ''}${seconds}`
		}, 1000) 
	}	
});

btnStop.addEventListener('click', () => {
  clearInterval(startTimer);
	timerIsRunning = false;
});

btnReset.addEventListener('click', () => {
  clearInterval(startTimer);
	timerIsRunning = false;
	hours = 0;
	minutes = 0;
	seconds = 0;
	viewTimer.innerText = `0${hours} : 0${minutes} : 0${seconds}`;
});