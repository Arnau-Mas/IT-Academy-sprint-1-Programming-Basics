
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
    