//Exercice 2

/*
let pommePrix =5
let poirePrix =8
let argent =40
let nbPoire=0
let nbPomme=0

console.log(argent)
function transaction(number1,number2){
    return number1-number2}

while(argent >5) {
    argent= transaction(argent,poirePrix)
    console.log(argent)
    argent=transaction(argent,pommePrix)
    console.log(argent)
    nbPomme++
    nbPoire++
}

console.log('Vous avez acheté',nbPomme,'pommes')
console.log('et',nbPoire,'poires')
console.log('Malheureusement vous etes pauvres avec vos',argent,'pièces')
*/

//Exercice 3

class samourai{
    constructor(attaque,précision,vie){
        this.attaque=attaque
        this.précision=précision
        this.vie=vie
    }

    getStat() {
        console.log('Attaque :',this.attaque)
        console.log('Précision :',this.précision)
        console.log('Vie :',this.vie)
    }
}

let Oda= new samourai(4,0.3,30)
console.log('Oda:')
Oda.getStat()

let Oroshi= new samourai(3,0.7,12)
console.log('Oroshi:')
Oroshi.getStat()

eye=Oda.précision
eye2=Oroshi.précision
hit=true
hit2=true

function Big(hit,eye){
    if (Math.random()<eye){
        hit=true
        Oroshi.vie=Oroshi.vie-Oda.attaque
        console.log('aie',Oroshi.vie)
    }   else{
        hit=false
        console.log('haha, nullos',Oroshi.vie)
    }
    return hit
}



function Big2(hit2,eye2){
    if (Math.random()<eye2){
        hit2=true
        Oda.vie=Oda.vie-Oroshi.attaque
        console.log('ENFLURE',Oda.vie)
    }   else{
        hit2=false
        console.log('Tu es très loin de mon niveau, HAHA',Oda.vie)
    }
    return hit2
}

console.log('QUE LE DUEL AU SOMMET COMMENCE !!! (bruit de tambour)')

while (Oda.vie>0 && Oroshi.vie>0){
    Big(hit,eye)
    Big2(hit2,eye2)
}

if (Oda.vie <= 0) {
    console.log("Oroshi a gagné!")
} else {
    console.log("Oda a gagné!")
}