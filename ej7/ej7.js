const listado = document.getElementById("listado");
const mostrar = document.getElementById("mostrar");
const tareas = document.getElementById("tareas");
const lista_tareas = document.getElementById("listado-tareas");
let Personas = false;

mostrar.addEventListener("click", async () => {
    if (!Personas) {
        const res = await fetch("https://jsonplaceholder.typicode.com/users");
        if (res.ok) {
            const personas = await res.json();
            listado.innerHTML = ''; 
            containerTareas.innerHTML = ''; 
                    personas.forEach((persona) => {
                        const item = document.createElement("li");
                        item.classList.add("usuario");
                        item.innerHTML = `
                        id: ${persona.id} - Nombre: ${persona.name} - Nombre de usuario: ${persona.username} - Email: ${persona.email} - Página web: ${persona.website}<button onclick="verTareas(${persona.id}, '${persona.name}')">Ver tareas</button>`;
                        listado.appendChild(item);
                    });
                } 
                mostrar.textContent = 'Ocultar personas';
            } else {
                listado.innerHTML = ''; 
                mostrar.textContent = 'Mostrar personas';
            }
            Personas = !Personas;
        });

        async function verTareas(userId, userName) {
            const res = await fetch(`https://jsonplaceholder.typicode.com/todos?userId=${userId}`);
            if (res.ok) {
                const tareas = await res.json();
                mostrarTareas(tareas);
                tareas.textContent = `Tareas de ${userName}`; 
            } 
            }

        function mostrarTareas(tareas) {
            containerTareas.innerHTML = ''; 
            tareas.forEach((tarea) => {
                const tareaDiv = document.createElement("div");
                tareaDiv.classList.add(tarea.completed ? "tarea-completada" : "tarea-pendiente");
                tareaDiv.innerHTML = `
                <p class="${tarea.completed? 'green' : 'red'}">Tarea: ${tarea.title}</p>`;
                containerTareas.appendChild(tareaDiv);
            });
        }

