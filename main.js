class zapatillas {
  constructor(nombre, categoria, precio, disponibilidad) {
    this.nombre = nombre;
    this.categoria = categoria;
    this.precio = precio;
    this.disponibilidad = disponibilidad;
  }
}

let zapa1 = new zapatillas("Nike AF1", "street", 35000, true);
let zapa2 = new zapatillas("low DC", "street", 22000, false);
let zapa3 = new zapatillas("Adidas L3", "deportes", 24500, true);
let zapa4 = new zapatillas("Fila Z1", "deportes", 21500, true);
let zapa5 = new zapatillas("Nike SB", "street", 22000, false);
let zapa6 = new zapatillas("Toppper handball", "deportes", 17200, true);
let zapa7 = new zapatillas("Nike AIRMAX", "street", 27500, false);

const inventario = [];

inventario.push(zapa1, zapa2, zapa3, zapa4, zapa5, zapa6, zapa7);

console.log(inventario);
