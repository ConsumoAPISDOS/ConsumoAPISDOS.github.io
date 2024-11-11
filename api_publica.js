// URL base de la API para escanear subdominios
const url = 'https://subdomain-finder5.p.rapidapi.com/subdomain-finder?domain=';

// Opciones de configuración para la solicitud HTTP
const options = {
    method: 'GET', // Método de la solicitud
    headers: {
        'x-rapidapi-key': '50b96d75bamsh9c8e43650d44af6p1e9a3ejsnf3d9ca58feee',
        'x-rapidapi-host': 'subdomain-finder5.p.rapidapi.com'
    }
};

// Agrega un listener para el evento de envío del formulario
document.getElementById('domainForm').addEventListener('submit', async (event) => {
    event.preventDefault(); // Evitar el envío del formulario y la recarga de la página

    // Obtiene el dominio ingresado por el usuario y elimina espacios en blanco
    const domain = document.getElementById('domainInput').value.trim();
    // Construye la URL completa para la solicitud a la API, asegurando que el dominio esté correctamente codificado
    const fetchUrl = url + encodeURIComponent(domain);

    try {
        // Realiza la solicitud a la API usando fetch
        const response = await fetch(fetchUrl, options);
        // Convierte la respuesta a formato JSON
        const result = await response.json(); // Cambia a JSON si la respuesta es JSON

        // Muestra el resultado en el elemento con ID 'result', formateando como una cadena JSON legible
        document.getElementById('result').textContent = JSON.stringify(result, null, 2);
    } catch (error) {
        // Maneja errores que pueden ocurrir durante la solicitud o procesamiento
        console.error(error); // Registra el error en la consola
        // Muestra un mensaje de error al usuario
        document.getElementById('result').textContent = 'Error al obtener datos. Inténtalo de nuevo.';
    }
});
