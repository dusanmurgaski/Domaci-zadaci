// Za dan se kaže da je neuobičajen ako je bilo kiše i ispod -5 stepeni, ili bilo oblačno i iznad 25 stepeni, ili je bilo i kišovito i oblačno i sunčano. Napisati metod koji vraća true ukoliko je dan bio neuobičajen, u suprotnom vraća false.

// Napisati metod koji na ekranu ispisuje neuređenu listu, čija je sadržina (čiji su elementi/buleti) vrednosti temperature iz datog niza temperatura. 
// Maksimalnu (ili maksimalne ukoliko ih je više) vrednost u neurešenoj listi obojiti crvenom bojom. 
// Minimalnu (ili minimalne vrednosti ukoliko ih je više) obojiti plavom bojom. 

let dan = {
    datum: "2016/10/28",
    kisa: true,
    sunce: true,
    oblacno: true,
    temperatura: [15, 17, 20, 21, 15, 18, 15, 13, 13],
    neoDan: function () {
        let neuobičajenDan = false;
        let minusPet = false;
        let DvaesPet = false;
        this.temperatura.forEach(element => {
            if (element < -5) {
                minusPet = true;
            }
        });
        this.temperatura.forEach(element => {
            if (element > 25) {
                DvaesPet = true;
            }
        });
        if (minusPet == true && this.kisa == true || this.oblacno == true && DvaesPet == true || this.kisa == true && this.sunce == true && this.oblacno == true) {
            neuobičajenDan = true;
        }
        return neuobičajenDan;
    },
    neoLista: function () {
        let lista = "<ul>";
        let max = this.temperatura[0];
        let min = this.temperatura[0];
        this.temperatura.forEach(element =>{
            if (element > max ){
                max = element;
            }
        });
        this.temperatura.forEach(elem =>{
            if(elem < min){
                min = elem;
            }
        })
        for(let i = 0; i < this.temperatura.length; i++){
            if (this.temperatura[i] == max){
                lista += `<li style="color:red"> ${this.temperatura[i]}</li>`
            }
            else if (this.temperatura[i] == min ){
                lista += `<li style="color:blue"> ${this.temperatura[i]}</li>`
            }
            else {
            lista += `<li> ${this.temperatura[i]}</li>`
            }
        }
        lista += "</ul>";
        return document.body.innerHTML += `${lista}`;
        
    },
}
console.log(dan.neoDan());

dan.neoLista();



