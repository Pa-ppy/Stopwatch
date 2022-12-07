var isRunning = false;
var startTime, elapsedTime = 0, currentTime, clockInterval;
var hours, minutes, seconds, remainder;6

function add_leading_zero(number){
    if(number < 10) {
        return "0" + number.toString();
    } else {
        return number.toString();
    }
}
document.getElementById("btnSt").onclick = function(){
	console.log("Start/Stop");
	if (!isRunning) {
		//start clock
		isRunning = true;
		if (elapsedTime == 0) {
			startTime = new Date().getTime();
		} else{
			startTime = new Date().getTime() - elapsedTime;
		}
		clockInterval = window.setInterval(function(argument) {
			currentTime = new Date().getTime();
			elapsedTime = currentTime - startTime;

			hours = Math.floor(elapsedTime / 3600000);
            remainder = elapsedTime - (hours * 3600000);

            minutes = Math.floor(remainder / 60000);
            remainder -= (minutes * 60000);

            seconds = Math.floor(remainder / 1000);
            remainder -= (seconds * 1000);

            formattedTime = add_leading_zero(hours) + ":" + add_leading_zero(minutes) + ":" + add_leading_zero(seconds) + ":" + add_leading_zero(remainder);
			document.getElementById("stopwatch").innerHTML = formattedTime;
		}, 10)
		
	} else{
		//pause the clock
		window.clearInterval(clockInterval);
		isRunning = false;
	}




}
document.getElementById("btnRs").onclick = function(){
	console.log("Reset");
	startTime = new Date().getTime();
	if (!isRunning) {
		elapsedTime = 0;
		document.getElementById("stopwatch").innerHTML = "00:00:00:000";
	}
}