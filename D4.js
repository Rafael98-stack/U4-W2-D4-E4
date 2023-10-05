/* ESERCIZIO 1
 Scrivi una funzione di nome "area", che riceve due parametri (l1, l2) e calcola l'area del rettangolo associato..
*/

/* SCRIVI QUI LA TUA RISPOSTA */

function area (l1, l2) {
    const result = l1 * l2;
    return result;
};
const resultArea = area(5, 10);
    
console.log(resultArea);
/* ESERCIZIO 2
 Scrivi una funzione di nome "crazySum", che riceve due numeri interi come parametri.
 La funzione deve ritornare la somma dei due parametri, ma se il valore dei due parametri è il medesimo deve invece tornare
 la loro somma moltiplicata per tre.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

function crazySum (num1 , num2) {
const crazySumSummary = num1 + num2;
 if (crazySumSummary === 30) {
    const crazySumMoltiplicaton = crazySumSummary * 3;
    return "Il risultato e' uguale a quindi verra' moltiplica per 3 quindi: " + crazySumMoltiplicaton;
 } else if (crazySumSummary !== 30) {

    return crazySumSummary;
 }
   

}
const crazySumResult = crazySum(10, 20);
console.log(crazySumResult);

function crazySum (num1 , num2) {
    return num1 + num2 === 30 ? (num1 + num2) * 3 : num1 + num2;
    
    }
    
    console.log(crazySumResult);

/* ESERCIZIO 3
 Scrivi una funzione di nome "crazyDiff" che calcola la differenza assoluta tra un numero fornito come parametro e 19.
 Deve inoltre tornare la differenza assoluta moltiplicata per tre qualora il numero fornito sia maggiore di 19.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
function crazyDiff(num1 , num2) {
    num1 = 50;
    num2 = 19;
    const crazyDiffDifference = num1 - num2;
    
    if (num1 > num2) {
        const result = crazyDiffDifference * 3;
        return "Il risultato otteuto e' maggiore di num2, quindi verra' moltiplicato: " + result;
    } else if ( num1 <= num2) {
        const result = crazyDiffDifference;
        return "Il ristultato ottenuto non e' maggiore di num2, quindi verra' effetuato una normale Differenza: " + result;
    }
}
console.log(crazyDiff())
/* ESERCIZIO 4
 Scrivi una funzione di nome "boundary" che accetta un numero intero n come parametro, e ritorna true se n è compreso tra 20 e 100 (incluso) oppure
 se n è uguale a 400.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
function boundary(n) {
     n = 50 
    if ((n >= 20 && n <= 100) || n === 400) {

       return true;
    } else {
        return false;
    }
    }
    console.log(boundary())
/* ESERCIZIO 5
 Scrivi una funzione di nome "epify" che accetta una stringa come parametro.
 La funzione deve aggiungere la parola "EPICODE" all'inizio della stringa fornita, ma se la stringa fornita comincia già con "EPICODE" allora deve
 ritornare la stringa originale senza alterarla.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

function epify(stringa) {
     
     if (stringa.startsWith("EPICODE")) {
        return stringa;
     } else {
        return "EPICODE" + stringa;
     }
     
    }
console.log(epify("EPICODERSLOVE"))
console.log(epify(" BELLISSIMA"))


/* ESERCIZIO 6
 Scrivi una funzione di nome "check3and7" che accetta un numero positivo come parametro. La funzione deve controllare che il parametro sia un multiplo
 di 3 o di 7. (Suggerimento: usa l'operatore modulo)
*/
const check3and7 = function(parametro) {
if ((parametro % 3 === 0 || parametro % 7 === 0) && parametro >= 0) {
    return "Il parametro e' almeno multiplo di 3 o 7 ed e' positivo: " + true;
} else {
    return "Il parametro non e' ne multiplo di 3 o 7 ed e' negativo: " + false;
}
}
console.log(check3and7(-5))
/* SCRIVI QUI LA TUA RISPOSTA */

/* ESERCIZIO 7
 Scrivi una funzione di nome "reverseString", il cui scopo è invertire una stringa fornita come parametro (es. "EPICODE" --> "EDOCIPE")
*/

/* SCRIVI QUI LA TUA RISPOSTA */
const reverseString = function(stringa) {
    let newString = ""
     for (let i = stringa.length - 1; i>= 0; i--) {
  
    newString += stringa[i].toUpperCase()
    }
    return newString;
}
console.log(reverseString("epicode"));
console.log(reverseString("ciao"));

/* ESERCIZIO 8
 Scrivi una funzione di nome "upperFirst", che riceve come parametro una stringa formata da diverse parole.
 La funzione deve rendere maiuscola la prima lettera di ogni parola contenuta nella stringa.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
const upperFirst = function (word) {
    let arrayWord = word.split(" ")
    let finalResult = []
    for (let i = 0; i < arrayWord.length; i ++) {
        const firstWord = arrayWord[i].charAt(0);


        
    }
console.log(arrayWord);
}
upperFirst("Sono andato al Mare");
/* ESERCIZIO 9
 Scrivi una funzione di nome "cutString", che riceve come parametro una stringa. La funzione deve creare una nuova stringa senza il primo e l'ultimo carattere
 della stringa originale.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

/* ESERCIZIO 10
 Scrivi una funzione di nome "giveMeRandom", che accetta come parametro un numero n e ritorna un'array contenente n numeri casuali inclusi tra 0 e 10.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
