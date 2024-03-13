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
Etape 1: Lister le nombre de 1 et de 2
Etape 2: Comparer ces valeurs
Etape 3: En fonction de la comparaison, afficher un des 4 résult

=================================================

Etape 0: Créer une fonction, qui prend un tableau de nombres en paramètres, et retourne une valeur en chaîne de caractère ✅
Etape 1: Créer 3 variables, une pour stocker le nombre de points de chaque joueur, et une pour le résultat. ✅
Etape 2: Boucler sur le tableau pour lire les données, et trier donc les données de ce tableau, en attribuant les valeurs correspondantes dans les différentes variables. ✅
Etape 3: Transforme le nombre de points suivant la notation des règles du tennis, tant qu'on est pas à plus de 3 points. ✅
Etape 4: Comparer les résultats des 2 joueurs
Etape 5: Afficher différents résultats en fonction de cette comparaison et en suivant les règles du tennis.
*/

function getScore (array) {
   let scorePlayerOne = 0;
   let scorePlayerTwo = 0;
   let result;

   for (let i = 0; i < array.length; i++) {
      if(array[i] === 1) {
         scorePlayerOne += 1;
      } else {
         scorePlayerTwo += 1;
      }
   }
   scorePlayerOne = scorePlayer(scorePlayerOne);
   scorePlayerTwo = scorePlayer(scorePlayerTwo);

   if (scorePlayerOne === scorePlayerTwo) {
      result = "deuce";
   } else if(scorePlayerOne === "ad in" || scorePlayerTwo === "ad in") {
      result = "ad in";
   } else {
      result = `${scorePlayerOne}-${scorePlayerTwo}`;
   }
   return result
}

function scorePlayer (score) {
   if(score === 1) {
      score = 15;
   } else if (score === 2) {
      score = 30;
   } else if (score === 3) {
      score = 40;
   } else if (score > 3) {
      score = "ad in";
   } else {
      score = "love";
   }
   return score;
}

console.log(getScore([1, 1, 1, 2, 2, 2, 1]));











// Begin of tests
const assert = require("assert");

assert.strictEqual(typeof getScore, "function");
assert.strictEqual(getScore.length, 1);
// TODO add your tests:
assert

// End of tests
