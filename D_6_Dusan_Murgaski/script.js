// Prvi zadatak / Odrediti temp u kelvin
let f = 200;
let c = ((f - 32) * 5 / 9);
console.log(c);
let kelvin = c + 273.15;
console.log(kelvin);

// Prvi zadatak / Odrediti temp u faren

f = (kelvin - 273.15) / (5 / 9) + 32;
console.log(f);



// Drugi zadatak 

let n = 15;
let a = 5;
let ostatakPoglavnja = (n - a - (a + 2));
console.log(ostatakPoglavnja);

// Treci zadatak

let p = 500;
let m = 600;
let k = 300;

let novac = (p + m);
let cenaDvaDzempera = (novac - k);
let cenaJednogDzempera = (cenaDvaDzempera / 2);
console.log(cenaJednogDzempera);
let pk = (p - cenaJednogDzempera);
let mk = (m - cenaJednogDzempera);
console.log(pk);
console.log(mk);