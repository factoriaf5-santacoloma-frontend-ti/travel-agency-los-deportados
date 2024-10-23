
//////// Función para calcular el coste del hotel
///////// Recibe como parámetro el número de noches
function calcularCosteHotel(noches) {
    //////// Multiplica el número de noches por 60 (precio por noche)
    let precioTotal = noches * 60;
    /////// Devuelve el precio total calculado
    return precioTotal;
}

///////// Pregunta al usuario cuántas noches quiere quedarse en el hotel
/////// La respuesta del usuario se convierte a un número con parseInt()
let noches = parseInt(prompt("¿Cuántas noches vas a pasar en el hotel?"));
///////// Llama a la función para calcular el coste del hotel y guarda el resultado en costeHotel
let costeHotel = calcularCosteHotel(noches);
//////// Muestra en la consola el coste total del hotel
console.log("El coste del hotel es: " + costeHotel + "€");

//////////// Función para calcular el coste del avión
///////// Recibe como parámetro el nombre de la ciudad
function calcularCosteAvion(ciudad) {
    let costeAvion; // Variable para almacenar el coste del vuelo

    //////// Usamos switch para determinar el coste del vuelo según la ciudad
    switch (ciudad.toLowerCase()) { // Convertimos a minúsculas para evitar errores
        case "paris":
            costeAvion = 180; // Si es París, el coste es 180€
            break;
        case "boston":
            costeAvion = 600; // Si es Boston, el coste es 600€
            break;
        case "londres":
            costeAvion = 120; // Si es Londres, el coste es 120€
            break;
        default:
            ////////// Si la ciudad no coincide con ninguna opción, el coste es 0
            costeAvion = 0;
            console.log("La ciudad no está disponible."); // Mensaje de advertencia
    }
    ////////// Devuelve el coste del vuelo
    return costeAvion;
}

//////////// Pregunta al usuario a qué ciudad va a viajar
let ciudad = prompt("¿A qué ciudad vas a viajar?");
////////// Llama a la función para calcular el coste del vuelo y guarda el resultado en costeAvion
let costeAvion = calcularCosteAvion(ciudad);
///////// Muestra en la consola el coste total del vuelo
console.log("El coste del avión es: " + costeAvion + "€");

/////////// Función para calcular el coste del alquiler de un coche
// ///////Recibe como parámetro el número de días de alquiler
function calcularCosteCoche(dias) {
    ////////// Calcula el coste base multiplicando los días por 40 (precio por día)
    let costeCoche = dias * 40;

    //////// Si alquila el coche por 7 o más días, aplica un descuento de 50€
    if (dias >= 7) {
        costeCoche -= 50;
    // Si alquila por 3 o más días, aplica un descuento de 20€
    //////// (pero solo si no se aplica el descuento anterior)
    } else if (dias >= 3) {
        costeCoche -= 20;
    }
    // Devuelve el coste total del alquiler del coche
    return costeCoche;
}

////// Pregunta al usuario cuántos días va a alquilar el coche
let diasAlquiler = parseInt(prompt("¿Cuántos días vas a alquilar el coche?"));
// Llama a la función para calcular el coste del coche y guarda el resultado en costeCoche
let costeCoche = calcularCosteCoche(diasAlquiler);
// Muestra en la consola el coste total del coche
console.log("El coste del coche es: " + costeCoche + "€");

/////// Función para calcular el coste total del viaje
// ///////Recibe como parámetros: número de noches, ciudad y días de alquiler
function calcularCosteViaje(noches, ciudad, diasAlquiler) {
    /////// Calcula el coste del hotel llamando a la función calcularCosteHotel()
    let totalHotel = calcularCosteHotel(noches);
    /////// Calcula el coste del avión llamando a la función calcularCosteAvion()
    let totalAvion = calcularCosteAvion(ciudad);
    /////// Calcula el coste del coche llamando a la función calcularCosteCoche()
    let totalCoche = calcularCosteCoche(diasAlquiler);
    //////// Suma todos los costes para obtener el coste total del viaje
    let costeTotal = totalHotel + totalAvion + totalCoche;
    ///////// Devuelve el coste total
    return costeTotal;
}

///////// Llama a la función para calcular el coste total del viaje y guarda el resultado en costeTotalViaje
let costeTotalViaje = calcularCosteViaje(noches, ciudad, diasAlquiler);
/////////// Muestra un mensaje en pantalla con el coste total del viaje
alert("El coste total de tu viaje es: " + costeTotalViaje + "€");