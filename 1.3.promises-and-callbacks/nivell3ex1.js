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
            let employe = employeArray.find(employe => employe.id == id);
            if(employe){
                resolve(employe);
            }else{
                reject("No s'ha trobat coincidència");
            }
    })
        },1500)
        
}

let getSalary = (employeObject) => {
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            let idEmployee = employeObject.id;
            let salary = salaries.find(salary => salary.id == idEmployee);
            if(salary){
                resolve(salary.salary);
            }else{
                reject("No s'ha trobat el salari de l'empleat");
            }
        }, 2000)
    })  
}

getEmployee(Math.floor(Math.random()*6), employees)
    .then(employe => getSalary(employe)
    .then((salary) => console.log(`El empleado ${employe.name} tiene un sueldo de ${salary}`)))
    .catch((error)=> console.log(error))