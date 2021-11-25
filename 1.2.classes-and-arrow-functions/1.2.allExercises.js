//********* ENTREGA 1.2 : CLASSES & ARROW FUNCTIONS *********

    //NIVELL 1 exercici 1
    ((num1,num2)=> console.log(num1+num2))(4,6);

    //NIVELL 2 exercici 1
    let myArrowFunction = (parameter)=>{
         let exampleObject = {
          data : 4,
     }
     return exampleObject;
      };
    
    console.log(myArrowFunction("prova"));

    //NIVELL 2 exercici 2
    class Persona {
        constructor(nom){
            this.nom = nom;
        }
        
        dirNom(){
            console.log(this.nom);
      }
      }

    let persona1 = new Persona("Arnau");
    persona1.dirNom();
        
    //NIVELL 3 exercici 1
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