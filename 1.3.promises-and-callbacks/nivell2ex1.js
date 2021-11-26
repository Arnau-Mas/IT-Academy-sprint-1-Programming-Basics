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

let getEmployee = (id, employeArray) => {
    return new Promise(function(resolve,reject){
        setTimeout(()=>{
            console.log(id)
            let employe = employeArray.find(employe => employe.id == id);
            if(employe){
                resolve(employe);
            }else{
                reject("No s'ha trobat coincidència");
            }
        },1500)
        
    })
}

getEmployee(Math.floor(Math.random()*6), employees)
.then((employe) => console.log(employe))
.catch((error) => console.log(error))
.finally( ()=> console.log("finalized promise"))
