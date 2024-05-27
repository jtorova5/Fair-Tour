import '../scss/tour.scss'
import * as bootstrap from 'bootstrap'

let datosRecibidos

let divVideo = document.querySelector('#div__infoTour')

window.addEventListener('DOMContentLoaded', () => {
    // Recupera el objeto del localStorage
    const storedObject = localStorage.getItem('selectedObject')

    if (storedObject) {
        datosRecibidos = JSON.parse(storedObject);
        console.log("Objeto recibido:", datosRecibidos)
        paintInfoTour(datosRecibidos)
        // document.getElementById('someElementId').textContent = objeto.someProperty
    } else {
        console.log("No se encontró ningún objeto en el localStorage.")
    }
})

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
    </section>

    <section>
        <div>
            <h2 class="text-start">Lo más destacado del tour</h2>
        </div>
        <div id="carouselExampleCaptions" class="carousel slide" data-bs-ride="carousel">
            <div class="carousel-indicators">
                ${datosRecibidos.route.map((item, index) => `
                <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="${index}"${index === 0 ? ' class="active"' : ''} aria-label="Slide ${index + 1}"></button>`).join('')}
            </div>
            <div class="carousel-inner">
                ${datosRecibidos.route.map((item, index) => `
                <div class="carousel-item ${index === 0 ? 'active' : ''}">
                <img src="${item.img}" class="d-block w-100" alt="...">
                <div class="carousel-caption d-none d-md-block">
                    <h5>${item.place}</h5>
                    <p>${item.description}</p>
                </div>
            </div>
            `).join('')}
        </div>
        <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Previous</span>
        </button>
        <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
            <span class="carousel-control-next-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Next</span>
        </button>
    </div>`
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
