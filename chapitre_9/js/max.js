/*
Exercice : maximum d'un tableau
*/

var valeurs = [11, 3, 7, 2, 9, 10];

var max = -Infinity;
// on pose la valeur max la plus faible possible

valeurs.forEach(function(valeur) {
    max = Math.max(max, valeur);
});

console.log("Le maximum des éléments vaut " + max);
