let objekt1 = {
    datum: "2012/10/28",
    kisa: true,
    sunce: true,
    oblacno: false,
    temp: [20, 22, 23, 26],
    izmerenaTemp: function () {
        let sum = 0;
        this.temp.forEach(element => {
            sum++;
        });
        return sum;
    },
    arSrTemp: function () {
        let arSr = 0;
        let suma = 0;
        this.temp.forEach(element => {
            suma += element;
        });
        arSr = suma / this.temp.length;
        return arSr;

    }
};

let objekt2 = {
    datum: "2015/3/28",
    kisa: false,
    sunce: true,
    oblacno: false,
    temp: [10, 12, 13, 15, 16, 14],
    izmerenaTemp: function () {
        let sum = 0;
        this.temp.forEach(element => {
            sum++;
        });
        return sum;
    },
    arSrTemp: function () {
        let arSr = 0;
        let suma = 0;
        this.temp.forEach(element => {
            suma += element;
        });
        arSr = suma / this.temp.length;
        return arSr;

    }
};

let objekt3 = {
    datum: "2017/1/20",
    kisa: true,
    sunce: true,
    oblacno: false,
    temp: [-12, -6, -5, -4, -1, -3],
    izmerenaTemp: function () {
        let sum = 0;
        this.temp.forEach(element => {
            sum++;
        });
        return sum;
    },
    arSrTemp: function () {
        let arSr = 0;
        let suma = 0;
        this.temp.forEach(element => {
            suma += element;
        });
        arSr = suma / this.temp.length;
        return arSr;

    }
};
let objekti = [objekt1, objekt2, objekt3];


// Napraviti arrow funksiju koja u konzoli ispisuje datum u kome je najviše puta izmerena temperatura. Ukoliko ima više takvih datuma, ispisati poslednji od njih.

let najIzm = nizObj => {
    let datum = nizObj[0].datum;
    let max = nizObj[0].izmerenaTemp();
    nizObj.forEach(element => {
        if (max <= element.izmerenaTemp()) {
            max = element.izmerenaTemp()
            datum = element.datum;
        }
    });

    console.log(datum);
}

najIzm(objekti);

// Napraviti arrow funksiju koja prebrojava i u konzoli ispisuje koliko je bilo kišnih dana, koliko je bilo sunčanih dana i koliko je bilo oblačnih dana.

let dana = nizObj => {
    let kisniDani = 0;
    let sunDani = 0;
    let oblacniDani = 0;
    nizObj.forEach(element => {
        if (element.kisa) {
            kisniDani++;
        }
        if (element.oblacno) {
            oblacniDani++;
        }
        if (element.sunce) {
            sunDani++;
        }
    });
    console.log(`Kisnih dana bilo je ${kisniDani}, suncanih dana ${sunDani}, a oblacnih dana ${oblacniDani}.`);
}
dana(objekti);

// Napraviti arrow funkciju koja računa i vraća koliko je bilo dana sa 
// natprosečnom temperaturom. Pozvati ovu funkciju i njen rezultat ispisati u konzoli.

let natPrTemp = nizObj => {
    let arSr = 0;
    let temps = 0;
    let brojac = 0;
    let brojac2 = 0;
    nizObj.forEach(element => {
        element.temp.forEach(elem => {
            temps += elem;
            brojac2++;
        });
    });
    arSr = temps / brojac2;
    nizObj.forEach(elementi => {
        if (elementi.arSrTemp() > arSr) {
            brojac++;
        }
    });
    return brojac;
}
console.log(natPrTemp(objekti));