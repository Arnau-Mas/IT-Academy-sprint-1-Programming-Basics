const {sumar, restar, multiplicar, dividir} = require("../app/mathFunctions");

test("sumar 3+2 hauria de donar 5", ()=>{
    expect(sumar(3,2)).toBe(5);
});

test("sumar 3+5 hauria de donar 8", ()=>{
    expect(sumar(3,5)).toBe(8);
});

test("restar 3-2 hauria de donar 1", ()=>{
    expect(restar(3,2)).toBe(1);
});

test("multiplicar 3*2 hauria de donar 6", ()=>{
    expect(multiplicar(3,2)).toBe(6);
});

test("dividir 3/2 hauria de donar 1.5", ()=>{
    expect(dividir(3,2)).toBe(1.5);
});