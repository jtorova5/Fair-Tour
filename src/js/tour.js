import '../scss/tour.scss'
import * as bootstrap from 'bootstrap'

let datosRecibidos

let divVideo = document.querySelector('#div__infoTour')
let divCarrousel = document.querySelector('#div__carrousel')

window.addEventListener('DOMContentLoaded', () => {
    // Recupera el objeto del localStorage
    const storedObject = localStorage.getItem('selectedObject')

    if (storedObject) {
        datosRecibidos = JSON.parse(storedObject);
        console.log("Objeto recibido:", datosRecibidos)
        paintInfoTour(datosRecibidos)
        paintCarrousel(datosRecibidos)
        // document.getElementById('someElementId').textContent = objeto.someProperty
    } else {
        console.log("No se encontró ningún objeto en el localStorage.")
    }
})


function paintCarrousel(datosRecibidos) {
    divCarrousel.innerHTML = "";  // clear

    // dup
    const images = datosRecibidos.route.map(item => `<img src="${item.img}" alt="">`).join('');
    divCarrousel.innerHTML = images + images;
}



function paintInfoTour(datosRecibidos) {
    divVideo.innerHTML = ""
    //se llena el html con los datos conocidos del objeto que llega
    divVideo.innerHTML += `
    <section class="d-flex mb-5">
        <div class="col-sm-6 col-md-7 rounded-4 div__video">
            <video src="${datosRecibidos.mainVideo}" autoplay muted loop class="w-100 h-100 rounded-4" "></video>
        </div>

        <div class="col-sm-4 offset-sm-2 col-md-5 offset-md-0">
            <div class="container">
                <div class="box">
                    <span class="title">${datosRecibidos.tour}</span>
                    <div>
                        <strong>Duración:</strong> ${datosRecibidos.duration} días
                        <strong>Recorrido:</strong>
                        <ul>
                            ${datosRecibidos.route.map(i => `<li>${i.place}</li>`).join('')}
                        </ul>
                        <strong>Precio:</strong> $ ${datosRecibidos.price} USD
                    </div>
                </div>
                <div class="col-sm-4 col-md-5 w-100 ">
                    <div>
                        <a href="./../pages/form.html">
                            <button class="btn btn-primary rounded-3 p-2 w-75 my-5" data-reserva="${datosRecibidos}">¡RESERVAR AHORA!</button>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    </section>`
}

// mode dark------------------------------------------------------------
document.getElementById("toggle-checkbox").addEventListener("change", function () {
    // let toggle = document.getElementById("toggle-checkbox")
    let navbar = document.getElementById("navbar")
    navbar.classList.toggle("bg-dark")
    // color change to the body
    document.body.classList.toggle("bg-dark")
    document.body.classList.toggle("text-light")

})

 // JavaScript para ocultar el preloader cuando la página esté completamente cargada
window.addEventListener('load', function() {
    document.body.classList.add('loaded');
});
