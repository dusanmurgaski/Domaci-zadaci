import { Chatroom } from "./chat.js";
import { ChatUI } from "./ui.js";

// DOM
let ulChatList = document.querySelector("ul");
let sbmitUsername = document.querySelector("#formUsername");
let usernameInput = document.querySelector("#inputUsername");
let sbmit = document.querySelector("#formMessage");
let poruka = document.querySelector("#inputMessage");
let navRooms = document.querySelector("nav");

// Citamo iz lokalne memorije informacije o usernameu ukoliko postoji
let room = () => {
  if (localStorage.room) {
    return localStorage.room;
  } else {
    return "general";
  }
};
function username() {
  if (localStorage.username) {
    return localStorage.username;
  } else {
    return "anonymus";
  }
}

// Kreiramo objekat klase Chatroom
let chatroom2 = new Chatroom(room(), username());
// Kreiranje objekta klase ChatUI za prikaz elemenata na stranici
let chatUI1 = new ChatUI(ulChatList);

// Kada se ucitava prvi put stranica ispisujemo cetove na njoj
chatroom2.getChats((data) => {
  chatUI1.templateLI(data);
});

// Kada se klikne dugme promeni ime
sbmitUsername.addEventListener("submit", (e) => {
  e.preventDefault();
  let name = usernameInput.value;
  let nameLength = name.length;
  if (nameLength < 2 || nameLength > 10 || !name.replace(/\s/g, "").length) {
    alert("Lose unet username");
  } else {
    chatroom2.updateUsername(name);
    sbmitUsername.reset();
    let pUsername = document.createElement("p");
    pUsername.style.fontSize = "20px";
    pUsername.textContent = `Odabrani username je: ${name}`;
    triSek.appendChild(pUsername);
    document.getElementById("triSek").className += " hidden";
    setTimeout(function () {
      let deleting = document.getElementById("triSek");
      deleting.parentNode.removeChild(deleting);
    }, 3000);
  }
});

// kada se pritisne poslati poruku polsati poruku

sbmit.addEventListener("submit", (e) => {
  e.preventDefault();
  let por = poruka.value;
  if (!por.replace(/\s/g, "").length) {
    alert("prazna poruka");
  } else {
    chatroom2
      .addChat(por)
      .then(() => sbmit.reset())
      .catch((error) => console.log(error));
  }
});

// Promena sobe
navRooms.addEventListener("click", (e) => {
  if (e.target.tagName == "BUTTON") {
    //1. izbrisati sve poruke sa ekrana
    chatUI1.clearUl();
    //2. Pozvati promenu sobe
  }
  chatroom2.updateRoom(e.target.id);
  //3. Prikazati cetove
  chatroom2.getChats((data) => {
    chatUI1.templateLI(data);
  });
  localStorage.setItem("room", e.target.id);
});

// Promena soba na klik
// GENERAL

// let generalBtn = document.querySelector("#btnGeneral");
// generalBtn.addEventListener("click", () => {
//   chatUI1.clearUl();
//   chatroom2.updateRoom("general");
//   console.log(chatroom2.room);
//   chatroom2.getChats((data) => {
//     chatUI1.templateLI(data);
//   });
// });
// // // TESTS
// let testsBtn = document.querySelector("#btnTests");
// testsBtn.addEventListener("click", () => {
//   chatUI1.clearUl();
//   chatroom2.updateRoom("tests");
//   console.log(chatroom2.room);
//   chatroom2.getChats((data) => {
//     chatUI1.templateLI(data);
//   });
// });
// // // JS

// let jsBtn = document.querySelector("#btnJs");
// jsBtn.addEventListener("click", () => {
//   chatUI1.clearUl();
//   chatroom2.updateRoom("js");
//   console.log(chatroom2.room);
//   chatroom2.getChats((data) => {
//     chatUI1.templateLI(data);
//   });
// });

// // Homework
// let homeworkBtn = document.querySelector("#btnHomeworks");
// homeworkBtn.addEventListener("click", () => {
//   chatUI1.clearUl();
//   chatroom2.updateRoom("homeworks");
//   console.log(chatroom2.room);
//   chatroom2.getChats((data) => {
//     chatUI1.templateLI(data);
//   });
// });
