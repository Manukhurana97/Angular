class Rectange{
    private length: Number;
    private height: Number;

    constructor(l, h){
        this.length = l;
        this.height = h;
    }

    getArea(): Number{
        let area = Number(this.length) * Number(this.height);
        return area;
    }
    
    getParameter(): any{
        return 2 * (Number(this.length) + Number(this.height))
    }
}

var obj = new Rectange(10, 20);
//obj.height = 10;
//obj.length = 20;

var area = obj.getArea();

console.log(area);


