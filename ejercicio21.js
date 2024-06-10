const users = [
    { name: "Tony", years: 43 },
    { name: "Peter", years: 18 },
    { name: "Natasha", years: 14 },
    { name: "Bruce", years: 32 },
    { name: "Khamala", years: 16 },
  ];


let menoresDeEdad = "Usuarios menores de edad:\n";
let mayoresDeEdad = "Usuarios mayores de edad:\n";

for (let user of users) {
  if (user.years < 18) {
    menoresDeEdad += user.name + "\n";
  } else {
    mayoresDeEdad += user.name + "\n";
  }
}

console.log(menoresDeEdad);
console.log(mayoresDeEdad);

//El "\n" me he ayudado de ChatGPT, porque no me aclaraba a darle el intro el listado.
