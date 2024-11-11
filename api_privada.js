const accessKey = 'ecc1c5fe1cfcced93937aa586563a43d';
let isValidNumber = false;

async function validatePhoneNumber() {
    const phoneNumber = document.getElementById('phoneNumber').value;
    const url = `https://apilayer.net/api/validate?access_key=${accessKey}&number=${phoneNumber}`;
    const options = {
        method: 'GET'
    };

    try {
        const response = await fetch(url, options);
        const data = await response.json();
        document.getElementById('result').textContent = JSON.stringify(data, null, 2);
        isValidNumber = data.valid; //la API devuelve un campo 'valid' que es true si el número es válido
    } catch (error) {
        console.error(error);
        document.getElementById('result').textContent = 'Error al validar el número.';
        isValidNumber = false;
    }
}

function redirectToApi() {
    if (isValidNumber) {
        window.location.href = 'api.html';
    } else {
        alert('Número de teléfono no válido. Por favor, inténtelo de nuevo.');
    }
}
