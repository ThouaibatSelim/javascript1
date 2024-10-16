//Les boucles

//"While"

// let numero = 0

// while(numero < 9) {
//     console.log ("PASSAGE", numero, "========");
//     console.log ("numero avant l'ajout de + 3, numero est: ", numero);
//     numero = numero + 3;
//     console.log ("numero après l'ajout de + 3, numero est: ", numero);
// };

//"For"

// for( let compteur = 0; compteur < 3; compteur++) {
//     console.log("Le compteur est : ", compteur)
// }

let tableauxEleves = ["Fazati", "Dominique", "Kaniza", "Nadhurati", "Ben", "Ikbal", "Saïd", "Jasmine", "Tatyana", "Izad", "Faïz", "Nicia", "Dalya", "Akramal", "Kyara", "Soihiroudine", "Faoula", "Ambdil", "Thouaïbat"]

console.log (tableauxEleves[0]);
console.log (tableauxEleves[1]);
console.log (tableauxEleves[2]);

console.log ("=== Avant la boucle FOR ===");
for(let i = 0; i < tableauxEleves.length; i++ ) {
    
    console.log (tableauxEleves[i]);

}
