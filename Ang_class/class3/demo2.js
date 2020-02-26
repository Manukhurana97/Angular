// // declare
// let a;
// // intialize
// a = 10;
// // declaration with inituialization
// let b = 20;
// b = "hello";
var a;
var b;
var c;
var d;
var e = [1, "hello", true];
var f = [1, 2, 3];
var firstName = "Mark";
firstName = "Paul";
var lastName = "Watson";
// lastName = "P"
var colorRed = 1;
var colorGreen = 2;
var colorYellow = 3;
var Color;
(function (Color) {
    Color[Color["Red"] = 0] = "Red";
    Color[Color["Green"] = 1] = "Green";
    Color[Color["Yellow"] = 2] = "Yellow";
})(Color || (Color = {}));
console.log(Color.Green);
