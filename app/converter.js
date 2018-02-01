/* 
a RGB to hexadecimal color conversion. It takes three arguments, 
and returns a string that represents the color in its hexadecimal representation.
*/
exports.rgbToHex    = function (red, green, blue) {
    var redHex      = red.toString(16);
    var greenHex    = green.toString(16);
    var blueHex     = blue.toString(16);

    return pad(redHex) + pad(greenHex) + pad(blueHex);
};

//we have padded the the resulting value with a zero prefix if it is only one character long,
// because a valid hexadecimal representation must always contain two characters.
function pad(hex) {
    return (hex.length === 1 ? "0" + hex : hex);
}

//from hexadecimal to RGB representation, we will use the parseInt function with the base 16 to 
//convert parts of the incoming strings into valid decimal RGB values.

exports.hexToRgb = function(hex) {

    var red   = parseInt(hex.substring(0, 2), 16);
    var green = parseInt(hex.substring(2, 4), 16);
    var blue  = parseInt(hex.substring(4, 6), 16);
  
    return [red, green, blue];
  
  };