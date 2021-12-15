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

const getEmploye = (id) =>{
    return new Promise((resolve,reject)=>{
            let foundEmploye = employees.find(employe => employe.id == id);
            if(foundEmploye){
                resolve(foundEmploye);
            }else{
                reject("Employe not found");
            }
    })
}

 const getSalary = (employeObject)=>{
     return new Promise((resolve, reject) => {
        let idEmploye = employeObject.id;
        let salaryObject = salaries.find(salary => salary.id == idEmploye);
        let employeSalary = salaryObject.salary;
        if(employeSalary){
            resolve(employeSalary);
        }else{
            reject("No s'ha trobat el salari");
        }
     })
 } 

 const printEmployeData = async (employeId) =>{
    let employe = await getEmploye(employeId);
    let salary = await getSalary(employe);
    return {name: employe.name, salary: salary};
 }

 const isNumber = (number) =>{
    return new Promise((resolve, reject) => {
            if(!isNaN(number)){
                setTimeout(()=>{
                    resolve(`El número introduit és ${number}`);
                },2000) 
            }else{
                reject(`Això no és un número`);
            }  
    })
}

const callIsNumber = async (number) =>{
    try{
        let result = await isNumber(number);
        return result;
    }catch(error){
        throw error;
    }
}

/* async function a (){
    console.log(await callIsNumber("a"));
}

a() */

 exports.employees = employees;
 exports.salaries = salaries;
 exports.getEmploye = getEmploye;
 exports.getSalary = getSalary;
 exports.printEmployeData = printEmployeData;
 exports.isNumber = isNumber;
 exports.callIsNumber = callIsNumber;