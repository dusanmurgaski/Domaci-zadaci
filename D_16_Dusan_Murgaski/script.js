let korisnici = 0;
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
      if (user.name.includes("Clementin")) {
        console.log(user.name);
      }
      if (
        user.company.name.includes("Group") ||
        user.company.name.includes("LLC")
      ) {
        console.log(user.name);
      }
      console.log(user.address.city);

      if (user.address.geo.lng < 0 && user.address.geo.lat < 0) {
        korisnici++;
      }
      console.log(
        `Korisnici koji zive na adresi cije su obe vrednosti geografkse duzine i geografkse sirine negativni brojevi ${korisnici}`
      );
    });
  } else if (req.readyState === 4) {
    console.log("Server nije u stanju da obradi zahtev");
  }
});
req.open("GET", "https://jsonplaceholder.typicode.com/users");
req.send();

// 3.Ispisati korisnike čije ime sadrži reč „Clementin“.

// 4. Ispisati korisnike koji rade u kompaniji čije ime sadrži reč „Group“, ili reč „LLC“.

// 5. Ispisati sve različite gradove u kojima rade ovi korisnici.

// 6. Ispisati broj korisnika koji žive na adresi čije su obe vrednosti geografske dužine i geografske širine negativni brojevi.
