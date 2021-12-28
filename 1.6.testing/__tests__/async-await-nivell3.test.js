const {getEmploye, getSalary} = require("../app/async-await-nivell3");
const employees = require("../app/json/employees.json");
const salaries = require("../app/json/salaries.json");

jest.mock('../app/json/employees.json', () => ([
    {
        id: 1,
        name: 'Linux Torvalds'
    }, {
        id: 2,
        name: 'Bill Gates'
    }, {
        id: 3,
        name: 'Jeff Bezos'
    }
]), { virtual: true })

jest.mock('../app/json/salaries.json', () => ([
    {
        id: 1,
        salary: 4000
    }, {
        id: 2,
        salary: 1000
    }, {
        id: 3,
        salary: 2000
    }
]), { virtual: true })


describe("tests de getEmploye", () => {
    test("L'empleat amb id 1 hauria de retornar id 1, nom Linux Torvalds", async () => {
        expect(await getEmploye(1, employees))
            .toMatchObject({ id: 1, name: 'Linux Torvalds' });
    });

    test("L'empleat amb id 8 hauria de donar error", async () => {
        await expect(getEmploye(8, employees))
            .rejects
            .toMatch("Employe not found")
    });

});

describe("tests amb getSalary", () => {
    test("L'empleat amb id 1 retornara 4000", async () => {
        expect(await getSalary({ id: 1, name: 'Linux Torvalds' }, salaries))
            .toBe(4000);
    });

    test("L'empleat amb id 4 hauria de retornar l'error Employe not found", async () => {
        try{
            const employe = await getEmploye(4, employees);
            const salary = await getSalary(employe, salaries);
        }catch(err){
            expect(err).toMatch("Employe not found")
        }   
    });

});