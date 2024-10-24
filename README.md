# 🧳 Travel Cost Calculator
![bannerjorge](https://github.com/user-attachments/assets/47ffc8cf-bcc6-4ba2-8115-1f839266ddc8)

Bienvenido al proyecto **Travel Cost Calculator**, una aplicación sencilla en JavaScript para calcular el coste total de un viaje. Esta herramienta toma en cuenta el número de noches de hotel, el destino del vuelo y los días de alquiler de un coche para ofrecer una estimación del coste total. Es un proyecto ideal para aprender conceptos básicos de programación, incluyendo funciones, estructuras de control y manipulación de datos en JavaScript.

## 🚀 Funcionalidades

El proyecto proporciona las siguientes funcionalidades:

1. **Calcular el coste del hotel:** Basado en el número de noches y un precio fijo por noche.
2. **Calcular el coste del vuelo:** Determina el costo del billete de avión según la ciudad de destino seleccionada (París, Boston o Londres).
3. **Calcular el coste del alquiler del coche:** Calcula el coste del alquiler de un coche, con descuentos aplicables según la duración del alquiler.
4. **Calcular el coste total del viaje:** Combina los costes anteriores para mostrar el precio final del viaje.

## 📋 Cómo ejecutar el proyecto

1. Clona este repositorio en tu máquina local:
   ```bash
   git clone https://github.com/tu_usuario/travel-cost-calculator.git
2. Abre el archivo index.html en tu navegador para ver la aplicación en funcionamiento.

3. Completa los siguientes pasos interactivos para calcular el coste total del viaje:

Ingresa el número de noches en el hotel.
Selecciona la ciudad de destino para el vuelo.
Ingresa el número de días de alquiler del coche.

4. El resultado se mostrará tanto en la consola del navegador como en un cuadro de alerta.

## 🧩 Descripción del Código
El código se organiza en funciones para mantenerlo modular y facilitar su comprensión. A continuación se detalla la funcionalidad de cada parte:

1. Calcular el coste del hotel
La función calcularCosteHotel(noches) recibe el número de noches y calcula el coste multiplicando por un precio fijo de 60€.

 ```bash
function calcularCosteHotel(noches) {
    let precioTotal = noches * 60;
    return precioTotal;
} 

 ```

2. Calcular el coste del vuelo
La función calcularCosteAvion(ciudad) utiliza una estructura switch para determinar el precio del billete de avión en función de la ciudad seleccionada:

París: 180€
Boston: 600€
Londres: 120€
Si la ciudad no coincide con ninguna de las opciones, el coste es 0.

 ```bash
function calcularCosteAvion(ciudad) {
    let costeAvion;
    switch (ciudad.toLowerCase()) {
        case "paris":
            costeAvion = 180;
            break;
        case "boston":
            costeAvion = 600;
            break;
        case "londres":
            costeAvion = 120;
            break;
        default:
            costeAvion = 0;
            console.log("La ciudad no está disponible.");
    }
    return costeAvion;
}

 ```

3. Calcular el coste del alquiler de coche
La función calcularCosteCoche(dias) calcula el coste base multiplicando los días de alquiler por 40€. También se aplican descuentos:

Si se alquila por 7 o más días, se descuenta 50€.
Si se alquila por 3 o más días, se descuenta 20€ (siempre que no se aplique el descuento anterior).
 ```bash
function calcularCosteCoche(dias) {
    let costeCoche = dias * 40;
    if (dias >= 7) {
        costeCoche -= 50;
    } else if (dias >= 3) {
        costeCoche -= 20;
    }
    return costeCoche;
}

```
4. Calcular el coste total del viaje
La función calcularCosteViaje(noches, ciudad, diasAlquiler) calcula el precio total del viaje sumando los costes del hotel, vuelo y alquiler del coche.
 ```bash
function calcularCosteViaje(noches, ciudad, diasAlquiler) {
    let totalHotel = calcularCosteHotel(noches);
    let totalAvion = calcularCosteAvion(ciudad);
    let totalCoche = calcularCosteCoche(diasAlquiler);
    let costeTotal = totalHotel + totalAvion + totalCoche;
    return costeTotal;
}

```
5. Ejecución de la aplicación
El código principal interactúa con el usuario a través de prompts para recoger la información necesaria y luego llama a las funciones para calcular y mostrar el coste total.
 ```bash
let noches = parseInt(prompt("¿Cuántas noches vas a pasar en el hotel?"));
let costeHotel = calcularCosteHotel(noches);
console.log("El coste del hotel es: " + costeHotel + "€");

let ciudad = prompt("¿A qué ciudad vas a viajar?");
let costeAvion = calcularCosteAvion(ciudad);
console.log("El coste del avión es: " + costeAvion + "€");

let diasAlquiler = parseInt(prompt("¿Cuántos días vas a alquilar el coche?"));
let costeCoche = calcularCosteCoche(diasAlquiler);
console.log("El coste del coche es: " + costeCoche + "€");

let costeTotalViaje = calcularCosteViaje(noches, ciudad, diasAlquiler);
alert("El coste total de tu viaje es: " + costeTotalViaje + "€");
 ```
![8](https://github.com/user-attachments/assets/abfab039-65ef-4830-b007-00065d2cc749)


🌟 Próximas Funcionalidades
Formulario web: Reemplazar los prompt() por un formulario en HTML para mejorar la interfaz de usuario.
Validación de entradas: Añadir comprobaciones para asegurar que los datos introducidos son válidos.
Mejoras de estilo: Usar CSS para darle un mejor aspecto visual a la aplicación.



