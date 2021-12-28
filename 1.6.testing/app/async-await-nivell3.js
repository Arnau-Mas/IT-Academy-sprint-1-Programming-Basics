const getEmploye = (id, array) =>{
    return new Promise((resolve,reject)=>{
            let foundEmploye = array.find(employe => employe.id == id);
            if(foundEmploye){
                resolve(foundEmploye);
            }else{
                reject("Employe not found");
            }
    })
}

 const getSalary = (employeObject, array)=>{
     return new Promise((resolve, reject) => {
        let idEmploye = employeObject.id;
        let salaryObject = array.find(salary => salary.id == idEmploye);
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

module.exports = {getEmploye, getSalary, printEmployeData, isNumber, callIsNumber}