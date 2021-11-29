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