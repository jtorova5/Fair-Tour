import { alertError, showSmallAlertSuccess } from './alerts.js'

let contac = document.getElementById('contact-form')

contac.addEventListener('submit', async function (event) {
    event.preventDefault(); // Previene el comportamiento por defecto del formulario

    // Captura los datos del formulario
    const nombre = document.getElementById('nombre').value;
    const apellido = document.getElementById('apellido').value;
    const email = document.getElementById('email').value;
    const telefono = document.getElementById('telefono').value;
    const intereses = document.getElementById('intereses').value;

    // Construir el objeto de datos
    const formData = {
        nombre: nombre,
        apellido: apellido,
        email: email,
        telefono: telefono,
        intereses: intereses
    };

    // Enviar los datos al servidor JSON
    try {
        const response = await fetch('http://localhost:3000/datos', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(formData)
        });

        if (response.ok) {
            showSmallAlertSuccess('Sent');
            document.getElementById('contact-form').reset(); // Limpiar el formulario
        } else {
            throw new Error('Error');
        }

    } catch (error) {
        console.error('Error:', error);
        alertError("It's been a problem sending the data");
    }
});
