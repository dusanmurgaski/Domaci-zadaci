let knjiga1 = {
  naziv: "Muka",
  autor: "Zan Pol Sartr",
  slicica: "zan-pol-sartr-muka-slika-130418370.jpg",
  polje: true,
  // nazivMeto: function () {
  //   this.knjiga1.forEach((elem) => {
  //     console.log(elem);
  //   });
  // },
};

let knjiga2 = {
  naziv: "Tako je govorio Zaratustra",
  autor: "Fridrih Nice",
  slicica: "tako_je_govorio_zaratustra_vv.jpg",
  polje: true,
};
let knjiga3 = {
  naziv: "1984",
  autor: "Dzordz Orvel",
  slicica: "280130_600_600px.jpg",
  polje: false,
};

let knjige = [knjiga1, knjiga2, knjiga3];
let telo = document.querySelector("body");
let tabela = document.createElement("TABLE");
telo.appendChild(tabela);

for (let i = 0; i < knjige.length; i++) {
  let tr = document.createElement("tr");
  let td = document.createElement("td");
  let td2 = document.createElement("td");
  let paragraf = document.createElement("p");
  let slika = document.createElement("img");
  paragraf.textContent = `${knjige[i].naziv} ${knjige[i].autor}`;
  slika.src = `${knjige[i].slicica}`;

  if (i % 2 == 0) {
    tr.style.backgroundColor = "purple";
  } else {
    tr.style.backgroundColor = "magenta";
  }

  if (knjige[i].polje == true) {
    paragraf.style.color = "blue";
  } else {
    paragraf.style.color = " grey";
  }

  tabela.appendChild(tr);
  tr.appendChild(td);
  tr.appendChild(td2);
  td2.appendChild(paragraf);
  td.appendChild(slika);
}
