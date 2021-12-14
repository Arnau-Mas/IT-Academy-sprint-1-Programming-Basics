const AsyncAwaitFunctions = require("../app/async-await");

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
        const data = await AsyncAwaitFunctions.isNumber(4);
        expect(data).toBe("El número introduit és 4");
    })
    
    test("isNumber 5 hauria de mostrar 'El número introduit és 5'", async () => {
        const data = await AsyncAwaitFunctions.isNumber(5);
        expect(data).toBe("El número introduit és 5");
    })
    
    test("isNumber 1.5 hauria de mostrar 'El número introduit és 1.5'", async () => {
        const data = await AsyncAwaitFunctions.isNumber(1.5);
        expect(data).toBe("El número introduit és 1.5");
    })
    
    test("isNumber 'a' hauria de donar l'error 'Això no és un número'", async () => {
        await expect(AsyncAwaitFunctions.isNumber("a")).rejects.toEqual("Això no és un número")
    })
})

//TESTS callIsNumber
describe("tests de la funció callIsNumber", () => {
    test("callIsNumber de 5 hauria de mostrar 'El número introduit és 5'", async () =>{
        const data = await AsyncAwaitFunctions.callIsNumber(5);
        expect(data).toBe("El número introduit és 5")
    })
    
    test("callIsNumber de 5 hauria de mostrar 'El número introduit és 1.5'", async () =>{
        const data = await AsyncAwaitFunctions.callIsNumber(1.5);
        expect(data).toBe("El número introduit és 1.5")
    })
    
    test("callIsNumber 'a' hauria de mostrar 'Això no és un número'", async () =>{
        async function callIsNumberTest(){
            return await AsyncAwaitFunctions.callIsNumber("a");
        }
        expect(callIsNumberTest()).rejects.toMatch("Això no és un número")
    })
})





/* 
També puc fer test amb trycatch

    test("getEmploye amb id = 4 hauria de retornar 'Employe not found'", async ()=>{
        try{
            await AsyncAwaitFunctions.getEmploye(4)
        }catch(err){
            expect(err).toMatch("Employe not found")
        }
    }) 

Aquest test no funciona pq al emmagatzemar el resultat a una constant, la constant ja no esta catalogada com error. Per lo que el rejects, sobra, hauria de ser: expect(data).toEqual("Això no es un número") o toMatch, però he preferit que capturés l'error ficant-la en una altra funció a la línia 108.
test("callIsNumber de 5 hauria de mostrar 'El número introduit és 1.5'", async () =>{
        const data = await AsyncAwaitFunctions.callIsNumber("a");
        expect(data).rejects.toEqual("Això no és un número")
}) 
*/