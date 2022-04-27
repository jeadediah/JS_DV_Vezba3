function selektovanje(imeKlase) {
    let selector = document.getElementsByClassName(imeKlase);
    return selector;
}
;

let placeno1 = document.querySelectorAll('.installment-1.placeno');
let neplaceno1 = selektovanje('installment-1 neplaceno');
let placeno2 = selektovanje('installment-2 placeno');
let neplaceno2 = selektovanje('installment-2 neplaceno');
let neplaceno3 = selektovanje('installment-3 neplaceno');

let totalKolona1 = selektovanje('ukm ukm-1')[0];
let totalKolona2 = selektovanje('ukm ukm-2')[0];
let totalKolona3 = selektovanje('ukm ukm-3')[0];

function sumaRate(rat) {
    let zbir = 0;
    for (let rate of rat){
        let broj = parseInt(rate.innerHTML);
        zbir = zbir + broj;
    };
    /*for (var i = 0; i < rat.length; i++) {
     let rate = rat[i].innerText;
     let broj = parseInt(rate);
     zbir = zbir + broj;
     }*/
    return zbir;
}
//  ************PLACENO I NEPLACENO ***********
let kolona1placeno = sumaRate(placeno1);
let kolona1neplaceno = sumaRate(neplaceno1);
let kolona2placeno = sumaRate(placeno2);
let kolona2neplaceno = sumaRate(neplaceno2);
let kolona3neplaceno = sumaRate(neplaceno3);


totalKolona1.innerText = `Uplaceno 1 rata: ${kolona1placeno} rsd
                           Ostalo za platiti: ${kolona1neplaceno}rsd`;

totalKolona2.innerText = `Uplaceno 2 rata: ${kolona2placeno} rsd
                           Ostalo za platiti: ${kolona2neplaceno}rsd`;

totalKolona3.innerText = `Ostalo za platiti ${kolona3neplaceno} rsd`;

