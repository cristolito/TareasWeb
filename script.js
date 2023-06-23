const nombres = ["Juan","Cristhian","Gustavo","Emma", "Liam", "Olivia", "Noah", "Ava", "Isabella", "Sophia", "Mia", "Charlotte", "Amelia", "Harper", "Evelyn", "Abigail", "Emily", "Elizabeth", "Mila", "Ella", "Avery", "Sofia", "Camila", "Aiden", "Jackson", "Liam", "Lucas", "Noah", "Mason", "Caden", "Oliver", "Elijah", "Grayson", "Jacob", "Michael", "Benjamin", "Carter", "James", "Alexander", "Sebastian", "Jack", "Daniel", "Matthew", "Logan", "William","José", "María", "Juan", "Guadalupe", "Antonio", "Francisco", "Jesús", "Miguel", "Alejandro", "Manuel", "Pedro", "Carlos", "Fernando", "Roberto", "Ricardo", "Luis", "Jorge", "Alberto", "Daniel", "Rafael", "Sofía", "Isabella", "Valentina", "Camila", "Mariana", "Ana", "Ximena", "Valeria", "Fernanda", "Paula", "Daniela", "Mía", "Renata", "Elena", "Regina", "Abril", "Montserrat", "Andrea", "Natalia", "Carolina", "Luz", "Julia", "Adriana"]
const apellidos = ["Hernández", "García", "López", "Martínez", "González", "Rodríguez", "Pérez", "Sánchez", "Ramírez", "Flores", "Torres", "Rivera", "Gómez", "Díaz", "Reyes", "Morales", "Ortega", "Cruz", "Rojas", "Vargas", "Jiménez", "Soto", "Mendoza", "Silva", "Ortiz", "Delgado", "Castillo", "Navarro", "Ramos", "Romero", "Espinoza", "Herrera", "Medina", "Guerrero", "Cortés", "Acosta", "Molina", "Fuentes", "Ríos", "Vega", "Campos", "Orozco", "Mendoza", "Castro","Smith", "Johnson", "Williams", "Jones", "Brown", "Davis", "Miller", "Wilson", "Moore", "Taylor", "Anderson", "Thomas", "Jackson", "White", "Harris", "Martin", "Thompson", "Garcia", "Martinez", "Robinson", "Clark", "Rodriguez", "Lewis", "Lee", "Walker", "Hall", "Allen", "Young", "King", "Wright", "Scott", "Adams", "Baker", "Gonzalez", "Nelson", "Carter", "Hill", "Turner", "Parker", "Collins", "Edwards", "Stewart", "Cook", "Morris"]
const nombreCreados = []

const blockName = document.getElementById("blockName")
const button = document.getElementById("btn")
const containerNamers =  document.getElementById("container-names")

const generarNombre = () =>{
    let indexNombres = Math.floor(Math.random() * nombres.length)
    let indexApellidos = Math.floor(Math.random() * apellidos.length)
    let nombreCreado = nombres[indexNombres]+" "+apellidos[indexApellidos]

    if(nombreCreados.indexOf(nombreCreado) != -1){
        generarNombre()
    }
    else{
        nombreCreados.push(nombreCreado)
        blockName.innerHTML=nombreCreado
        insertName()
    }
}

const insertName = () =>{
    nombreCreados.forEach(item=>{
        console.log(item)
        let span = document.createElement("span")
        span.textContent=item
        containerNamers.appendChild(span)
    })
}

button.addEventListener("click",generarNombre)