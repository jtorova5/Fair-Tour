import '../scss/tour.scss'

let datosRecibidos 

let divVideo = document.querySelector('#div__infoTour')

window.addEventListener('DOMContentLoaded', (event) => {
    // Recupera el objeto del localStorage
    const storedObject = localStorage.getItem('selectedObject');
    
    if (storedObject) {
        datosRecibidos = JSON.parse(storedObject);
        console.log("Objeto recibido:", datosRecibidos);
        paintInfoTour(datosRecibidos)
        // document.getElementById('someElementId').textContent = objeto.someProperty;
    } else {
        console.log("No se encontró ningún objeto en el localStorage.");
    }
});

function paintInfoTour(datosRecibidos) {
    divVideo.innerHTML = ""
    //se llena el html con los datos conocidos del objeto que llega
    divVideo.innerHTML += `
        <div class="col-sm-6 col-md-7 rounded-4 div__video">
            <video src="${datosRecibidos.mainVideo}" autoplay muted loop class="w-100 h-100 rounded-4" "></video>
        </div>

        <div class="col-sm-4 offset-sm-2 col-md-5 offset-md-0">
            <div class="container">
                <div class="box">
                    <span class="title">${datosRecibidos.tour}</span>
                    <div>
                        <strong>Duración: ${datosRecibidos.duration} días</strong>
                        <strong>Recorrido</strong>
                        <ul>
                            ${datosRecibidos.route.map(i => `<li>${i.description}</li>`).join('')}
                        </ul>
                        <strong>Precio : $ ${datosRecibidos.price}</strong>
                    </div>
                </div>
                <div class="col-sm-4 col-md-5 w-100 ">
                <div>
                    <button class="btn btn-primary rounded-3 p-2 w-75" data-reserva="${datosRecibidos}">¡RESERVAR AHORA!</button>
                </div>
                </div>
            </div>
        </div>`;
          
}

// mode dark------------------------------------------------------------
document.getElementById("toggle-checkbox").addEventListener("change", function () {
    // let toggle = document.getElementById("toggle-checkbox")
    let navbar = document.getElementById("navbar")
    navbar.classList.toggle("bg-dark")
    // color change to the body
    document.body.classList.toggle("bg-dark")
    document.body.classList.toggle("text-light");

})

 // JavaScript para ocultar el preloader cuando la página esté completamente cargada
window.addEventListener('load', function() {
    document.body.classList.add('loaded');
});
