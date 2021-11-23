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