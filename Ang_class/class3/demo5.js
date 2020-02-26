var Rectange = /** @class */ (function () {
    function Rectange(l, h) {
        this.length = l;
        this.height = h;
    }
    Rectange.prototype.getArea = function () {
        var area = Number(this.length) * Number(this.height);
        return area;
    };
    Rectange.prototype.getParameter = function (l, h) {
        return 2 * (l + h);
    };
    return Rectange;
}());
var obj = new Rectange(10, 20);
//obj.height = 10;
//obj.length = 20;
var area = obj.getArea();
console.log(area);
