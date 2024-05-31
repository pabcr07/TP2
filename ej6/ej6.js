function validar(){
    
    const nombre = document.getElementById("nombre").value
    const apellido = document.getElementById("apellido").value
    const edad = document.getElementById("edad").value
    const altura = document.getElementById("altura").value
    const email = document.getElementById("email").value

    let errores = []

    if (nombre === "" || nombre.length > 50){
        errores.push("nombre no valido")
    }  
    if(apellido === "" || apellido.length > 50){
        errores.push("apellido no valido")
    }  
    if (edad < 0 || edad < 18){
        errores.push("edad no valida")
    }  
    if(altura < 0 || altura > 230){
        errores.push("altura no valida")
    } 
     if(email === "" || !email.includes("@")){
        errores.push("email no valido")
    } 
    
    if (errores.length === 0){
        mensaje.innerText = "Validaciones correctas"
        mensaje.style.color = "green"
    } else{
        mensaje.innerText = "Validaciones incorrectas"
        mensaje.style.color = "red"
    }
}