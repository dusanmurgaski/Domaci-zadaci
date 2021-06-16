let coll = db.collection("movies");
console.log(coll);

let m2 = {
  Name: "Lazain film",
  Director: {
    ime: "luka",
    prezime: "lazarevic",
  },
  Release_year: 1993,
  Genres: ["horor", "komedija", "Sapunica"],
  Rating: 8,
};
let m3 = {
  Name: "Flipov film",
  Director: {
    ime: "Filip",
    prezime: "Simic",
  },
  Release_year: 1991,
  Genres: ["horor", "akcija", "snuff"],
  Rating: 10,
};

db.collection("movies")
  .doc("m3")
  .set(m3)
  .then(function () {
    console.log("uspesno dodat dokument");
  })
  .catch(function (error) {
    console.log(`ne moze se dodati dokument: ${error}`);
  });

db.collection("movies")
  .doc("m3")
  .update({ Rating: 6 })
  .then(function () {
    console.log("uspesno dodat dokument");
  })
  .catch(function (error) {
    console.log(`ne moze se dodati dokument: ${error}`);
  });

db.collection("movies")
  .doc("m3")
  .update({
    Director: {
      name: "Srdjan",
      prezime: "Maric",
    },
  })
  .then(function () {
    console.log("uspesno dodat dokument");
  })
  .catch(function (error) {
    console.log(`ne moze se dodati dokument: ${error}`);
  });

let movie = db.doc("movies/m2");
movie.update({
  Genres: firebase.firestore.FieldValue.arrayUnion("akcija"),
});

movie.update({
  Genres: firebase.firestore.FieldValue.arrayRemove("komedija"),
});
