// Les fonctions = calculs --> résultats (réutilisables)

let prix = 4 + 5;
let prix2 = 40 + 43;

//1. déclare fonction addition

function calculaddition (c1, c2) 
{
    let resultat = c1 + c2;
    return resultat;
}

//2. Appel fonction
let prix3 = calculaddition (40,43);

// alert (prix3);

// fonction multiplication

let nombre1; 
let nombre2;

function multiplication (nombre1, nombre2) {

    let resultat = nombre1 * nombre2;

    return resultat;
}

let produit = multiplication (45, 4);

let afficheresultat = "Le résultat est de";

console.log (afficheresultat, produit);