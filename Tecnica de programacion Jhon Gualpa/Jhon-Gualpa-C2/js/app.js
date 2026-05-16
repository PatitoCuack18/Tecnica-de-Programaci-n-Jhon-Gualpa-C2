let produccion = [];
let diasTexto = ["Lunes", "Martes", "Miércoles", "Jueves", "Viernes", "Sábado", "Domingo"];

document.getElementById("id-btn-cargar-produccion").addEventListener("click", () => {
    let cantidad = document.getElementById("id-select-dias").value;
    produccion = [];
    for (let i = 0; i < cantidad; i++) {
        let valor = parseInt(prompt("Ingrese producción del día " + diasTexto[i]));
        produccion.push(valor);
    }
});

document.getElementById("id-btn-presentar-produccion").addEventListener("click", () => {
    let texto = "";
    for (let i = 0; i < produccion.length; i++) {
        texto += diasTexto[i] + ": " + produccion[i] + "\n";
    }
    document.getElementById("id-listado-produccion").value = texto;
});

document.getElementById("id-btn-procesar").addEventListener("click", () => {
    let resultados = "";
    let total = 0;
    for (let i = 0; i < produccion.length; i++) {
        total = total + produccion[i];
    }
    resultados = resultados + "Producción total: " + total + "\n";

    let mayor = produccion[0];
    let diaMayor = diasTexto[0];
    for (let i = 1; i < produccion.length; i++) {
        if (produccion[i] > mayor) {
            mayor = produccion[i];
            diaMayor = diasTexto[i];
        }
    }
    resultados = resultados + "Mayor producción: " + mayor + " (" + diaMayor + ")\n";

    let menor = produccion[0];
    let diaMenor = diasTexto[0];
    for (let i = 1; i < produccion.length; i++) {
        if (produccion[i] < menor) {
            menor = produccion[i];
            diaMenor = diasTexto[i];
        }
    }
    resultados = resultados + "Menor producción: " + menor + " (" + diaMenor + ")\n";

    let promedio = total / produccion.length;
    resultados = resultados + "Promedio semanal: " + promedio + "\n";

    let contador = 0;
    for (let i = 0; i < produccion.length; i++) {
        if (produccion[i] > promedio) {
            contador = contador + 1;
        }
    }
    resultados = resultados + "Días sobre el promedio: " + contador + "\n";

    let criticos = 0;
    for (let i = 0; i < produccion.length; i++) {
        if (produccion[i] < 100) {
            criticos = criticos + 1;
        }
    }
    resultados = resultados + "Días críticos: " + criticos + "\n";

    let repetido = false;
    for (let i = 0; i < produccion.length; i++) {
        for (let j = i + 1; j < produccion.length; j++) {
            if (produccion[i] == produccion[j]) {
                repetido = true;
            }
        }
    }
    if (repetido == true) {
        resultados = resultados + "Existen valores repetidos\n";
    } else {
        resultados = resultados + "No existen valores repetidos\n";
    }

    document.getElementById("id-resultados").value = resultados;
});
