class Building {
    constructor(kindOf, name, floors, meters2){
        if(new.target === Building){
            throw new TypeError("Cannot construct Building instances directly");
        }
        this.kindOf = kindOf;
        this.name = name;
        this.floors = floors;
        this.meters2 = meters2;
    }

    instanceTest(){
        console.log("Has aconseguit fer una instància\n");
    }
}

function Hospital(name, floors, meters2){
    let hospital = Object.create(Building.prototype);
    hospital.kindOf = "Hospital";
    hospital.name = name;
    hospital.floors = floors;
    hospital.meters2 = meters2;
    return hospital;
}

let hospital1 = new Hospital("Sant Joan de Déu", 12, 4500);
let hospital2 = new Hospital("Vall d'Hebrón", 20, 5000)

console.log(hospital1);
hospital1.instanceTest();

console.log(hospital2);
hospital2.instanceTest();
