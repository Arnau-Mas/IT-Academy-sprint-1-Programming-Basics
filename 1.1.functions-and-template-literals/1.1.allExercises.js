//Entrega 1.1 : Funcions & Template Strings
    //Nivell 1 Exercici 1
    function printName(name){
        console.log(name);
    }
    
    printName("Arnau");

    //Nivell 2 Exercici 1
    let userName = "Arnau";
    let userSecondName = "Mas";

    console.log(`El nom de l'usuari és ${userName} i el cognom de l'usuari és ${userSecondName}`);

    //Nivell 2 Exercici 2
    function returnValor(){
        return "Hola";
    }
    
    console.log(`No sé si el que vols és que et retorni això: ${returnValor()}`); 

    //Nivell 3 Exercici 1
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

    //Nivell 3 Exercici 2
    let userName2 = "Arnau";
    let showName = (function(word){
        console.log(word);
    })(userName2);