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
}

promiseTest()
    .then((message)=> console.log(message))
    .catch((error) => console.log(error))
    .finally(() => console.log("promesa finalitzada"));