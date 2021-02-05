class House{
    get Address(){
        return this.address;
    }
    set Address(val){
        this.address = val;
    }
    constructor(options){
        this.city = options.city;
        this.floors = options.floors;
        this.material = options.material;
        this.basement = options.basement;
    }
}
class PrivateHouse extends House{
    constructor(options){
        super(options);
        this.gas = options.gas;
        this.water = options.water;
        this.electr = options.electr;
    }
}
class HighRiseBuilding extends House{
    constructor(options){
        super(options);
        this.flats = options.flats;
        this.lifts = options.lifts;
        this.flatsOnFloor = options.flatsOnFloor;
        this.alarmSystem = options.alarmSystem;
        this.camera = options.camera;
    }
}
const home1 = new PrivateHouse({
    city: "Kyev",
    floors: 2,
    material: "bricks",
    basement: true,
    gas: true,
    water: true,
    electr: false
});
const home2 = new PrivateHouse({
    city: "Kharkiv",
    floors: 1,
    material: "wood boards",
    basement: false,
    gas: false,
    water: true,
    electr: true
});
const building1 = new HighRiseBuilding({
    city: "Kyev",
    floors: 9,
    material: "bricks",
    basement: true,
    flats: 36,
    lifts: 2,
    flatsOnFloor: 4,
    alarmSystem: true,
    camera: true
});
const building2 = new HighRiseBuilding({
    city: "Bachmut",
    floors: 5,
    material: "bricks",
    basement: true,
    flats: 15,
    lifts: 2,
    flatsOnFloor: 3,
    alarmSystem: false,
    camera: false
});
for(key in home1){
    console.log("Key: " + key + " value: " + home1[key]);
}
for(key in home2){
    console.log("Key: " + key + " value: " + home2[key]);
}
for(key in building1){
    console.log("Key: " + key + " value: " + building1[key]);
}
for(key in building2){
    console.log("Key: " + key + " value: " + building2[key]);
}