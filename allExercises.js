//********* ENTREGA 1.1 : FUNCTIONS & TEMPLATE LITERALS *********

    //NIVELL 1 exercici 1
    function printName(name){
        console.log(name);
    }
    
    printName("Arnau");
    
    //NIVELL 2 exercici 1
    let userName = "Arnau";
    let userSecondName = "Mas";
    
    console.log(`El nom de l'usuari és ${userName} i el cognom de l'usuari és ${userSecondName}`)
    
    //NIVELL 2 exercici 2
    function returnValor(){
        return "Hola";
    }
    console.log(`No sé si el que vols és que et retorni això: ${returnValor()}`); 

    //NIVELL 3 exercici 1
    let arrayFunctions = []; 

    function printNumbers(numMin, numMax){
         if(numMin<numMax){
             for(i=numMin; i<=numMax; i++){
                 console.log(i);
              }
          }else{
           console.log("The first number have to be lower than the second number.");
          }
      }

    //Bucle for per afegir la funció dins l'array
    for(i=0; i<10; i++){
           arrayFunctions[i] = printNumbers;
    }

     function invokeFunctions(array){
      for(j=0; j<array.length; j++){
             let extractedFunction = array[j];
              console.log(`VOLTA NÚMERO ${j+1}`)
             extractedFunction(0,9);
          }
     }

    invokeFunctions(arrayFunctions);

    //NIVELL 3 exercici 2
    let userName = "Arnau";
     (function(word){
     console.log(word);
      })(userName);
    
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

//********* ENTREGA 1.3 : PROMISES & CALLBACKS *********
        
    //NIVELL 1 exercici 1
    function promiseTest(){
        return new Promise(function(resolve,reject){
            setTimeout(()=>{
                let project = "x";
                let randomNumber = Math.random();
                if(randomNumber<0.5){
                    resolve("S'ha resolt la promesa");
                }else{
                    reject("No s'ha resolt la promesa");
                }
            }, 1500)
    
        })
    
    
    promiseTest()
        .then((message)=> console.log(message))
        .catch((error) => console.log(error))
        .finally(() => console.log("promesa finalitzada"));

    //NIVELL 1 exercici 2
    const isOdd = (number, cb) => {
        let message;
    
        if(isNaN(number)){
            message = `El paràmetre introduit no és un número`;
        }else if( number%2==0){
            message = `El número ${number} és parell`;
        }else{
            message = `El número ${number} és imparell`;
        }
        cb(message);
    }
    
    function printMessage(message){
        console.log(message);
    }
    
    isOdd(Math.floor(Math.random()*10), printMessage);

    //NIVELL 2 exercici 1
    let employees = [{
        id: 1,
        name: 'Linux Torvalds'
    }, {
        id: 2,
        name: 'Bill Gates'
    },{
        id: 3,
        name: 'Jeff Bezos'
    }];
     
    let salaries = [{
        id: 1,
        salary: 4000
    }, {
        id: 2,
        salary: 1000
    }, {
        id: 3,
        salary: 2000
    }];
    
    let getEmployee = (id, objectsArray) => {
        return new Promise(function(resolve,reject){
            setTimeout(()=>{
                let idFound = findObject(id, objectsArray);
                if(idFound !=-1){
                    resolve(objectsArray[idFound]);
                }else{
                    reject("No s'ha trobat coincidència");
                }
            },1500)
            
        })
    }
    
    function findObject(id, objectsArray){
        let idFound = -1;
        let i = 0;
        while(i<objectsArray.length && idFound==-1){
            if(objectsArray[i].id==id){
                idFound = i;
            }else{
                i++;
            }
        }
        return idFound;
    }
    
    getEmployee(Math.floor(Math.random()*6), employees)
        .then((object) => console.log(object))
        .catch((error) => console.log(error))
        .finally( ()=> console.log("finalized promise"))

    //NIVELL 2 exercici 2
    //NIVELL 2 exercici 3
    //NIVELL 3 exercici 1

        