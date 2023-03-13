const productos = [
  {
    nombre: 'Lemon Glow',
    descripcion: 'Shampoo de limón y jojoba',
    precio: 1000,
    iva: 1.21,
  },
  {
    nombre: 'Rosemary Charm',
    descripcion: 'Shampoo con canela y aceite de coco',
    precio: 950,
    iva: 1.21,
  },
  {
    nombre: 'Power Mint',
    descripcion: 'Shampoo de menta y aceite de ricino',
    precio: 1200,
    iva: 1.21,
  },
];

// Creamos un nuevo array de objetos con un número de referencia para cada producto
const productosNumerados = productos.map((producto, indice) => {
  return { numero: indice + 1, ...producto };
});

let seguirComprando = true;
let totalCompra = 0;

while (seguirComprando) {
  let mensaje = 'Elegí qué shampoo querés comprar:\n';
  for (let i = 0; i < productosNumerados.length; i++) {
    mensaje += `${productosNumerados[i].numero}. ${productosNumerados[i].nombre}\n`;
  }

  let opcion = prompt(mensaje);
  let productoSeleccionado = productosNumerados.find(producto => producto.numero === parseInt(opcion));

  if (productoSeleccionado) {
    alert(`Elegiste ${productoSeleccionado.nombre}. ${productoSeleccionado.descripcion}!`);
    let cantidad = prompt(`Ingrese la cantidad de shampoo ${productoSeleccionado.nombre} que desea comprar:`);
    if (cantidad) {
      let precio = productoSeleccionado.precio;
      let total = precio * cantidad * productoSeleccionado.iva;
      totalCompra += total;
      alert(`El precio total de ${cantidad} unidades de shampoo ${productoSeleccionado.nombre} es de $${total.toFixed(2)}.`);
      let respuesta = prompt('¿Desea comprar algo más? (s/n)');
      seguirComprando = respuesta.toLowerCase() === 's';
    } else {
      alert('No ingresó una cantidad válida.');
    }
  } else {
    alert('Elegiste una opción inválida.');
  }
}

alert(`Gracias por su compra. El total de la compra es $${totalCompra.toFixed(2)}. ¡Vuelva pronto!`);


