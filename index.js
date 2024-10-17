let driver1 = "HASSAN";
console.log("el nombre del driver es " + driver1);

let driver2 = prompt("cual es el nombre del navegador");
console.log("el nombre del navegador es " + driver2);

if (driver1.length > driver2.length) {
    console.log("el driver tiene un nombre más largo");
} else if (driver1.length < driver2.length) {
    console.log("el navegador tiene un nombre más largo");
} else {
    console.log("vaya, ambos nombres son iguales en longitud");
}
