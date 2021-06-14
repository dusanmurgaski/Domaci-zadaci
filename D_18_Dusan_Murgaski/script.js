let div = document.querySelector("#div1");
let form = document.querySelector("#div1 form");
let inputText = document.querySelector("#slova");
let inputCenaOd = document.querySelector("#cenaOd");
let inputCenaDo = document.querySelector("#cenaDo");

function promiseZadatak(resource) {
  return new Promise((resolve, reject) => {
    let request = new XMLHttpRequest();
    request.addEventListener("readystatechange", function () {
      if (this.readyState == 4 && this.status == 200) {
        let data = JSON.parse(this.responseText);
        resolve(data);
      } else if (this.readyState == 4) {
        reject("could not fetch data");
      }
    });
    request.open("GET", resource);
    request.send();
  });
}

let click = (event) => {
  event.preventDefault();
  let slova = inputText.value;
  let cenaOd = inputCenaOd.value;
  let cenaDo = inputCenaDo.value;
  let itemsStock = [];
  promiseZadatak("json/stock.json")
    .then((data) => {
      data.forEach((elem) => {
        if (elem.stock != 0) {
          itemsStock.push(elem);
        }
      });
      return promiseZadatak("json/prices.json");
    })
    .then((data) => {
      let artikliRec = [];
      itemsStock.forEach((elem) => {
        if (elem.item.includes(slova)) {
          artikliRec.push(elem);
        }
      });
      let unLi = document.createElement("ul");
      data.forEach((elem) => {
        artikliRec.forEach((ele) => {
          if (elem.price > cenaOd && elem.price < cenaDo && elem.id == ele.id) {
            let p = document.createElement("p");
            let list = document.createElement("li");
            unLi.appendChild(list);
            list.textContent = ele.item;
          }
        });
      });
      div.appendChild(unLi);
      let tabela = document.createElement("table");
      let th1 = document.createElement("th");
      let th2 = document.createElement("th");
      let th3 = document.createElement("th");
      tabela.appendChild(th1);
      tabela.appendChild(th2);
      tabela.appendChild(th3);
      th1.textContent = "Naziv artikla";
      th2.textContent = "Na lageru:";
      th3.textContent = "Cena:";
      data.forEach((elem) => {
        artikliRec.forEach((ele) => {
          if (elem.price > cenaOd && elem.price < cenaDo && elem.id == ele.id) {
            let tr = document.createElement("tr");
            let td1 = document.createElement("td");
            tr.appendChild(td1);
            td1.textContent = elem.item;
            let td2 = document.createElement("td");
            tr.appendChild(td2);
            td2.textContent = ele.stock;
            let td3 = document.createElement("td");
            tr.appendChild(td3);
            td3.textContent = elem.price;
            tabela.appendChild(tr);
          }
        });
        div.appendChild(tabela);
      });
    })
    .catch((err) => {
      console.log(err);
    });
};
form.addEventListener("submit", click);

// event.preventDefault();
// let slova = inputText.value;
// let cenaOd = inputCenaOd.value;
// let cenaDo = inputCenaDo.value;
// let itemsStock = [];
// promiseZadatak("json/stock.json")
//   .then((data) => {
//     data.forEach((item) => {
//       if (item.stock != 0) {
//         itemsStock.push(item);
//       }
//     });
//     return promiseZadatak("json/prices.json");
//   })
//   .then((data) => {
//     let recArtikli = [];
//     itemsStock.forEach((elem) => {
//       if (elem.item.includes(slova)) {
//         recArtikli.push(elem);
//       }
//     });
//     let ul = document.createElement("ul");
//     data.forEach((elem) => {
//       recArtikli.forEach((ele) => {
//         if (elem.price > cenaOd && elem.price < cenaDo) {
//           let li = document.createElement("li");

//           ul.appendChild(li);
//           li.textContent.ele;
//         }
//       });
//     });
//     div.appendChild(ul);
//   });
