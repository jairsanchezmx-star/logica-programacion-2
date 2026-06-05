let temperatura = +prompt("Programa que funciona para convertir gradis Celsius a Fahrenheit y Kelvin");
if (temperatura == !Number){
console.log(temperatura);

let Fah = (1.8 * temperatura) + 32;
let kel =  (temperatura+273.15);

alert(`La temperatura en grados Celsius ingresada ${temperatura} °C es igual que ${Fah}°F y ${kel}°K`);
} else{
    alert("Ingresa solamente números");
}