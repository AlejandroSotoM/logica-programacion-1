
// Obtener los tres números del usuario
const num1 = Number(prompt("Introduce el primer número:"));
const num2 = Number(prompt("Introduce el segundo número:"));
const num3 = Number(prompt("Introduce el tercer número:"));


// Mostrar en consola los números originales
console.log("Números ingresados:", num1, num2, num3);

const numeros = [num1, num2, num3];
const resultadoDiv = document.getElementById("resultado");

// Verificar si todos los números son iguales
if (num1 === num2 && num2 === num3) {
    console.log("Los tres números son iguales.");
    resultadoDiv.innerHTML = "<p>Los tres números son iguales: " + numeros + "</p>";
} else {
    // Ordenar de mayor a menor
    const descendente = [...numeros].sort((a, b) => b - a);
    // Ordenar de menor a mayor4
    const ascendente = [...numeros].sort((a, b) => a - b);

    console.log("De mayor a menor:", descendente.join(", "));
    console.log("De menor a mayor:", ascendente.join(", "));

    resultadoDiv.innerHTML = `
        <p>De mayor a menor: ${descendente.join(", ")}</p>
        <p>De menor a mayor: ${ascendente.join(", ")}</p>
    `;
}

