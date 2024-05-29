import './../scss/normalize.scss'
import './../scss/preload.scss'
import * as bootstrap from 'bootstrap'

import { succesAlert, alertError } from "./alerts";
import { URLDATOS } from "./api/URLS";

/* data that comes from the document */
let tbody = document.querySelector('#tbodyData')


async function findDataUser(url) {
  let response = await fetch(url)
  let data = await response.json()
  console.log(data);
  paintData(data)
}

function paintData(data) {
  tbody.innerHTML = ""

  for (let i = 0; i < data.length; i++) {
    tbody.innerHTML += `
     <tr>
        <td>${data[i].nombre}</td>
        <td>${data[i].intereses}</td>
        <td class="text-center more-btn" id="more" data-ob='${JSON.stringify(data[i])}' data-bs-toggle="modal" data-bs-target="#exampleModal">
          <img src="./../../public/img/more.webp" alt="more">
        </td>
        <td id="delete" data-id="${data[i].id}" class="text-center delete-btn">
        <img src="./../../public/img/delete.webp" alt="eliminar"></td>
      </tr>`;
  }

  // event click to button the delete
  const deleteButtons = document.querySelectorAll('.delete-btn');
  const moreButtons = document.querySelectorAll('.more-btn')
  deleteButtons.forEach(button => {
    button.addEventListener('click', function () {
      let id = this.getAttribute('data-id');
      searchDelete(id)
    });
  });

  //event click to button the more
  moreButtons.forEach(btn => {
    btn.addEventListener('click', function () {
      const data = JSON.parse(btn.getAttribute('data-ob'));
      seeMore(data)
    });
  });
}


//see more
function seeMore(data) {
  const modalBody = document.querySelector('#exampleModal .modal-body');
  modalBody.innerHTML = ""

  modalBody.innerHTML += `
  <form>
    <fieldset disabled>
      <div class="mb-3">
        <label for="disabledTextInput" class="form-label"><strong>Nombre: </strong></label>
        <input type="text" class="form-control" placeholder="${data.nombre}"  readonly>
      </div>
      <div class="mb-3">
        <label for="disabledTextInput" class="form-label"><strong>Apellido : </strong></label>
        <input type="text" class="form-control" placeholder="${data.apellido}"  readonly>
      </div>
      <div class="mb-3">
        <label for="disabledTextInput" class="form-label"><strong>Email: </strong></label>
        <input type="text" class="form-control" placeholder="${data.email}"  readonly>
      </div>
      <div class="mb-3">
        <label for="disabledTextInput" class="form-label"><strong>Telefono: </strong></label>
        <input type="text" class="form-control" placeholder="${data.telefono}"  readonly>
      </div>
      <div class="mb-3">
        <label for="disabledTextInput" class="form-label"><strong>Intereses: </strong></label>
        <input type="text" class="form-control" placeholder="${data.intereses}"  readonly>
      </div>
    </fieldset>
  </form>
`;

}



async function searchDelete(id) {
  console.log(id);
  try {
    let response = await fetch(`${URLDATOS}/${id}`, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json'
      }
    })
    if (!response.ok) {
      throw new Error('Error al eliminar el registro');
    }

    //confirSucces('Registro eliminado correctamente')
    succesAlert('Registro eliminado correctamente')
    findDataUser(URLDATOS)

  } catch (error) {
    alertError('El registro no se ha eliminado')
  }

}



findDataUser(URLDATOS)


// Inicializar DataTable
$(document).ready(function () {
  $('#tableAdmin').DataTable({
    "pagingType": "simple_numbers",
    //   numero de filas disponibles
    "lengthMenu": [5, 10],
    //   cambiar numero de filas por pagina
    "pageLength": 5,
    "searching": true,
    // pueden hacer clic en los encabezados-columnas para ordenar los datos en orden ascendente o descendente.
    "ordering": true,
    // muestra el numero total de entradas actuales de la tabla
    "info": true,
    // ajustar automáticamente el ancho de las columnas
    "autoWidth": false,
    //   texto mostrado en la tabla
    "language": {
      "search": "Buscar:",
      "lengthMenu": "Mostrar _MENU_ entradas",
      "info": "Mostrando _START_ a _END_ de _TOTAL_ entradas",
      "paginate": {
        "first": "Primero",
        "last": "Último",
        "next": "Siguiente",
        "previous": "Anterior"
      }
    }
  });
});




// mode dark------------------------------------------------------------
document.getElementById("toggle-checkbox").addEventListener("change", function () {
  // let toggle = document.getElementById("toggle-checkbox")
  let navbar = document.getElementById("navbar")
  navbar.classList.toggle("bg-dark")
  // color change to the body
  document.body.classList.toggle("bg-dark")
  document.body.classList.toggle("text-light");
  let footer = document.getElementById("footer")
  footer.classList.toggle("bg-dark")
})

// JavaScript para ocultar el preloader cuando la página esté completamente cargada
window.addEventListener('load', function () {
  document.body.classList.add('loaded');
});

