function guardarReceta() {

  let n = document.getElementById("nombre").value
  let foto = document.getElementById("foto").value
  let ing = document.getElementById("ingredientes").value
  let pasos = document.getElementById("pasos").value
  
  let receta = {
      nombre: n,
      foto:foto,
      ingredientes: ing,
      pasos:pasos
  }
  let url = "http://127.0.0.1:5000/recetas"

  var options = {
  body: JSON.stringify(receta),
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
     // redirect: 'follow'
  }
  fetch(url, options)
      .then(function () {
          console.log("creado")
          alert("Grabado")

          // Handle response we get from the API
      })
      .catch(err => {
          //this.errored = true
          alert("Error al grabar" )

          console.error(err);
      })
}
 
function modificarProductos() {
    let n = document.getElementById("nombre").value
    let foto = document.getElementById("foto").value
    let ing = document.getElementById("ingredientes").value
    let pasos = document.getElementById("pasos").value
    
  let receta = {
    nombre: n,
    foto:foto,
    ingredientes: ing,
    pasos:pasos
}
  
  let url = "http://localhost:5000/recetas/"+id
  var options = {
      body: JSON.stringify(producto),
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      //redirect: 'follow'
  }
  fetch(url, options)
      .then(function () {
          console.log("modificado")
          alert("Registro modificado")
          // Handle response we get from the API
      })
      .catch(err => {
          //this.errored = true
          console.error(err);
          alert("Error al Modificar")
      })      
}
 
