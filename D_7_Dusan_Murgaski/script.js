// Prvi zadatak
let n = 40;
let v = 59;

if (v / n >= 3) {
    document.body.innerHTML = `<p style="color:green"> DA</p>`

}
else {
    document.body.innerHTML = `<p style="color:red"> NE , lokal mora da napusti  ${Math.ceil(n - v / 3)} osoba</p>`
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