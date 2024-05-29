//Creamos una funcion auto-ejecutble que se crea de la siguiente manera ()()

// (
//     ()=>{
//       //La logica es simple , si no hay un usuario en el localStorage , redirigimos a la pagina de inicio
//       const admin = localStorage.getItem("admin")
//       if(!admin){
//       window.location.href = "./index.html"
//       }
//     }
    
// )()

(
    ()=>{
    const admin = localStorage.getItem("admin");
    if (!admin) {
      window.location.href = "./index.html";
    } else {
      // Borro el ítem del localStorage para que no puedan volver a ingresar directamente
      localStorage.removeItem("admin");
    }
  })
();
  
    