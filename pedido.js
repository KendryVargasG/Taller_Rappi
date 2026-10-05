// Taller integrador — Sistema de pedidos Rappi
// Realizado por Kendry Y. Vargas Gaviria

// Parte 1 — Los datos del cliente
const cliente = {
    nombre: "Ana",
    ciudad: "Medellín",
    Rappi_Prime: true,
    inventario: ["Hamburguesa"],
};
// Tiquete de Saludo
console.log("=============================================================================");
console.log("Hola",cliente.nombre,",", "tu pedido a domicilio en", cliente.ciudad);
console.log("=============================================================================");

// Parte 2 — Los productos del pedido
let inventario = ["Hamburguesa,", "Papas,","Gaseosa"];
console.log(inventario);
console.log(inventario[0]);

inventario.push("Postre");
console.log(inventario);

inventario.pop();
console.log(inventario);
console.log(inventario.length);

// Parte 3 — El pedido completo como una ficha
let pedido = {
    cliente: cliente,   
    estado:  "En Preparación",
};
// Tiquete de Pedido
console.log("=============================================================================");
console.log("Nombre del Cliente:", cliente.nombre, "--" , "Ciudad:", cliente.ciudad,"--" ,"Pedido:", cliente.inventario[0]);
console.log("Estado del Pedido:", pedido.estado);
console.log("=============================================================================");

// Nuevo avance, Actualización del Tiquete de Pedido
pedido.estado = "En Camino";
console.log(pedido);
// Nuevo Tiquete de Pedido
console.log("=============================================================================");
console.log("Nombre del Cliente:", cliente.nombre, "--" , "Ciudad:", cliente.ciudad,"--" ,"Pedido:", cliente.inventario[0]);
console.log("Estado del Pedido:", pedido.estado);
console.log("=============================================================================");

// Parte 4 — El cobro
let subtotal = 24000; 
let domicilio = 4500;
let propina_sugerida = 0.10;
let propina = true;
let total = subtotal + domicilio;
if(propina){
    total = total + (subtotal * propina_sugerida)
}
console.log("Total a pagar por el pedido de " + cliente.nombre + ": $"+total);




