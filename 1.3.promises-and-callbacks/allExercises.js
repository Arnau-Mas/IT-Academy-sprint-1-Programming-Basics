//********* ENTREGA 1.3 : PROMISES & CALLBACKS *********
        
    //NIVELL 1 exercici 1
    function promiseTest(){
        return new Promise(function(resolve,reject){
            setTimeout(()=>{
                let randomNumber = Math.random();
                if(randomNumber<0.5){
                    resolve("Nivell 1 exercici 1: S'ha resolt la promesa");
                }else{
                    reject("Nivell 1 exercici 1: No s'ha resolt la promesa");
                }
            }, 1500)
    
        })
    }
    
    promiseTest()
        .then((message)=> console.log(message))
        .catch((error) => console.log(error))
        .finally(() => console.log("Nivell 1 exercici 1: promesa finalitzada"));

    //NIVELL 1 exercici 2
    const isOdd = (number, cb) => {
        let message;
    
        if(isNaN(number)){
            message = `Nivell 1 exercici 2: El paràmetre introduit no és un número`;
        }else if( number%2==0){
            message = `Nivell 1 exercici 2: El número ${number} és parell`;
        }else{
            message = `Nivell 1 exercici 2: El número ${number} és imparell`;
        }
        cb(message);
    }
    
    function printMessage(message){
        console.log(message);
    }
    
    isOdd(1, printMessage);

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
    
    getEmployee(1, employees)
        .then((object) => console.log(object))
        .catch((error) => console.log(`Nivell 2 exercici 1: ${error}`))
        .finally( ()=> console.log("Nivell 2 exercici 1: finalized promise"))

    //NIVELL 2 exercici 2

    let getSalary = (employeObject) => {
        return new Promise((resolve,reject)=>{
            setTimeout(()=>{
                let idEmployee = employeObject.id;
                let salary = salaries.find(salary => salary.id == idEmployee);
                if(salary){
                    resolve(salary.salary);
                }else{
                    reject("No s'ha trobat el salari de l'empleat");
                }
            }, 2000)
        })  
    }


    //NIVELL 2 exercici 3
    getEmployee(1, employees)
    .then(employe => getSalary(employe)
        .then((salary) => console.log(`Nivell 2 exercici 3: El empleado ${employe.name} tiene un sueldo de ${salary}`)))

    //NIVELL 3 exercici 1
    getEmployee(3, employees)
    .then(employe => getSalary(employe)
        .then((salary) => console.log(`El empleado ${employe.name} tiene un sueldo de ${salary}`)))
    .catch((error)=> console.log(`Nivell 3 exercici 1: ${error}`))