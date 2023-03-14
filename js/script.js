function mostrarOpciones(productos, filtro = '') {
  let mensaje = '';
  let opciones = productos;

  if (filtro !== '') {
    opciones = productos.filter(producto => producto.nombre.toLowerCase().includes(filtro.toLowerCase()));
  }

  for (let i = 0; i < opciones.length; i++) {
    mensaje += `${i + 1}. ${opciones[i].nombre}\n`;
  }
  return mensaje;
}

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

let continuarComprando = true;
let totalCompra = 0;

while (continuarComprando) {
  let mensaje = mostrarOpciones(productos);
  mensaje += 'b. Buscar producto\n';
  mensaje += '4. Finalizar compra\n';
  let opcion = prompt(`Elegí qué shampoo querés comprar:\n${mensaje}`);

  switch (opcion) {
    case '1':
    case '2':
    case '3':
      opcion = parseInt(opcion) - 1;
      alert(`Elegiste un ${productos[opcion].descripcion}!`);
      let cantidad = prompt(`Ingrese la cantidad de shampoo ${productos[opcion].nombre} que desea comprar:`);
      if (cantidad) {
        let precio = productos[opcion].precio;
        let total = precio * cantidad * productos[opcion].iva;
        totalCompra += total;
        alert(`El precio total de ${cantidad} unidades de shampoo ${productos[opcion].nombre} es de $${total}.`);
      } else {
        alert('No ingresó una cantidad válida.');
      }
      break;
    case 'b':
      let busqueda = prompt('Ingrese parte del nombre del producto que desea buscar:');
      let opcionesFiltradas = mostrarOpciones(productos, busqueda);
      if (opcionesFiltradas === '') {
        alert(`No se encontraron productos que coincidan con "${busqueda}".`);
      } else {
        let mensaje = `Resultados de la búsqueda:\n${opcionesFiltradas}`;
        mensaje += '4. Finalizar compra\n';
        opcion = prompt(`Elegí qué shampoo querés comprar:\n${mensaje}`);

      }
      break;
    case '4':
      continuarComprando = false;
      alert(`¡Gracias por su compra! El total de la compra es de $${totalCompra} ¡Vuelva pronto!` );
      break;
    default:
      alert('Elegiste una opción invalida');
  }
}

