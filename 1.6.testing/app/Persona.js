class Persona {
    constructor(nom){
        this.nom = nom;
    }

    dirNom(){
        console.log(this.nom);
    }
}

let persona1 = new Persona("Arnau");
persona1.dirNom();

module.exports = Persona;