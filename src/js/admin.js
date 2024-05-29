import { succesAlert ,confirSucces,alertError} from "./alerts";
import { URLDATOS } from "./api/URLS";

/* data that comes from the document */
let tbody = document.querySelector('#tbodyData')

async function findDataUser(url) {
<<<<<<< Updated upstream
    let response = await fetch(url)
    let data = await response.json()
    paintData(data)
    console.log(data);
    
=======
  let response = await fetch(url)
  let data = await response.json()
  paintData(data)
>>>>>>> Stashed changes
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
          <img src="./../../public/img/more.webp" alt="more">
        </td>
        <td id="delete" data-id="${data[i].id}" class="text-center delete-btn">
        <img src="./../../public/img/delete.webp" alt="eliminar"></td>
      </tr>`;
    }
  
  // Agregar evento de click al botón de eliminar
  const deleteButtons = document.querySelectorAll('.delete-btn');
  deleteButtons.forEach(button => {
    button.addEventListener('click', function() {
      let id = this.getAttribute('data-id'); // Obtener el Id del elemento
      console.log("Se hizo clic en el botón de eliminar para el ID:", id);
      searchDelete(id)
      });
  });
}

findDataUser(URLDATOS)

async function searchDelete(id) {
  console.log(id);
  try{
    let response = await fetch (`${URLDATOS}/${id}`,{
      method: 'DELETE',
      headers:{
        'Content-Type': 'application/json'
      }
    })
    if(!response.ok){
      throw new Error('Error al eliminar el registro');
    }

    //confirSucces('Registro eliminado correctamente')
    succesAlert('Registro eliminado correctamente')
    findDataUser(URLDATOS)

  }catch(error){
    alertError('El registro no se ha eliminado')
  }
  
}



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
 window.addEventListener('load', function() {
  document.body.classList.add('loaded');
});

