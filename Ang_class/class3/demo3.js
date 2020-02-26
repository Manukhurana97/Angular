function addNumber(a, b) {
    console.log(this.a + this.b);
}
var output = function (name) {
    console.log("Hello");
};
var output2 = function () { return console.log("Hello 2"); };
var sum = function () { return 10 + 20; };
console.log(sum);
