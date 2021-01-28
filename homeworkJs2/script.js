let house = {
    floors: 1,
    basement: true,
    repair: true,
    rooms: 3,
    showInfo: function() {
        console.group("House Info");
        console.log(`Floors: ${this.floors}`);
        console.log(`Basement: ${this.basement}`);
        console.log(`Repair: ${this.repair}`);
        console.log(`Rooms: ${this.rooms}`);
        console.groupEnd();
    }
}
let house2 = Object.create(house);
house2.homeAdress = 'Pushkinskaya st, 31';
house2.getHomeAdress = function() {
    console.log(this.homeAdress);
}
house2.showInfo();
house2.getHomeAdress();
let house3 = Object.create(house);
house3.homeAdress = 'Lenina st, 12';
house2.getHomeAdress.bind(house3)();