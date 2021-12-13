const AsyncAwaitFunctions = require("../app/async-await");

test("getEmploye amb id = 2 hauria de retornar l'objecte de Bill Gates", ()=>{
    return AsyncAwaitFunctions.getEmploye(2)
        .then( data => 
            expect(data).toStrictEqual({
                id: 2,
                name: 'Bill Gates'
            })
        )
    
})

test("getSalary de getEmploye(2) haria de ser 1000", ()=>{
    return AsyncAwaitFunctions.getEmploye(2)
        .then( employe => AsyncAwaitFunctions.getSalary(employe)
            .then( data => expect(data).toBe(1000))
        )
})


test("printEmployeData de 2 hauria de mostrar Bill Gates, 1000", async ()=>{
    const data = await AsyncAwaitFunctions.printEmployeData(2)
    expect(data).toStrictEqual({
        name:"Bill Gates", 
        salary: 1000})
}) 

