$(document).ready(function(){

  function checkValidTime(time) {
    var hours = Number(time.match(/^(\d+)/)[1]),
        minutes = Number(time.match(/:(\d+)/)[1]),
        AMPM = time.match(/(\D\D)$/)[1],
        sHours, sMinutesl;

    AMPM = AMPM.toLowerCase();
    if(AMPM == "pm" && hours<12) hours = hours+12;
    if(AMPM == "am" && hours==12) hours = hours-12;
    sHours = hours.toString();
    sMinutes = minutes.toString();
    if(hours<10) sHours = "0" + sHours;
    if(minutes<10) sMinutes = "0" + sMinutes;
    return(sHours + ":" + sMinutes);  
  }

  $('input.timepicker').timepicker({ 
  	change: function showTime() {
			console.log(checkValidTime($(this).val()));
		}
  });
});
