
// imports
import '../scss/styles.scss'
import * as bootstrap from 'bootstrap'

/* import urls */
import { URL } from "./api/URLS.js";

/* data that comes from the document */
let bodyCard = document.querySelector('#contenedor__img')


/* funtion find tours */
async function findTours() {
    let response = await fetch(URL)
    let datos = await response.json()
    paintTours(datos)

    /* return datos */
}

findTours()

/* paint tours */
function paintTours(datos) {
    console.log(datos);
    for (let i = 0; i < datos.length; i++) {

        bodyCard.innerHTML +=`
        <div class="col-11 w-100 mt-2 item">
            <img src="${datos[i].landingImg}" alt="${datos[i].tour}" class="imagen-contenedor rounded-4">
        </div>
        `
    }
} 











// mode dark------------------------------------------------------------
document.getElementById("toggle-checkbox").addEventListener("change", function () {
    // let toggle = document.getElementById("toggle-checkbox");
    let navbar = document.getElementById("navbar");
    navbar.classList.toggle("bg-dark");
    // color change to the body
    document.body.classList.toggle("bg-dark");
});
