// Prvi zadatak

let radnovremeod = 9;
let radnovremedo = 20;
let radnovremeVod = 10;
let radnovremeVdo = 18;

let m = new Date();
let dan = m.getDay();
let sat = m.getHours();

if (dan == 0) {
    if (sat >= 10) {
        if (sat < 18) {
            console.log("Radi");
        }
        else {
            console.log("Ne radi");
        }
    }
    else {
        console.log("Ne radi");
    }

}
else if (dan == 6) {
    if (sat >= 10) {
        if (sat < 18) {
            console.log("Radi")
        }
        else {
            console.log("Ne radi")
        }

    }
    else {
        console.log("Ne radi");
    }
}
else {
    if (sat >= 9) {
        if (sat < 20) {
            console.log("Radi")
        }
        else {
            console.log("Ne radi")
        }

    }
    else {
        console.log("Ne radi")
    }
}

// Drugi zadatak

let brStanovnika = 1500000;
let brTest = 10000;
let brPoz = 1000;


if (brPoz >= 0.3 * brTest) {
    if (brPoz >= 0.1 * brStanovnika) {
        document.body.innerHTML = `<h1 style="color:red"> vanredno stanje </h1>`;
    }
}