function miFuncion(a, b, c, d) {
    //console.log(arguments)

    if (arguments.length !== 4) {
        console.error("La función necesita 4 parametros")
        // "return" para salir de la función.
        return;
    }

    console.log(a + b + c + d)
}

miFuncion(10, 20, 30, 40)