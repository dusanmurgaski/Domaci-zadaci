// DRUGI ZADATAK
let req = new XMLHttpRequest();
req.addEventListener("readystatechange", () => {
  if (req.readyState === 4 && req.status === 200) {
    // ako je sve u redu
    let data = JSON.parse(req.responseText); // data - niz objekata
    data.forEach((user) => {
      // prolazak kroz sve objekte (korisnik)
      //console.log(user.website);
      if (user.website.includes(".com")) {
        // da li string sadrzi rec '.com'
        console.log(user.name);
      }
    });
  } else if (req.readyState === 4) {
    console.log("Server nije u stanju da obradi zahtev");
  }
});
req.open("GET", "https://jsonplaceholder.typicode.com/users");
req.send();

// 3.Ispisati korisnike čije ime sadrži reč „Clementin“.

let req3 = new XMLHttpRequest();
req3.addEventListener("readystatechange", () => {
  if (req3.readyState === 4 && req3.status === 200) {
    let data = JSON.parse(req3.responseText);
    data.forEach((user) => {
      if (user.name.includes("Clementin")) {
        console.log(user.name);
      }
    });
  } else if (req3.readyState === 4) {
    console.log("Server nije u stanju da obradi zahtev");
  }
});
req3.open("GET", "https://jsonplaceholder.typicode.com/users");
req3.send();

// 4. Ispisati korisnike koji rade u kompaniji čije ime sadrži reč „Group“, ili reč „LLC“.
let req4 = new XMLHttpRequest();
req4.addEventListener("readystatechange", () => {
  if (req4.readyState === 4 && req4.status === 200) {
    let data = JSON.parse(req4.responseText);
    data.forEach((user) => {
      if (
        user.company.name.includes("Group") ||
        user.company.name.includes("LLC")
      ) {
        console.log(user.name);
      }
    });
  } else if (req4.readyState === 4) {
    console.log("Server nije u stanju da obradi zahtev");
  }
});
req4.open("GET", "https://jsonplaceholder.typicode.com/users");
req4.send();
// 5. Ispisati sve različite gradove u kojima rade ovi korisnici.

let req5 = new XMLHttpRequest();
req5.addEventListener("readystatechange", () => {
  let nizGradova = [];
  if (req5.readyState === 4 && req5.status === 200) {
    let data = JSON.parse(req5.responseText); //
    data.forEach((user) => {
      if (!nizGradova.includes(user.address.city)) {
        nizGradova.push(user.address.city);
      }
    });
    console.log(nizGradova);
  } else if (req5.readyState === 4) {
    console.log("Server nije u stanju da obradi zahtev");
  }
});
req5.open("GET", "https://jsonplaceholder.typicode.com/users");
req5.send();

// 6. Ispisati broj korisnika koji žive na adresi čije su obe vrednosti geografske dužine i geografske širine negativni brojevi.
let korisnici = 0;
let req6 = new XMLHttpRequest();
req6.addEventListener("readystatechange", () => {
  if (req6.readyState === 4 && req6.status === 200) {
    let data = JSON.parse(req6.responseText);
    data.forEach((user) => {
      if (user.address.geo.lng < 0 && user.address.geo.lat < 0) {
        korisnici++;
      }
    });
    console.log(
      `Korisnici koji zive na adresi cije su obe vrednosti geografkse duzine i geografkse sirine negativni brojevi ${korisnici}`
    );
  } else if (req6.readyState === 4) {
    console.log("Server nije u stanju da obradi zahtev");
  }
});
req6.open("GET", "https://jsonplaceholder.typicode.com/users");
req6.send();
