// imports
import '../scss/styles.scss'
import * as bootstrap from 'bootstrap'

/* import urls */
import { URL } from "./api/URLS.js";

/* global variables */
let datosGeneral

/* data that comes from the document */
let bodyCard = document.querySelector('#contenedor__img')
let botonAlone = document.querySelector('#btn-solo')
let botonCouple= document.querySelector('#btn-pareja')
let botonFamily= document.querySelector('#btn-familiar')



/* funtion find tours --------------------------*/
async function findTours() {
    let response = await fetch(URL)
    let datos = await response.json()
    datosGeneral = datos
    paintTours(datos)
    /* return datos */
}

findTours()

/* click alone ----------------------------*/
botonAlone.addEventListener('click',()=>{
    filterSolo(datosGeneral)
})

/* search for alone tour */
function filterSolo(datosGeneral) {
    let planAlone = datosGeneral.filter((e)=> e.plan == "solo")
    console.log(planAlone);
    paintTours(planAlone)
}


/* click couple -------------------------------*/
botonCouple.addEventListener('click',()=>{
    filterCouple(datosGeneral)
})

/* search for couple  tour*/
function filterCouple(datosGeneral) {
    let planCouple = datosGeneral.filter((e)=> e.plan == "pareja")
    paintTours(planCouple)
}

/* click family ---------------------------------*/
botonFamily.addEventListener('click',()=>{
    filterFamily(datosGeneral)
})

/* search for family tour*/
function filterFamily(datosGeneral) {
    let planFamily = datosGeneral.filter((e)=> e.plan == "familiar")
    paintTours(planFamily)
}


/* paint tours -----------------------------*/
function paintTours(datos) {
   /*  clear datos */
    bodyCard.innerHTML = ""
    console.log(datos);
    for (let i = 0; i < datos.length; i++) {
        bodyCard.innerHTML +=`
        <div class="col-11 w-100 mt-2 item" id="div__image">
            <img src="${datos[i].landingImg}" alt="${datos[i].tour}" class="imagen-contenedor rounded-4">
            <div id="divimage__hover" data-id="${datos[i].id}" class="rounded-4"> 
                <h4>${datos[i].tour}<br></h4>
                <h3>VER MAS</h3>
            </div>  
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
