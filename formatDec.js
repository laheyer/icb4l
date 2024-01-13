//formatDec.js
//David N. Blauch  Version 1.0  Copyright 2000
//
//returns a formated string for a number
//x is the numeric value
//nL total length of the string
//nD number of decimal places
function formatDec(x, nL, nD) 
{
     var s = "";

     //round upwards
     x += Math.exp(-nD*Math.LN10)/2.0;

     //work with a positive number
     if (x < 0) {
        s = "-";
        x = -x;
     }

     //get the digits to the left of the decimal point
     s += String(Math.floor(x))+".";

     //isolate the fraction
     var b = x-Math.floor(x);

     for (var i=0; i<nD; i++) {
        b *= 10;
        s += String(Math.floor(b));
        b -= Math.floor(b);
     }

     while (nL > s.length) s = " "+s;

     return s;
  }
