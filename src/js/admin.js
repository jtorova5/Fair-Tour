import { URLDATOS } from "./api/URLS";

/* data that comes from the document */
let tbody = document.querySelector('#tbodyData')

async function findDataUser(url) {
    let response = await fetch(url)
    let data = await response.json()
    paintData(data)
    console.log(data);
    
}

function paintData(data) {
  tbody.innerHTML=""

  for (let i = 0; i < data.length; i++) {
    tbody.innerHTML +=`
     <tr>
        <td>${data[i].nombre}</td>
        <td>${data[i].email}</td>
        <td>${data[i].telefono}</td>
        <td>${data[i].intereses}</td>
        <td id="more" data-id="${data[i].id}" class="text-center">
          <img src="./../../public/img/more.webp" alt="more" class="w-25">
        </td>
        <td id="delete" data-id="${data[i].id}" class="text-center  delete-btn">
        <img src="./../../public/img/delete.webp" alt="eliminar" class="w-25"></td>
      </tr>`;
  }
  
}

findDataUser(URLDATOS)

// Agregar evento de click al botón de eliminar
const deleteButtons = document.querySelectorAll('.delete-btn');
deleteButtons.forEach(button => {
  console.log("viene");
  button.addEventListener('click', function() {
    let id = this.getAttribute('data-id'); // Obtener el ID del elemento
    console.log("Se hizo clic en el botón de eliminar para el ID:", id);
    });
});




// Inicializar DataTable
$(document).ready(function() {
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

