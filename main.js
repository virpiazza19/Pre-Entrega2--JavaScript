// Defino clase Alumno
class Alumno {
    constructor(dni, nombre, apellido, edad, notaPrimerExamen, notaSegundoExamen, notaTercerExamen) {
        this.dni = dni;
        this.nombre = nombre;
        this.apellido = apellido;
        this.edad = edad;
        this.notaPrimerExamen = notaPrimerExamen;
        this.notaSegundoExamen = notaSegundoExamen;
        this.notaTercerExamen = notaTercerExamen;
    }
}

// Array para almacenar a los alumnos
const Alumnos = [
    new Alumno(1, "Mario", "Diaz", 20, 8, 5, 7),
    new Alumno(2, "Pedro", "Martinez", 19, 6, 8, 7),
    new Alumno(3, "Maria", "Fernandez", 21, 8, 9, 7)
];

// Defino variables de mensajes que se repiten en el código
const alumnoNoExisteMensaje = "El alumno no existe en nuestra base de datos";
const ingreseDNIdelAlumnoMensaje = "Ingrese el DNI del alumno:";

//Función para buscar un alumno por su dni
function buscarAlumnoPorDni(dni) {
    return Alumnos.findIndex(alumno => alumno.dni === dni);
}

// Función para verificar si un alumno ya existe en Alumnos
function existeAlumno(dni) {
    const index = buscarAlumnoPorDni(dni);
    return index !== -1;
}

// Función para calcular el promedio de un alumno
function calcularPromedio(dni) {
    const index = buscarAlumnoPorDni(dni);
    const alumno = Alumnos[index];
    const sumaNotas = alumno.notaPrimerExamen + alumno.notaSegundoExamen + alumno.notaTercerExamen;
    return sumaNotas / 3;
}

// Función para eliminar alumno
function eliminarAlumno(dni) {
    const index = buscarAlumnoPorDni(dni);
    if (index != -1) {
        Alumnos.splice(index, 1)
    }
}

// Comienza ejecución del código
console.log("Alumnos existentes:");
Alumnos.forEach(alumno => {
    console.log(`${alumno.nombre} ${alumno.apellido} - DNI: ${alumno.dni} - EDAD: ${alumno.edad} - Notas: ${alumno.notaPrimerExamen},${alumno.notaSegundoExamen}, ${alumno.notaTercerExamen}`);
});

let continuar = confirm("¿Desea agregar un alumno?");

// Ciclo para agregar alumnos
while (continuar) {
    const dni = parseInt(prompt(ingreseDNIdelAlumnoMensaje));
    if (existeAlumno(dni)) {
        alert("El DNI ya se encuentra en la base de datos.");
    }
    const nombre = prompt("Ingrese el nombre del alumno:");
    const apellido = prompt("Ingrese el apellido del alumno:");
    const edad = parseInt(prompt("Ingrese la edad del alumno:"));
    const notaPrimerExamen = parseInt(prompt("Ingrese la nota del primer examen (entre 1 y 10):"));
    const notaSegundoExamen = parseInt(prompt("Ingrese la nota del segundo examen (entre 1 y 10):"));
    const notaTercerExamen = parseInt(prompt("Ingrese la nota del tercer examen (entre 1 y 10):"));

    const nuevoAlumno = new Alumno(dni, nombre, apellido, edad, notaPrimerExamen, notaSegundoExamen, notaTercerExamen);
    Alumnos.push(nuevoAlumno);
    console.log(`${nuevoAlumno.nombre} ${nuevoAlumno.apellido} - DNI: ${nuevoAlumno.dni} - EDAD: ${nuevoAlumno.edad} - Notas: ${nuevoAlumno.notaPrimerExamen}, ${nuevoAlumno.notaSegundoExamen}, ${nuevoAlumno.notaTercerExamen}`);
    continuar = confirm("¿Desea agregar otro alumno?");
};

// Ciclo para eliminar alumnos
continuar = confirm("¿Desea eliminar a un alumno de la base de datos?");
while (continuar) {
    const dniEliminar = parseInt(prompt(ingreseDNIdelAlumnoMensaje));
    if (existeAlumno(dniEliminar)) {
        eliminarAlumno(dniEliminar);
        alert("El alumno ha sido eliminado correctamente");
    } else {
        alert(alumnoNoExisteMensaje);
    }
    continuar = confirm("¿Quiere eliminar a un alumno?");
};
console.log("Alumnos existentes:");
Alumnos.forEach(alumno => {
    console.log(`${alumno.nombre} ${alumno.apellido} - DNI: ${alumno.dni} - EDAD: ${alumno.edad} - Notas: ${alumno.notaPrimerExamen}, ${alumno.notaSegundoExamen}, ${alumno.notaTercerExamen}`);
});

// Ciclo para actualizar notas de alumnos
continuar = confirm("¿Desea actualizar las notas de un alumno?");
while (continuar) {
    const dni = parseInt(prompt(ingreseDNIdelAlumnoMensaje));
    if (existeAlumno(dni)) {
        const notaPrimerExamen = parseInt(prompt("Ingrese la nota del primer examen (entre 1 y 10):"));
        const notaSegundoExamen = parseInt(prompt("Ingrese la nota del segundo examen (entre 1 y 10):"));
        const notaTercerExamen = parseInt(prompt("Ingrese la nota del tercer examen (entre 1 y 10):"));
        const index = Alumnos.findIndex((alumno) => alumno.dni === dni)
        Alumnos[index].notaPrimerExamen = notaPrimerExamen
        Alumnos[index].notaSegundoExamen = notaSegundoExamen
        Alumnos[index].notaTercerExamen = notaTercerExamen
        alert("Las notas del alumno han sido actualizadas")
    } else {
        alert(alumnoNoExisteMensaje);
    }
    continuar = confirm("¿Quiere actualizar las notas de otros alumnos?")
};

// Ciclo para actualizar datos de alumnos
continuar = confirm("¿Desea actualizar los datos de un alumno?");
while (continuar) {
    const dni = parseInt(prompt(ingreseDNIdelAlumnoMensaje));
    if (existeAlumno(dni)) {
        const nombre = prompt("Ingrese el nombre del alumno:");
        const apellido = prompt("Ingrese el apellido del alumno:");
        const edad = parseInt(prompt("Ingrese la edad del alumno:"));
        const index = buscarAlumnoPorDni(dni);
        Alumnos[index].nombre = nombre
        Alumnos[index].apellido = apellido
        Alumnos[index].edad = edad
        alert("Los datos del alumno han sido actualizados")
    } else {
        alert(alumnoNoExisteMensaje);
    }
    continuar = confirm("¿Quiere actualizar los datos de otros alumnos?")
};

// Ciclo para calcular el promedio de alumnos
continuar = confirm("¿Desea calcular el promedio de un alumno?");
while (continuar) {
    const dni = parseInt(prompt(ingreseDNIdelAlumnoMensaje));
    if (existeAlumno(dni)) {
        const alumno = Alumnos[buscarAlumnoPorDni(dni)];
        const nombre = alumno.nombre;
        const apellido = alumno.apellido;

        const promedio = calcularPromedio(dni);
        if (promedio >= 7) {
            alert(`El alumno ${nombre} ${apellido} ha promocionado la materia. Su nota final es: ${promedio}`);
        } else if (promedio >= 4) {
            alert(`El alumno ${nombre} ${apellido} ha aprobado la cursada, pero deberá presentarse a la instancia de finales. Su nota final es: ${promedio}`);
        } else {
            alert(`El alumno ${nombre} ${apellido} ha desaprobado la cursada y deberá recursar la materia. Su nota final es: ${promedio}`);
        }
        console.log(`El promedio de ${nombre} ${apellido} es: ${promedio}`);
    } else {
        alert(alumnoNoExisteMensaje);
    }
    continuar = confirm("¿Desea calcular el promedio de otro alumno?");
}