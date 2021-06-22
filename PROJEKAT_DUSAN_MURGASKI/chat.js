class Chatroom {
  // Konstruktor
  constructor(r, u) {
    this.room = r;
    this.username = u;
    this.chats = db.collection("chats");
    this.unsub;
  }

  // Seteri
  set username(u) {
    this._username = u;
  }
  set room(r) {
    this._room = r;
  }

  // Geteri
  get username() {
    return this._username;
  }
  get room() {
    return this._room;
  }

  async addChat(mess) {
    let d = new Date();

    let chat = {
      message: mess,
      username: this.username,
      room: this.room,
      created_at: firebase.firestore.Timestamp.fromDate(d),
    };

    let response = await this.chats.add(chat);
    return response;
  }

  getChats(callback) {
    this.unsub = this.chats
      .where("room", "==", this.room)
      .orderBy("created_at")
      .onSnapshot((snapshot) => {
        //console.log(snapshot.docChanges());
        // Krećemo se nizom promena, i tražimo one promene koje su izazvale dodavanje dokumenta (added)
        snapshot.docChanges().forEach((change) => {
          if (change.type == "added") {
            //console.log("Promena u bazi");
            //console.log(change.doc.data()); //Ispis dokumenata koji su dodati u bazu
            callback(change.doc.data());
          }
        });
      });
  }
  updateUsername(uu) {
    this.username = uu;
    localStorage.setItem("username", uu);
    // postavljamo vrednost u lokalnoj memoriji
    // UZIMANJE vrednosti iz lokalne memorije - localStorage.username
  }
  updateRoom(ur) {
    this.room = ur;
    if (this.unsub) {
      this.unsub();
    }
  }
}

export { Chatroom };
