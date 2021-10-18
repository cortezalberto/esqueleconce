let funcionalidadTareas = require('./funcionalidadTareas.js');


// cuando por consola hagamos "node app.js palabra" palabra va a guardarse en la variable accion y desencadenara distintas operaciones
let accion = process.argv[2];
// algunas operaciones requieren informacion adicional, por ejemplo que ingresemos una patente
// cuando por consola digamos "node app.js buscar patente" esa cuarta palabra que es la patente va en la variable parametroAdicional
let parametroAdicional = process.argv[3];
// para saber si una persona puede comprar un auto necesitamos saber el monto maximo que esta dispuesta a pagar y el monto por cuota
// por eso nos reservamos la quinta posicion y la guardamos en la variable parametroAdicionalDos
// por ejemplo "node app.js puedeComprar {montoTotal} {montoCuota}"
// iria como "node app.js puedeComprar 150000000 635000"
let parametroAdicionalDos = process.argv[4];

switch(accion) {
    case 'listar':
        //
        break;

    case 'buscar':
      //
        break;

    case 'vender':
        //
        break;
    
    case 'enVenta':
        //
        break;

    case 'nuevos':
       //
        break;

    case 'listaVentas':
        //
        break;

    case 'totalVentas':
       //
        break;

    case 'puedeComprar':
        // toma como primer argumento valor total que el usuario esta dispuesto a pagar
        // toma como segundo argumento valor que el usuario puede pagar por cuota
        // devuelve todos los autos que la persona puede pagar con esas restricciones
        let persona = {
            "capacidadDePagoTotal" : parametroAdicional,
            "capacidadDePagoEnCuotas" : parametroAdicionalDos
        }
       //;
        break

    default:
        console.log('No entiendo qué me estás pidiendo');
        console.log('Las acciones disponibles son: vender, enVenta, nuevos, listaVentas, totalVentas, puedeComprar ');
        break;
}
