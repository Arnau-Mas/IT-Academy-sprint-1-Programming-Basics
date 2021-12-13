//ENTREGA 1.5: NODE UTILS
    
    const fs = require("fs"); //modul per interactuar amb documents


    //Nivell 1 Exercici 1
    const print = () => {
        setInterval(()=>{
            console.log("Hola (Nivell 1 Exercici 1)");
        }, 1000)
    }

    print();

    //Nivell 1 Exercici 2
    function writeOnFile(file, phrase){
        try{
            fs.writeFileSync(file, phrase);
            console.log("N1 exercici 2: Frase escrita al fitxer!");
        }catch(err){
            console.error(err);
        }
    }

    writeOnFile('file.txt', `(Frase escrita el dia i hora ${new Date()}`);

    //Nivell 1 Exercici 3
    function showFile(file){
        try{
            const data = fs.readFileSync(file, "utf8");
            console.log("Nivell 1 Exercici 3", data);
        }catch(err){
            console.log(err);
        }
    }

    showFile("file.txt");
    
    //Nivell 2 exercici 1
    const {pipeline} = require("stream"); 
    const {createGzip} = require("zlib");
    const {createReadStream, createWriteStream} = require("fs");
    const {promisify} = require("util");
    
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
    
    //Nivell 2 exercici 2
    const { spawn } = require('child_process');
    const child = spawn('dir', ['D:\Test'], {shell: true});
    child.stdout.on('data', (data) => {
    console.log(`stdout: ${data}`);
    });
    
    child.stderr.on('data', (data) => {
    console.error(`stderr: ${data}`);
    });
    
    child.on('close', (code) => {
    console.log("child process exited");
    });

    //Nivell 3 exercici 1
    