// Función flecha que carga el archivo JSON, filtra y muestra solo las posiciones pares
const cargarYMostrarPares = () => {
    fetch('https://raw.githubusercontent.com/juanmontes55/Sistemas-distribuidos/main/json.json') // Cargar el archivo JSON
        .then(response => response.json()) // Convertir la respuesta en un objeto JSON
        .then(data => {
            const lista = document.getElementById("listaPersonas"); // Seleccionar el elemento del DOM

            // Filtrar los elementos que están en posiciones pares (0, 2, 4, etc.)
            const pares = data.filter((persona, index) => index % 2 === 0);

            // Iterar sobre los elementos pares y mostrarlos en el DOM
            pares.forEach(persona => {
                let li = document.createElement("li"); // Crear un elemento 'li' para cada persona
                li.textContent = `Nombre: ${persona.nombre}, Cédula: ${persona.cedula}, Fecha de Nacimiento: ${persona.fechaNacimiento}, Estatura: ${persona.estatura}m`;
                lista.appendChild(li); // Agregar el 'li' al elemento 'ul' en el DOM
            });
        })
        .catch(error => console.error('Error al cargar el archivo JSON:', error)); // Manejar errores
};

// Ejecutar la función flecha cuando se cargue la página
window.onload = cargarYMostrarPares;
