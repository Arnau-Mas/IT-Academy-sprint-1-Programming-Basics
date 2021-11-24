class Building {
    constructor(kindOf, floors, meters2){
        if(new.target === Building){
            throw new TypeError("Cannot construct Building instances directly");
        }
        this.kindOf = kindOf;
        this.floors = floors;
        this.meters2 = meters2;
    }

    prova(){
        console.log("Has aconseguit fer una instància");
    }
}

function Hospital(floors, meters2){
    let hospital = Object.create(Building.prototype);
    hospital.kindOf = "Hospital";
    hospital.floors = floors;
    hospital.meters2 = meters2;
    return hospital;
}

let hospital = new Hospital(23, 23);
console.log(hospital);
console.log(hospital.prova());
