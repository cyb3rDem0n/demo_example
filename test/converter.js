/* 
1 Mocha gives us the ability to describe the features that we are implementing by giving us a describe function that encapsulates our expectations. 
2 The it function is very similar to the describe function, except that we can only put expectations in the body of the it function.
3 We can now introduce our first expectation. We will use the Chai library and its expect keyword to compare the result of our feature's
implementation and the result we expect to get. Of course, we first need to require the Chai library:
*/

var expect      = require("chai").expect;
var converter   = require("../app/converter");

describe("Color code converter", function () {
    describe("RGB to HEX", function () {

        it("converts basic colors", function () {

            var redHex   = converter.rgbToHex(255, 0, 0);
            var greenHex = converter.rgbToHex(0, 255, 0);
            var blueHex  = converter.rgbToHex(0, 0, 255);
      
            // .to.deep.equal part of the snippet below is called a matcher of Chai lib, and it matches the result of a feature with an expected value. 

            expect(redHex).to.equal("ff0000");
            expect(greenHex).to.equal("00ff00");
            expect(blueHex).to.equal("0000ff");

        });
    });

    describe("HEX to RGB", function () {
        it("convert basic colors", function () {

            var red   = converter.hexToRgb("ff0000");
            var green = converter.hexToRgb("00ff00");
            var blue  = converter.hexToRgb("0000ff");
      
            expect(red).to.deep.equal([255, 0, 0]);
            expect(green).to.deep.equal([0, 255, 0]);
            expect(blue).to.deep.equal([0, 0, 255]);

        });
    });
})