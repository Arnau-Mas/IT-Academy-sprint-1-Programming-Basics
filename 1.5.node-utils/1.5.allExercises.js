//ENTREGA 1.5: NODE UTILS
    
    const fs = require("fs"); //modul per interactuar amb documents
    //metodes per comprimir documents
    const {pipeline} = require("stream"); 
    const {createGzip} = require("zlib");
    const {createReadStream, createWriteStream} = require("fs");
    const {promisify} = require("util");

    //Nivell 1 Exercici 1
    const print = () => {
        setInterval(()=>{
            console.log("Hola (Nivell 1 Exercici 1)");
        }, 1000)
    }

    print();

    //Nivell 1 Exercici 2
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

    //Nivell 1 Exercici 3
    function showFile(){
        try{
            const data = fs.readFileSync("file.txt", "utf8");
            console.log("Nivell 1 Exercici 3", data);
        }catch(err){
            console.log(err);
        }
    }

    showFile();

    //Nivell 2 exercici 1
    const pipe = promisify(pipeline);
    async function compressFile(input, output){
        try{
            const gzip = createGzip();
            const source = createReadStream(input);
            const destination = createWriteStream(output);
            await pipe(source, gzip, destination);
        }catch(err){
            console.log(err);
        }
    }

    compressFile("file.txt", "input.txt.gz");
    