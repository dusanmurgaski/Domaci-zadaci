
let niz = [1, 5, 3, 5, 0, 3];

// 1. Napisati funkciju kojoj se prosleđuje celobrojni niz,
//  a ona vraća indeks minimalnog elementa ovog niza. 
//  Ukoliko ima više jednakih minimalnih elemenata, 
//  vratiti indeks bilo kog od minimalnih elemenata.
let minElement = niz => {
    let minVrednost = niz[0];
    let minIndeks = 0;
    niz.forEach((e, i) => {
        if (e < minVrednost) {
            minVrednost = e;
            minIndeks = i;
        }
    });
    return minIndeks;
}
console.log(minElement(niz));

// 2. Napisati funkciju kojoj se prosleđuje celobrojni niz,
//  a ona vraća sumu elemenata niza sa parnim indeksom.
let sumaNiza = niz => {
    let suma = 0;
    niz.forEach((e, i) => {
        if (i % 2 == 0) {
            suma += e;
        }
    });
    return suma;
}
console.log(sumaNiza(niz));


// 3. Napisati funkciju kojoj se prosleđuje celobrojni niz,
//  a ona menja znak svakom neparnom elementu celobrojnog 
//  niza sa parnim indeksom. Nakon promene znaka,
//   funkcija ispisuje niz u konzoli.
let promenaZnaka = niz => {
    niz.forEach((e, i) => {
        if (e % 2 != 0 && i % 2 == 0) {
            niz[i] = e * -1;
        }
    });
    return niz;
}
console.log(promenaZnaka(niz));