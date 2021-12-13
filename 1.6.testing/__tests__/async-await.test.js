const AsyncAwaitFunctions = require("../app/async-await");

//TESTS getEmploye
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
//MIRAR PQ AIXÒ AMB PROMISES FENT EL .CATCH FUNCIONAVA I ARA AMB TOTHROW NO. TAMBÉ MIRAR SI ALS TESTS S'HAURIA DE POSAR TRYCATCH
test("getEmploye amb id = 4 hauria de retornar 'Employe not found'", async ()=>{
    const employe = await AsyncAwaitFunctions.getEmploye(4)
    expect(employe).toThrow("Employe not found")
    })

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
    const employe = await AsyncAwaitFunctions.getEmploye(4);
    const salary = await AsyncAwaitFunctions.getSalary(employe);
    expect(salary).toBe("Employe not found")
})

test("printEmployeData de 2 hauria de mostrar Bill Gates, 1000", async ()=>{
    const data = await AsyncAwaitFunctions.printEmployeData(2)
    expect(data).toStrictEqual({
        name:"Bill Gates", 
        salary: 1000})
}) 

test("isNumber 4 hauria de mostrar 'El número introduit és 4'", async () => {
    const data = await AsyncAwaitFunctions.isNumber(4);
    expect(data).toBe("El número introduit és 4");
})

test("callIsNumber de 5 hauria de mostrar 'El número introduit és 5'", async () =>{
    const data = await AsyncAwaitFunctions.callIsNumber(5);
    expect(data).toBe("El número introduit és 5")
})