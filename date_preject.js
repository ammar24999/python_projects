class CountdownTimer {
    targetDate;
    intervalId;
    constructor(targetDate) {
        this.targetDate = targetDate;
        this.intervalId = null;
    }
    start() {
        if (this.intervalId) {
            console.log("Countdown is already running.");
            return;
        }
        this.intervalId = setInterval(() => {
            const currentDate = new Date();
            const timeDifference = this.targetDate.getTime() - currentDate.getTime();
            if (timeDifference <= 0) {
                clearInterval(this.intervalId);
                console.log("Countdown has ended!");
            }
            else {
                const seconds = Math.floor(timeDifference / 1000);
                const minutes = Math.floor(seconds / 60);
                const hours = Math.floor(minutes / 60);
                const days = Math.floor(hours / 24);
                const remainingHours = hours % 24;
                const remainingMinutes = minutes % 60;
                const remainingSeconds = seconds % 60;
                console.log(`Time remaining: ${days}d ${remainingHours}h ${remainingMinutes}m ${remainingSeconds}s`);
            }
        }, 1000);
    }
    stop() {
        if (this.intervalId) {
            clearInterval(this.intervalId);
            this.intervalId = null;
            console.log("Countdown stopped.");
        }
        else {
            console.log("Countdown is not running.");
        }
    }
}
// Set the target date and time for the countdown
const targetDate = new Date("2023-12-31T23:59:59");
const timer = new CountdownTimer(targetDate);
// Start the countdown
timer.start();
//Uncomment the following line to stop the countdown manually after a few seconds
setTimeout(() => timer.stop(), 5000);
export {};
