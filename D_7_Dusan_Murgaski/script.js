// Prvi zadatak
let n = 40;
let v = 117;

if (v / n >= 3) {
    document.body.innerHTML = "<p> DA</p>"

}
else {
    document.body.innerHTML = `<p> NE , lokal mora da napusti  "${n - v / 3}"</p>`
}


// drugi zadatak


let godine = new Date();
let godina = godine.getFullYear();
let godinaRodjenja = 2004;

if (godina - godinaRodjenja >= 18) {
    console.log("osoba je punoletna");
}
else {
    console.log("osoba je maloletna");
}