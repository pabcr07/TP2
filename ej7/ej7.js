const mostrar = document.getElementById("mostrar")
const lista = document.getElementById("listado")

    mostrar.addEventListener("click", async () =>{
        const personas = await fetch ("https://jsonplaceholder.typicode.com/users")
        const listado = await personas.json()
        
        
        listado.forEach(persona => {
            const item = document.createElement("li")
            item.textContent = `${persona.id} - ${persona.name} - ${persona.username} - ${persona.email} - ${persona.website}`
            lista.appendChild(item)
            listado.innerText = lista
        
    
        });
    })

function verTareas(){

}
