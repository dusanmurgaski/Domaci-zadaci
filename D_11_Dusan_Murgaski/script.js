// 1.Zadatak
// Napisati funkciju suma kojoj se prosleđuju parametri n i m, dok funkcija vraća sumu kubova brojeva od n do m.
// Pozvati funkciju i njen rezultat ispisati u konzoli.

function suma(n, m) {
    let suma = 0;
    for (n; n <= m; n++) {
        suma += Math.pow(n, 3);
    }
    return suma;
}

// 2.Zadatak
// Napisati funkciju godine kojoj se prosleđuje parametar godRodjenja.
// Parametar godRodjenja predstavlja godinu rođenja neka osobe. Funkcija treba da vrati koliko godina ima ta (prosleđena) osoba. 
// Broj godina osobe izračunati na osnovu prosleđene godine rođenja i trenutne godine koju preuzimate sa računara. 
// Pozvati funkciju i dobijeni rezultat ispisati u konzoli.

function godine(godRodjenja) {
    let datum = new Date();
    let godina = datum.getFullYear();
    console.log(`Korisnik ima ${godina - godRodjenja} godina.`);
}
godine(2002);

// 3.Zadatak
// Napisati funkciju deljiv kojoj se prosleđuju tri parametra n, m i k. Funkcija na ekranu treba da ispiše broj brojeva od n do m koji su deljivi brojem k. Pozvati funkciju.

function deljiv(n, m, k) {
    let brojBrojeva = 0;
    for (n; n <= m; n++) {
        if (n % k == 0) {
            brojBrojeva++;
        }
    }
    document.body.innerHTML += `Od ${n} do ${m} ima ukupno ${brojBrojeva} brojeva koji su deljivi sa brojem ${k}`;
}
deljiv(1, 10, 2);
