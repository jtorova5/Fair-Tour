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


export function alertError(message) {
    Swal.fire({
        icon: "error",
        titulo: "Oops...",
        text: message,
        footer: '<a href="#">En que podemos ayudarte?</a>'
      });
}