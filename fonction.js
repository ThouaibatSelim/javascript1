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

alert (prix3);