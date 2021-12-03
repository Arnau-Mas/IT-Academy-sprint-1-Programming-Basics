    //Nivell 1 Exercici 3
    const fs = require("fs");
    
    function showFile(){
        try{
            const data = fs.readFileSync("file.txt", "utf8");
            console.log("Nivell 1 Exercici 3", data);
        }catch(err){
            console.log(err);
        }
    }

    showFile();