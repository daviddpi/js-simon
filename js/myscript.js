//funzione che genera numeri random
function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
}

//funzione che inserisce i numeri random in un array e compaiono con un alert
function numeriRandom(){
    numeriCasuali = [];
    do{
        let numeroAttuale = getRndInteger(1,100+1);
        if(!numeriCasuali.includes(numeroAttuale)){
            numeriCasuali.push(numeroAttuale)
        }
    }while(numeriCasuali.length < numeroMassimo);
    console.log(numeriCasuali);
    alert(numeriCasuali);
}

//funzione inserisci i tuoi numeri
function inserisciNumeri(){
    numeriIndovinati = [];
    // for(let i = 0; i < numeroMassimo; i++){
    //     let tuoNumero = parseInt( prompt(i+1 + "/" + numeroMassimo + " Inserisci il tuo numero da 1 a 100") );
    //     if( (Number.isNaN(tuoNumero)) || (tuoNumero < 1 ) || (tuoNumero > 100 ) ){
    //         alert("Devi inserire un numero tra 1 e 100");
    //         i--;
    //     } else if( numeriIndovinati.includes(tuoNumero) ){
    //         alert("Devi inserire un numero diverso il numero " + tuoNumero + " è stato già inserito");
    //         i--;
    //     } else if( numeriCasuali.includes(tuoNumero) ){
    //         numeriIndovinati.push(tuoNumero);
    //         if(numeriIndovinati.length == numeroMassimo){
    //             alert("HAI INDOVINATO TUTTI I NUMERI");
    //         }
    //     }
    // }
    while( numeriTotali.length < numeroMassimo ){
        let tuoNumero = parseInt( prompt(i+1 + "/" + numeroMassimo + " Inserisci il tuo numero da 1 a 100") );
        numeriTotali.push(tuoNumero);
        i++;
        if(numeriIndovinati.includes(tuoNumero)){
            alert("Devi inserire un numero diverso il numero " + tuoNumero + " è stato già inserito");
        } else if( numeriCasuali.includes(tuoNumero)){
            numeriIndovinati.push(tuoNumero);
            if(numeriIndovinati.length == numeroMassimo){
                alert("HAI INDOVINATO TUTTI I NUMERI");
            }
        }
    }
    alert("I numeri indovinati sono: " + numeriIndovinati);
    alert("numeri indovinati: " + numeriIndovinati.length);
    console.log("I numeri indovinati sono: " + numeriIndovinati);
    console.log("numeri indovinati: " + numeriIndovinati.length);
}

let numeriCasuali = [];
let numeriIndovinati = [];
let numeriTotali = [];
let numeroMassimo = 5;
let tempoDifficolta = 10000;
let i = 0;

numeriRandom();

var timeleft = (tempoDifficolta/1000) - 1;
var downloadTimer = setInterval(function(){
  if(timeleft <= 0){
    clearInterval(downloadTimer);
    document.getElementById("countdown").innerHTML = "Tempo esaurito";
  } else {
    document.getElementById("countdown").innerHTML = timeleft + " tempo rimasto";
  }
  timeleft -= 1;
}, 950);

setTimeout(inserisciNumeri, tempoDifficolta);
