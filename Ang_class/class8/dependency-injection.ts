class Engine{

    constructor(type){

    }
}

class Tires{
    constructor(newparameter){}
}

engine = new Engine("")
tires = new Tires()

car = new Car(engine, tires)

class Car{

    public engine;
    public tires;

    constructor(engine, tires){
        this.engine =engine;
        this.tires = tires;
    }

}

