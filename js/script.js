// logica
// creare 2 array uno contenente i numeri e uno vuoto
// creare un ciclo for che va da 1 a 90
// creare una variabile che contiene un numero random da 1 a 90
// se il numero non è presente nell'array lo pusho
// se il numero è presente nel'array non lo pusho
// quando il primo array è vuoto ricomincio il ciclo


// primo metodo con prompt, array vuoto e controllo se il numero è già stato estratto si possono ripescare numeri già estratti



// let sacchetto1 = [];
// let numeroRandom = 0;

// for (let i = 1; i <= 90; i++) {
//     console.log(prompt("premi invio per estrarre un numero"));
//     numeroRandom = Math.floor(Math.random() * 90) + 1;
//     if (!sacchetto1.includes(numeroRandom)) {
//         sacchetto1.push(numeroRandom);
//         console.log(numeroRandom);
        
//     } else {
//         console.log("numero già estratto");
//         i--;
//     }
//     if (sacchetto1.length === 90) {
//         break;
//     }
// }




// secondo metodo con confirm, 2 array di cui 1 con i numeri da 1 a 90 e non si possono ripescare numeri già estratti





let sacchetto1 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51, 52, 53, 54, 55, 56, 57, 58, 59, 60, 61, 62, 63, 64, 65, 66, 67, 68, 69, 70, 71, 72, 73, 74, 75, 76, 77, 78, 79, 80, 81, 82, 83, 84, 85, 86, 87, 88, 89, 90];
let sacchetto2 = [];

for (let i = 1; i <= 90; i++) {
    // console.log(confirm("Estreai un numero"));
    // aggiungere bottone finisci la partita dopo 15 estrazioni
    // if (i >= 15) {
    //     let endGame = confirm("Vuoi terminare la partita?");
    //     if (endGame) {
    //         alert("Partita terminata");
    //         break;
    //     }
    }
    let numeroRandom = Math.floor(Math.random() * sacchetto1.length);
    sacchetto2.push(sacchetto1[numeroRandom]);
    sacchetto1.splice(numeroRandom, 1);
    console.log(sacchetto2[i - 1]);
    if (sacchetto1.length === 0) {
        alert("Un giocatore ha fatto tombola");
        break;
    }
}





