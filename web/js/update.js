var args = location.search.split('&');
// lee los argumentos pasados a este formulario
var parts = []
for (let i = 0; i < args.length; ++i) {
    parts[i] = args[i].split('=');
}
console.log(args)
var re = /%20/gi;
document.getElementById("id").value = parts[0][1];
document.getElementById("nombre").value = parts[1][1].replace(re," ");
document.getElementById("foto").value = parts[2][1].replace(re," ");
document.getElementById("ingredientes").value = parts[3][1].replace(re," ");
document.getElementById("pasos").value = parts[4][1].replace(re," ");
 
function modificar() {
    let id = document.getElementById("id").value;
    let nom = document.getElementById("nombre").value;
    let foto= document.getElementById("foto").value;
    let ing = document.getElementById("ingredientes").value;
    let pasos = document.getElementById("pasos").value;
    
    let receta = {
        nombre: nom,
        foto: foto,
        ingredientes: ing, 
        pasos: pasos
    }
    let url = `http://127.0.0.1:5000/receta/${id}`;
    var options = {
        body: JSON.stringify(receta),
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        redirect: 'follow'
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

