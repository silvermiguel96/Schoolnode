var numero = 0

    for(var i= 2; i < process.argv.length; i++){
         numero += Number(process.argv[i])
    }

console.log(numero)

// Todo parametro que resiba por medio de la consola lo toma la variable processs,argv