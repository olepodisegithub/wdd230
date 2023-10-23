var temperature= 34;
var windspeed= 20;
var windChill= (35.74 + (0.6215 * temperature))-(35.75 * Math.pow(windspeed,0.16)) + (0.4275*temperature*Math.pow(windspeed,0.16));
document.getElementById("windchill").innerHTML= "Wind Chil : " + Math.round(windChill);