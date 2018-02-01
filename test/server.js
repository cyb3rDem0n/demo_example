//expose the color converter through a HTTP API
// 1. `describe()` is merely for grouping, which you can nest as deep
// 2. `it()` is a test case
// 3. `before()`, `beforeEach()`, `after()`, `afterEach()` are hooks to run
// before/after first/each it() or describe().

var expect = require("chai").expect;
var request = require("request");

//  these are the functionality we want to test, grouped with describe.
describe("Color Code Converter API", function () {
    //We will store the full path to the resource we want to test in a variable. 

    /* To make a request, we will use the Request package. We need to pass two arguments to 
    it: a URL to visit, and a function to be invoked when the request is completed. We will
    set up our expectations inside those callback functions. 
    */

    describe("RGB to Hex conversion", function () {
        var url = "http://localhost:3000/rgbToHex?red=255&green=255&blue=255";

        it("returns status 200", function () {
            request(url, function (error, response, body) {
                expect(response.statusCode).to.equal(200);
                done();
            });
        });

        it("returns the color in hex", function () {
            request(url, function (error, response, body) {
                expect(body).to.equal("ffffff");
                done();
            });
        });

    });

    describe("Hex to RGB conversion", function () {
        var url = "http://localhost:3000/hexToRgb?hex=00ff00";

        it("returns status 200", function () {
            request(url, function (error, response, body) {
                expect(response.statusCode).to.equal(200);
                done();
            });
        });

        it("returns the color in RGB", function () {
            request(url, function (error, response, body) {
                expect(body).to.equal("[0,255,0]");
                done();
            });
        });

    });

    /*     
    without done(), we didn't give Mocha enough time to wait for the requests to finish. 
    In other words, the code inside the request's callback is never actually executed 
    */

});