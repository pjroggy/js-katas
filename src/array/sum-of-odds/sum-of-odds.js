/*
Create a function `sum` which returns the sum of all odd values contained in a number array.

If the array is empty or null, return zero.

Example:
* [] -> 0
* [1, 2, 3] -> 4

*/

// TODO add your code here

/*
1. Créer la fonction sum ✅
2. Rajouter un paramètre à la fonction nommé numberArray ✅
3. Créer une variable pour stocker l'addition des valeurs qui sont impaires, initialisée à 0 ✅
4. Créer une condition pour vérifier la présence d'un tableau non vide ✅
4bis. Créer la boucle pour parcourir le tableau ✅
5. Créer une condition pour additionner les nombres s'ils sont impaires ✅
6. Retourner la variable 
*/

function sum (numberArray) {
   let result = 0;

   if(numberArray !== null && numberArray.length > 0) {
      for(const number of numberArray) {
         if(number % 2 !== 0) {
            result += number;
         }
      }
   }
   console.log(result);
   return result;
}

module.exports = sum;
