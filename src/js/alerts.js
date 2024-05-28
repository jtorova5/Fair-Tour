import Swal from 'sweetalert2'
const Toast = Swal.mixin({
    toast: true,
    position: "top-end",
    showConfirmButton: false,
    timer: 3000,
    timerProgressBar: true,
    didOpen: (toast) => {
        toast.onmouseenter = Swal.stopTimer;
        toast.onmouseleave = Swal.resumeTimer;
    }
});


export function showSmallAlertSuccess(message) {
    Toast.fire({
        icon: "success",
        title: message
    });

}

export function succesAlert(message) {
    Swal.fire({
        position: "top-end",
        icon: "success",
        title: message,
        showConfirmButton: false,
        timer: 1500
      });
    
}

export function confirSucces(message) {
    Swal.fire({
        title: "Estas seguro?",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Sí,borrar!"
      }).then((result) => {
        if (result.isConfirmed) {
          Swal.fire({
            title: "Deleted!",
            text: message,
            icon: "success"
          });
        }
      });
    
}


export function alertError(message) {
    Swal.fire({
        icon: "error",
        titulo: "Oops...",
        text: message,
      });
}