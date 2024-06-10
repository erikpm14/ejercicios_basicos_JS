const movies = [
    { name: "Titan A.E.", durationInMinutes: 130 },
    { name: "Nightmare before Christmas", durationInMinutes: 225 },
    { name: "Inception", durationInMinutes: 165 },
    { name: "The Lord of the Rings", durationInMinutes: 967 },
    { name: "Star Wars: A New Hope", durationInMinutes: 214 },
    { name: "Terminator", durationInMinutes: 140 },
    { name: "Spirited Away", durationInMinutes: 80 },  
    { name: "The Matrix", durationInMinutes: 136 },  
    { name: "Amélie", durationInMinutes: 110 },  
    { name: "Eternal Sunshine of the Spotless Mind", durationInMinutes: 108 },
  ];
  

  let peliculapequeña = "Peliculas pequeñas:\n";
let peliculamediana = "Peliculas medianas:\n";
let peliculagrande = "Peliculas grandes:\n";

for (let movie of movies) {
  if (movie.durationInMinutes < 100) {
    peliculapequeña += movie.name + "\n";
  } else if (movie.durationInMinutes > 100 && movie.durationInMinutes <= 200) {
    peliculamediana += movie.name + "\n";
  } else {
    peliculagrande += movie.name + "\n";
  }
}

console.log(peliculapequeña);
console.log(peliculamediana);
console.log(peliculagrande);

  
  //El "\n" me he ayudado de ChatGPT, porque no me aclaraba a darle el intro el listado.