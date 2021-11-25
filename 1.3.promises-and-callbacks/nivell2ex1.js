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