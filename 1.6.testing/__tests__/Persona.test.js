jest.mock("../app/Persona");
const Persona = require("../app/Persona");
const mMock = jest.fn();

Persona.mockImplementation(()=>{
    return  {
        m:mMock
    }
})

describe("Tests d'un mock de la classe Persona",() => {
    test("Fent la crida al Mock hauria de retornar Arnau", () => {
        const persona1 = new Persona("Arnau");
        console.log(typeof mMock.mock.calls);
        expect(mMock.mock.calls).toBe("Arnau");
    })
})


