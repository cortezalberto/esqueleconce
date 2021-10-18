let operacionesArchivo = require('./operacionesArchivo.js');


let concesionaria = {
  autos: operacionesArchivo.leerArchivoJson(),

  listar: function() {
      // cuando se llama a este metodo se imprimen todos los autos en autos.json
    
  },

  buscarAuto: function(patenteBuscada) {
    // cuando se llama a este metodo se imprimen todos los datos del auto con la patente inresada. Sino esta, devuelve null
   

  },

  venderAuto: function(patenteBuscada) {
    // cuando se llama a este metodo se sobrescribe el objeto de autos, cambiando este auto en particular a vendido
   
  },

  autosParaLaVenta: function() {
    // cuando se llama a este metodo se imprimen todos los autos en autos.json que su estado vendido es false
  
  },

  autosNuevos: function() {
    // cuando se llama a este metodo se imprimen todos los autos en autos.json que su estado vendido es false y sus km son cero
    // para determinar cuales no estan vendidos se aprovecha como callback del metodo anterior.
  
  },

  listaDeVentas: function() {
    // cuando se llama a este metodo se imprime un array de precios de autos cuyo estado vendido es true
  
  },

  totalDeVentas: function() {
    // cuando se llama a este se suman los precios de todos los autos vendidos
    // los precios de los autos vendidos se los trae usando como callback el metodo anterior
 
  },

  puedeComprar: function(auto, persona){
    // este metodo recibe un objeto auto y un objeto persona, no se puede llamar directamente.
    // dice true o false si esa persona puede comprar ese auto
    // lo que hace es primero chequear si el precio del auto esta por debajo de lo que la persona esta dispuesta a pagar
    // despues se fija que las cuotas tambien esten por debajo de lo que la persona pagaria por cuota
    // si y solo si ambas condiciones son true devuelve true, en otro caso devuelve false
    
  },

  autosQuePuedeComprar: function(persona){
    // dada una persona este metodo trae todos los autos que esa persona puede pagar
  
  }
}

module.exports = concesionaria;
