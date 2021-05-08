// 1. Zadatak - Grananje

// Za uneto početno i krajnje radno vreme dva lekara, ispitati 
//koliko sati i minuta se njihove smene preklapaju.

// Ulaz (vrednosti koje samostalno dodeljujete promenljivama) : 
// Početak radnog vremena u satima i minutima za prvog lekara 
// (pocSatLek1 i pocMinLek1)
//Kraj radnog vremena u satima i minutima za prvog lekara (
//    krajSatLek1 i krajMinLek1)
// Počezak radnog vremena u satima i minutima za drugog lekara 
// (pocSatLek2 i pocMinLek2)
// Kraj radnog vremena u satima i minutima za drugog lekara 
// (krajSatLek1 i krajMinLek1)

// Izlaz (vrednosti koje treba ispisati na ekranu i proizvoljno ih 
// stilizovati) :
// Početak radnog vremena prvog lekara (izraženo u satima i minutima)
// Kraj radnog vremena prvog lekara (izraženo u satima i minutima)
// Početak radnog vremena drugog lekara (izraženo u satima i minutima)
// Kraj radnog vremena drugog lekara (izraženo u satima i minutima)
// Vreme koje su prvi lekar i drugi lekar zajedno proveli na poslu 
// (izraženo u satima i minutima). Ukoliko nema preklapanja u radnim 
// vremenima ova dva lekara, na ekranu ispisati da nema preklapanja.



let pocSatLek1 = 12;
let pocMinLek1 = 30;
let krajSatLek1 = 15;
let krajMinLek1 = 30;
let pocSatLek2 = 11;
let pocMinLek2 = 0;
let krajSatLek2 = 13;
let krajMinLek2 = 0;


document.body.innerHTML += `<h1> Pocetak radnog vremena</h1> 
<br> <div> Prvi lekar: ${pocSatLek1}:${pocMinLek1}  
<br> Drugi lekar: ${pocSatLek2}:${pocMinLek2}</div> 
<br> <h1> Kraj radnog vremena </h1> <br> <div> Prvi 
lekar: ${krajSatLek1}:${krajMinLek1}<br>Drugi lekar: 
${krajSatLek2}:${krajMinLek2} </div> <br><br><br>`

if (krajSatLek1 * 60 + krajMinLek1 <= pocSatLek2 * 60 + pocMinLek2 || krajSatLek2 * 60 + krajMinLek2 <= pocSatLek1 * 60 + pocMinLek1) {
    document.body.innerHTML += `<h3>Nema preklapanja</h3>`;
}
else if (pocSatLek1 * 60 + pocMinLek1 < pocSatLek2 * 60 + pocMinLek2 && krajSatLek2 * 60 + krajMinLek2 < krajSatLek1 * 60 + krajMinLek1) {
    document.body.innerHTML += `<h3> Preklapaju se za ${Math.floor(((krajSatLek2 * 60 + krajMinLek2) - (pocSatLek2 * 60 + pocMinLek2)) / 60)}h i ${(((krajSatLek2 * 60 + krajMinLek2) - (pocSatLek2 * 60 + pocMinLek2)) % 60)}m`;
}
else if (pocSatLek1 * 60 + pocMinLek1 > pocSatLek2 * 60 + pocMinLek2 && krajSatLek2 * 60 + krajMinLek2 > krajSatLek1 * 60 + krajMinLek1) {
    document.body.innerHTML += `<h3> Preklapaju se za ${Math.floor(((krajSatLek1 * 60 + krajMinLek1) - (pocSatLek1 * 60 + pocMinLek1)) / 60)}h i ${(((krajSatLek1 * 60 + krajMinLek1) - (pocSatLek1 * 60 + pocMinLek1)) % 60)}m`;
}
else if (pocSatLek2 * 60 + pocMinLek2 < krajSatLek1 * 60 + krajMinLek1 && krajSatLek1 * 60 + krajMinLek1 < krajSatLek2 * 60 + krajMinLek2 && pocSatLek2 * 60 + pocMinLek2 > pocSatLek1 * 60 + pocMinLek1) {
    document.body.innerHTML += `<h3> Preklpaju se za ${Math.floor(((krajSatLek1 * 60 + krajMinLek1) - (pocSatLek2 * 60 + pocMinLek2)) / 60)}h i ${(((krajSatLek1 * 60 + krajMinLek1) - (pocSatLek2 * 60 + pocMinLek2)) % 60)}m`;
}
else {
    document.body.innerHTML += `<h3> Preklapaju se za ${Math.floor(((krajSatLek2 * 60 + krajMinLek2) - (pocSatLek1 * 60 + pocMinLek1)) / 60)}h i ${(((krajSatLek2 * 60 + krajMinLek2) - (pocSatLek1 * 60 + pocMinLek1)) % 60)}m`;
}


// 2. Zadatak - Switch

// 1. Za uneti redni broj dana ispisati koji je to dan u nedelji.
let dan = 2;

switch (dan) {
    case 1:
        console.log("Ponedeljak");
        break;
    case 2:
        console.log("Utorak");
        break;
    case 3:
        console.log("Sreda");
        break;
    case 4:
        console.log("Cetvrtak");
        break;
    case 5:
        console.log("Petak");
    case 6:
        console.log("Subota");
    case 0:
        console.log("Nedelja");
    default:
        console.log("niste odabrali dan");
}

// 2. Za unetu ocenu ucenika (ceo broj od 1 do 5) ispisati njegov uspeh te skolske godine
// (nedovoljan, ... , odlican).
let ocena = 5;
switch (ocena) {
    case 1:
        console.log("Nedovoljan");
        break;
    case 2:
        console.log("Dovoljan");
        break;
    case 3:
        console.log("Dobar");
        break;
    case 4:
        console.log("Vrlo Dobar");
        break;
    case 5:
        console.log("Odlican");
        break;
    default:
        console.log("Niste uneli ocenu");
}

// 3. Za uneti paran broj manji od 10 ispitati da li je uneti broj nula, dvojka, cetvorka, sestica, osmica ili je unos pogresan.

let unetiBroj = 10;

switch (unetiBroj) {
    case 0:
        console.log("Uneti broj je 0");
        break;
    case 2:
        console.log("Uneti broj je 2");
        break;
    case 4:
        console.log("Uneti broj je 4");
        break;
    case 6:
        console.log("Uneti broj je 6");
        break;
    case 8:
        console.log("Uneti broj je 8");
        break;
    default:
        console.log("Unos je pogresan");
}
// 4. Za uneta dva broja i karakter napraviti kalkulator koji vrsi mnozenja ta dva broja ukoliko je uneto slovo m, deljenje ukoliko je uneto slovo d, sabiranje ukoliko je uneto slovo s ili oduzimanje ukoliko je uneto slovo o.
let br1 = 3;
let br2 = 8;
let operacija = "o";


switch (operacija) {
    case "m":
        console.log(br1 * br2);
        break;
    case "d":
        console.log(br1 / br2);
        break;
    case "s":
        console.log(br1 + br2);
        break;
    case "o":
        console.log(br1 - br2);
        break;
    default:
        console.log("nije uneta operacija");
}

// 5. Za preuzeti dan sa racunara ispisati jos koliko dana je preostalo do vikenda.

let datum = new Date();
let danUNedelji = datum.getDay();

switch (danUNedelji) {
    case 0:
        console.log("Vikend je");
        break;
    case 1:
        console.log("Ostalo je 5 dana do vikenda");
        break;
    case 2:
        console.log("Ostalo je 4 dana do vikenda");
        break;
    case 3:
        console.log("Ostalo je 3 dana do vikenda");
        break;
    case 4:
        console.log("Ostalo je 2 dana do vieknda");
        break;
    case 5:
        console.log("Ostao je 1 dan do vikenda");
        break;
    case 6:
        console.log("Vikend je");
        break;
    default:
        console.log("Nije uneta odgovarajuca vrednost");
}

// 6. Preuzeti redni broj meseca sa racunara i ispisati koji je to mesec u godini.

let mesec = datum.getMonth();

switch (mesec) {
    case 0:
        console.log("Prvi mesec");
        break;
    case 1:
        console.log("Drugi mesec");
        break;
    case 2:
        console.log("Treci mesec");
        break;
    case 3:
        console.log("Cetvrti mesec");
        break;
    case 4:
        console.log("Peti mesec");
        break;
    case 5:
        console.log("Sesti mesec");
        break;
    case 6:
        console.log("Sedmi mesec");
        break;
    case 7:
        console.log("Osmi mesec");
        break;
    case 8:
        console.log("Deveti mesec");
        break;
    case 9:
        console.log("Deseti mesec");
        break;
    case 10:
        console.log("Jedanaesti mesec");
        break;
    case 11:
        console.log("Dvanaesti mesec");
        break;
}

// 7. Preuzeti redni broj meseca sa racunara i 
// ispisati koliko taj mesec ima dana. Ukoliko je 
// u pitanju mesec februar, preuzeti godinu sa 
// racunara i ispisati da li je godina prestupna 
// i na osnovu toga ispisati broj dana meseca febraura.
let godina = datum.getFullYear();
switch (mesec) {
    case 0:
        console.log("31 dan");
        break;
    case 1:
        switch (godina) {
            case godina % 400 == 0:
                console.log("29 dana");
                break;
            case godina % 100 != 0 && godina % 4 == 0:
                console.log("29 dana");
                break;
            default:
                console.log("28 dana");
        }
    case 2:
        console.log("31 dan");
        break;
    case 3:
        console.log("30 dana");
        break;
    case 4:
        console.log("31 dan");
        break;
    case 5:
        console.log("30 dana");
        break;
    case 6:
        console.log("31 dan");
        break;
    case 7:
        console.log("31 dan");
        break;
    case 8:
        console.log("30 dana");
        break;
    case 9:
        console.log("31 dan");
        break;
    case 10:
        console.log("30 dana");
        break;
    case 11:
        console.log("31 dan");
        break;
    default:
        console.log("nije unet ispravan datum");
}


// 8.Na osnovu unete boje na engleskom jeziku obojiti tekst paragrafa u crveno, zeleno ili plavo. Ukoliko nije uneta ni jedna od ove tri boje, test paragrafa obojiti u zuto.


let boja = "red";

switch (boja) {
    case "red":
        document.body.innerHTML += `<p style="color:red"> Lorem ipsum</p>`
        break;
    case "green":
        document.body.innerHTML += `<p style="color:green"> Lorem ipsum</p>`
        break;
    case "blue":
        document.body.innerHTML += `<p style="color:blue"> Lorem ipsum</p>`
        break;
    default:
        document.body.innerHTML += `<p style="color:yellow"> Lorem ipsum</p>`
        break;
}


// 3. ZADATAK - petlje

// A Odrediti zbir cifara unetog celog broja i dobijeni zbir ispisati na ekranu
let cifra = 511;
let zbir = 0;

while (cifra > 0) {
    zbir += cifra % 10;
    cifra = Math.floor(cifra / 10);
}
document.body.innerHTML += `<h3> Zbir cifara unetog broja je ${zbir}  </h3>`;

// B. Odrediti proizvod brojeva od n do m koji s
// u deljivi sa 7 a nisu sa 3, potom od njega oduzeti 
// zbir brojeva od n do m koji su deljivi sa 3 a nisu sa 7;

let n = 1;
let m = 10;
let proizvod = 1;
let zbir1 = 0;
while (n <= m) {
    if (n * proizvod % 7 == 0 && n * proizvod % 3 != 0) {
        proizvod *= n;
    }
    else if (n + zbir1 % 3 == 0 && n + zbir1 % 7 != 0) {
        zbir1 += n;
    }
    n++;
}
console.log(`Resenje je ${proizvod - zbir1}.`);


for (i = n; n <= m; i++) {
    if (i * proizvod % 7 == 0 && i * proizvod % 3 != 0) {
        proizvod *= n;
    }
    else if (i + zbir1 % 3 == 0 && i + zbir1 % 7 != 0) {
        zbir1 += i;

    }
}
console.log(`Resenje je ${proizvod - zbir1}.`);



// C. Odrediti sumu kubova neparnih brojeva od n do m:
// a. Preko while petlje

let n1 = 3;
let m1 = 10;
let sumaKubova = 0;
while (n1 <= m1) {
    if (n1 % 2 != 0) {
        sumaKubova += Math.pow(n1, 3);
    }
    n1++;
}
console.log(sumaKubova);


// b. preko for petlje
for (i = n1; n1 <= m1; i++) {
    if (n1 % 2 != 0) {
        sumaKubova += Math.pow(n1, 3);
    }
}
console.log(sumaKubova);



// 4. Kreirati 64 span elemenata i rasporediti ih kao na slici

for (i = 1; i <= 64; i++) {
    if (i <= 8 && i % 2 == 0) {
        document.body.innerHTML += `<span class="parni"> ${i} </span>`
    }
    else if (i <= 8 && i % 2 != 0) {
        document.body.innerHTML += `<span class="neparni"> ${i} </span>`
    }
    else if (i > 8 && i <= 16 && i % 2 != 0) {
        document.body.innerHTML += `<span class="parni"> ${i} </span>`
    }
    else if (i > 8 && i <= 16 && i % 2 == 0) {
        document.body.innerHTML += `<span class="neparni"> ${i} </span>`
    }
    else if (i > 16 && i <= 24 && i % 2 != 0) {
        document.body.innerHTML += `<span class="neparni"> ${i} </span>`
    }
    else if (i > 16 && i <= 24 && i % 2 == 0) {
        document.body.innerHTML += `<span class="parni"> ${i} </span>`
    }
    else if (i > 24 && i <= 32 && i % 2 != 0) {
        document.body.innerHTML += `<span class="parni"> ${i} </span>`
    }
    else if (i > 24 && i <= 32 && i % 2 == 0) {
        document.body.innerHTML += `<span class="neparni"> ${i} </span>`
    }
    else if (i > 32 && i <= 40 && i % 2 != 0) {
        document.body.innerHTML += `<span class="neparni"> ${i} </span>`
    }
    else if (i > 32 && i <= 40 && i % 2 == 0) {
        document.body.innerHTML += `<span class="parni"> ${i} </span>`
    }
    else if (i > 40 && i <= 48 && i % 2 != 0) {
        document.body.innerHTML += `<span class="parni"> ${i} </span>`
    }
    else if (i > 40 && i <= 48 && i % 2 == 0) {
        document.body.innerHTML += `<span class="neparni"> ${i} </span>`
    }
    else if (i > 48 && i <= 56 && i % 2 != 0) {
        document.body.innerHTML += `<span class="neparni"> ${i} </span>`
    }
    else if (i > 48 && i <= 56 && i % 2 == 0) {
        document.body.innerHTML += `<span class="parni"> ${i} </span>`
    }
    else if (i > 56 && i <= 64 && i % 2 != 0) {
        document.body.innerHTML += `<span class="parni"> ${i} </span>`
    }
    else {
        document.body.innerHTML += `<span class="neparni"> ${i} </span>`
    }
    if (i % 8 == 0) {
        document.body.innerHTML += `<br>`;
    }


}