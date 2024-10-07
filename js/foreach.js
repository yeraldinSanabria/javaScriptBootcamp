let estudiantes = ["paola", "juan", "julian", "ana", "sofia"]
console.log(estudiantes);

estudiantes.forEach(est => {
    console.log(est)
});

// mostrar un estudiante en una posicion en especifica

estudiantes.forEach(eest => {
    if (eest === estudiantes[3]) {
        console.log(eest)
    }
});


