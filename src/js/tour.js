import '../scss/tour.scss'
import * as bootstrap from 'bootstrap'

let datosRecibidos

let divVideo = document.querySelector('#div__infoTour')
let divCarrousel = document.querySelector('#div__carrousel')

window.addEventListener('DOMContentLoaded', () => {
    const storedObject = localStorage.getItem('selectedObject')

    if (storedObject) {
        datosRecibidos = JSON.parse(storedObject);
        console.log("Objeto recibido:", datosRecibidos)
        paintInfoTour(datosRecibidos)
        paintCarrousel(datosRecibidos)
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
    divVideo.innerHTML = "";
    divVideo.innerHTML += `
    <section class="container my-5">
        <div class="row">
            <div class="col-12 col-md-7 mb-4">
                <div class="embed-responsive embed-responsive-16by9 rounded-4 h-100">
                    <video src="${datosRecibidos.mainVideo}" autoplay muted loop class="embed-responsive-item w-100 h-100 rounded-4 video"></video>
                </div>
            </div>
            <div class="col-12 col-md-5">
                <div class="container">
                    <div class="box">
                        <h1 class="title text-center">${datosRecibidos.tour}</h1>
                        <div>
                            <p data-i18n="paragraph4"></p>
                            <p>${datosRecibidos.duration} <span data-i18n="paragraph5"></span></p>
                            <p data-i18n=""><strong>Recorrido:</strong></p>
                            <ul>
                                ${datosRecibidos.route.map(i => `<li>${i.place}</li>`).join('')}
                            </ul>
                            <span data-i18n="paragraph6"></span> 
                            <p>$ ${datosRecibidos.price} <span>USD<span></p>
                        </div>
                    </div>
                    <div class="text-center">
                        <a href="./../pages/form.html">
                            <button class="btn btn-primary rounded-3 p-2 w-75 my-5" data-reserva='${JSON.stringify(datosRecibidos)}' data-i18n="btn1">Reservar</button>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    </section>`;
}


// mode dark------------------------------------------------------------
document.getElementById("toggle-checkbox").addEventListener("change", function () {
    let navbar = document.getElementById("navbar")
    navbar.classList.toggle("bg-dark")
    document.body.classList.toggle("bg-dark")
    document.body.classList.toggle("text-light")

})

 // hide preloader
window.addEventListener('load', function() {
    document.body.classList.add('loaded');
});
