const AsyncAwaitFunctions = require("../app/async-await");

jest.useFakeTimers();

//TESTS getEmploye
describe("tests de la funció getEmploye", ()=>{
    //He fet aquesta primera en promesa per practicar, les demés totes en async await
    test("getEmploye amb id = 3 hauria de retornar l'objecte de Jeff Bezos", ()=>{ 
        return AsyncAwaitFunctions.getEmploye(3)
            .then( data => 
                expect(data).toStrictEqual({
                    id: 3,
                    name: 'Jeff Bezos'
                })
            ) 
    })
    
    test("getEmploye amb id = 2 hauria de retornar l'objecte de Bill Gates", async ()=>{
        const data = await AsyncAwaitFunctions.getEmploye(2)
                expect(data).toStrictEqual({
                    id: 2,
                    name: 'Bill Gates'
                })
    })
    
    test("getEmploye amb id = 4 hauria de retornar 'Employe not found'", async ()=>{
        await expect(AsyncAwaitFunctions.getEmploye(4)).rejects.toEqual("Employe not found")
    }) 
})

//TESTS getSalary
describe("tests de la funció getSalary", () => {  
    test("getSalary de getEmploye(2) haria de ser 1000", async ()=>{
        const employe = await AsyncAwaitFunctions.getEmploye(2)
        const salary = await AsyncAwaitFunctions.getSalary(employe)
        expect(salary).toBe(1000)
    })
    
    test("getSalary de getEmploye(3) haria de ser 2000", async ()=>{
        const employe = await AsyncAwaitFunctions.getEmploye(3)
        const salary = await AsyncAwaitFunctions.getSalary(employe)
        expect(salary).toBe(2000)
    })
    
    test("getSalary de getEmploye(4) haria de ser 'Employe not found", async ()=>{
        try{
            const employe = await AsyncAwaitFunctions.getEmploye(4);
            const salary = await AsyncAwaitFunctions.getSalary(employe);
        }catch(err){
            expect(err).toMatch("Employe not found")
        }   
    })
})

//TESTS printEmployeData
describe("tests de la funció printEmployeData", () => {
    test("printEmployeData de 2 hauria de mostrar Bill Gates, 1000", async ()=>{
        const data = await AsyncAwaitFunctions.printEmployeData(2)
        expect(data).toStrictEqual({
            name:"Bill Gates", 
            salary: 1000})
    }) 
    
    test("printEmployeData de 3 hauria de mostrar Jeff Bezos, 2000", async ()=>{
        const data = await AsyncAwaitFunctions.printEmployeData(3)
        expect(data).toStrictEqual({
            name:"Jeff Bezos", 
            salary: 2000})
    }) 
    
    test("printEmployeData de 4 hauria de donar l'error 'Employe not found'", async ()=>{
        await expect(AsyncAwaitFunctions.printEmployeData(4)).rejects.toEqual("Employe not found")
    })
}) 

//TESTS isNumber
describe("tests de la funció isNumber", () => {
    test("isNumber 4 hauria de mostrar 'El número introduit és 4'", async () => {
        const asyncFunc = AsyncAwaitFunctions.isNumber(4);
        jest.runAllTimers(); //Executem la funció a dalt, per després utilitzar el runAllTimers i fer que es resolgui la promesa.
        const data = await asyncFunc;
        expect(data).toBe("El número introduit és 4");
    })
    
    test("isNumber 5 hauria de mostrar 'El número introduit és 5'", async () => {
        const asyncFunc = AsyncAwaitFunctions.isNumber(5);
        jest.runAllTimers();
        const data = await asyncFunc;
        expect(data).toBe("El número introduit és 5");
    })
    
    test("isNumber 1.5 hauria de mostrar 'El número introduit és 1.5'", async () => {
        const asyncFunc = AsyncAwaitFunctions.isNumber(1.5);
        jest.runAllTimers();
        const data = await asyncFunc;
        expect(data).toBe("El número introduit és 1.5");
    })
    
    test("isNumber 'a' hauria de donar l'error 'Això no és un número'", async () => {
        const asyncFunc = AsyncAwaitFunctions.isNumber("a");
        jest.runAllTimers();
        await expect(asyncFunc).rejects.toMatch("Això no és un número"); 
        //Aqui s'ha de posar l'await i la funció en l'expect, pq si l'emmagatzemes a una variable com en els casos anteriors, et tira l'error abans d'arribar a l'expect.
        //També podria fer try catch aqui  en el test i hagués funcionat
    })
})

//TESTS callIsNumber
describe("tests de la funció callIsNumber", () => {
    test("callIsNumber de 5 hauria de mostrar 'El número introduit és 5'", async () =>{
        const asyncFunc = AsyncAwaitFunctions.callIsNumber(5);
        jest.runAllTimers();
        const data = await asyncFunc;
        expect(data).toBe("El número introduit és 5")
    })
    
    test("callIsNumber de 5 hauria de mostrar 'El número introduit és 1.5'", async () =>{
        const asyncFunc = AsyncAwaitFunctions.callIsNumber(1.5);
        jest.runAllTimers();
        const data = await asyncFunc;
        expect(data).toBe("El número introduit és 1.5")
    })
    
    test("callIsNumber 'a' hauria de mostrar 'Això no és un número'", async () =>{
        const asyncFunc = AsyncAwaitFunctions.callIsNumber("a");
        jest.runAllTimers();
        await expect(asyncFunc).rejects.toMatch("Això no és un número"); //això no em funcionava pq a la funció callIsNumber en el catch, feia return de l'error enlloc de throw error.
    })
})

