    //Nivell 1 Exercici 2
    const fs = require("fs");
    
    const phrase = `(Frase escrita el dia i hora ${new Date()}`;
    function writeOnFile(){
        try{
            fs.writeFileSync('file.txt', phrase);
            console.log("N1 exercici 2: Frase escrita al fitxer!");
        }catch(err){
            console.error(err);
        }
    }

    writeOnFile();