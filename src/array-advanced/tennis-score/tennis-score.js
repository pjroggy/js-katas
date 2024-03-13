/*
Create a function `getScore` which returns the string of the current scores of a tennis game, from a number array where each value represents the player that scored.

* [1, 1, 2, 2, 1] : serving player (1) scored twice, then the receiving player (2) scored twice, and finally the serving player (1) scored once.
The expected result is "40-30".

Game rules :

The score on the left represents the serving player (1), the score on the right represents the receiving player (2).

Scores from zero to three points are described as "love", "15", "30", and "40", respectively.

If at least three points have been scored by each player, the score is not called out as "40–40", but rather as "deuce".

If at least three points have been scored by each side and a player has one more point than his opponent, the score of the game can be called "ad in" when the serving player (1) is ahead, and "ad out" when the receiving player (2) is ahead.

Example:
* points : [1, 1, 1], result : "40-love"
* points : [2, 1, 2, 2], result : "15-40"
* points : [1, 2, 1, 2, 1, 2], result : "deuce"
* points : [1, 1, 1, 2, 2, 2, 1], result : "ad in"

If the argument is null or not an array, throw a TypeError.
If a value of the argument is null or not a number, throw a TypeError.
If a value of the argument is not 1 or 2, throw a RangeError.

Add you own tests.

*/

// TODO add your code here

/*
Etape 0: Créer une fonction qui prend en paramètre un tableau de nombres et retourne une chaîne de caractère
Etape 1: Créer les 2 joueurs
Etape 2: Récupérer les scores
Etape 3: Comparer les scores pour préparer l'affichage
Etape 4: Afficher en fonction des scores

========================================================

Etape 0: Créer une fonction qui prend en paramètre un tableau de nombres et retourne une chaîne de caractère ✅
Etape 1: Créer 2 variables initialisée à 0 ✅
Etape 2: J'utilise une boucle pour parcourir le tableau ✅
Etape 3: Vérification du joueur qui a scoré, pour incrémenter son tableau de score ✅
Etape 4: Je déclare une fonction pour affecter les scores de tennis en fonction du résultat du joueur ✅
Etape 4-1: Transformer le nombre de points en score de tennis ✅
Etape 4-2: Retourner le score transformé ✅
Etape 5: J'utilise cette fonction pour transformer le score des 2 joueurs ✅
Etape 5-1: On stocke le retour de la fonction dans les variables dédiées ✅
Etape 6: Comparer les scores des deux joueurs
Etape 6-1: Retourner la traduction en langage tennis en fonction du score
*/

function getscore (scoreArray) {
   let scorePlayerOne = 0;
   let scorePlayerTwo = 0;

   for (let i =0; i < scoreArray.length; i++ ) {
      if (scoreArray[i] === 1) {
         scorePlayerOne++;
      } else {
         scorePlayerTwo++;
      }
   }

   scorePlayerOne = tennisScore(scorePlayerOne);
   scorePlayerTwo = tennisScore(scorePlayerTwo);

   if (scorePlayerOne === "ad in" || scorePlayerTwo === "ad in") {
      return "ad in"
   } else if (scorePlayerOne === scorePlayerTwo) {
      return "deuce"
   } else {
      return `${scorePlayerOne}-${scorePlayerTwo}`
   }
}

function tennisScore (scorePlayer) {
   switch (scorePlayer) {
      case 0:
         return "love";
      case 1: 
         return "15";
      case 2: 
         return "30";
      case 3:
         return "40";   
      default:
         return "ad in"
   }
}

console.log(getscore([1, 1, 1]));




















// Begin of tests
// const assert = require("assert");

// assert.strictEqual(typeof getScore, "function");
// assert.strictEqual(getScore.length, 1);
// TODO add your tests:

// End of tests
