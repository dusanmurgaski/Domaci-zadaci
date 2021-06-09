class Pacijent {
  constructor(i, v, t) {
    this.ime = i;
    this.visina = v;
    this.tezina = t;
  }
  set ime(x) {
    this._ime = x;
  }
  set visina(x) {
    if (x > 0 && x < 250) {
      this._visina = x;
    } else {
      this._visina = 0;
    }
  }
  set tezina(x) {
    if (x > 0 && x < 550) {
      this._tezina = x;
    } else {
      this._tezina = 0;
    }
  }
  get ime() {
    return this._ime;
  }
  get visina() {
    return this._visina;
  }
  get tezina() {
    return this._tezina;
  }
  Stampaj() {
    console.log(this.ime, this.visina, this.visina);
  }
  Bmi() {
    let visinaM = this.visina / 100;
    let bmi = this.tezina / Math.pow(visinaM, 2);
    return bmi;
  }
  Kritican() {
    if (this.Bmi() < 15 || this.Bmi() > 40) {
      return true;
    } else {
      return false;
    }
  }
}

let pacijent1 = new Pacijent("laza", 170, 100);
let pacijent2 = new Pacijent("mika", 190, 350);
let pacijent3 = new Pacijent("prrra", 150, 35);
let niz = [pacijent1, pacijent2, pacijent3];

let najlaksi = pacijent1;
niz.forEach((elem) => {
  if (elem.tezina < najlaksi.tezina) {
    najlaksi = elem;
  }
});
console.log(najlaksi);

let najveciBMI = pacijent1.Bmi();
niz.forEach((elem) => {
  if (elem.Bmi() > najveciBMI) {
    najveciBMI = elem;
  }
});
console.log(najveciBMI);

niz.forEach((elem) => {
  if (elem.ime.includes("a" || "A")) {
    console.log(elem.ime);
  }
});

function srednjaVisina(niz) {
  let arSr = 0;
  let sumaVisina = 0;
  niz.forEach((elem) => {
    sumaVisina += elem.visina;
  });
  arSr = sumaVisina / niz.length;
  return arSr;
}
console.log(srednjaVisina(niz));
