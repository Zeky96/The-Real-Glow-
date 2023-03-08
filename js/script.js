const productos = [
  {
    nombre: 'Lemon Glow',
    descripcion: 'Rico shampoo de limón y jojoba',
    precio: 1000,
    iva: 0.21,
  },
  {
    nombre: 'Rosemary Charm',
    descripcion: 'Shampoo con canela y aceite de coco',
    precio: 950,
    iva: 0.21,
  },
  {
    nombre: 'Power Mint',
    descripcion: 'Shampoo de menta y aceite de ricino',
    precio: 1200,
    iva: 0.21,
  },
];

let opcion = prompt('Elegí qué shampoo querés comprar: \n1. Lemon Glow \n2. Rosemary Charm \n3. Power Mint');

switch (opcion) {
  case '1':
    alert(`Elegiste ${productos[0].nombre}. ${productos[0].descripcion}!`);
    let cantidadLemon = prompt('Ingrese la cantidad de shampoo Lemon Glow que desea comprar:');
    if (cantidadLemon) {
      let precioLemon = productos[0].precio;
      let totalLemon = precioLemon * cantidadLemon * (1 + productos[0].iva);
      alert(`El precio total de ${cantidadLemon} unidades de shampoo ${productos[0].nombre} es de $${totalLemon}. ¡Gracias por su compra!`);
    } else {
      alert('No ingresó una cantidad válida.');
    }
    break;
  case '2':
    alert(`Elegiste ${productos[1].nombre}. ${productos[1].descripcion}!`);
    let cantidadRosemary = prompt('Ingrese la cantidad de shampoo Rosemary Charm que desea comprar:');
    if (cantidadRosemary) {
      let precioRosemary = productos[1].precio;
      let totalRosemary = precioRosemary * cantidadRosemary * (1 + productos[1].iva);
      alert(`El precio total de ${cantidadRosemary} unidades de shampoo ${productos[1].nombre} es de $${totalRosemary}. ¡Gracias por su compra!`);
    } else {
      alert('No ingresó una cantidad válida.');
    }
    break;
  case '3':
    alert(`Elegiste ${productos[2].nombre}. ${productos[2].descripcion}!`);
    let cantidadMint = prompt('Ingrese la cantidad de shampoo Power Mint que desea comprar:');
    if (cantidadMint) {
      let precioMint = productos[2].precio;
      let totalMint = precioMint * cantidadMint * (1 + productos[2].iva);
      alert(`El precio total de ${cantidadMint} unidades de shampoo ${productos[2].nombre} es de $${totalMint}. ¡Gracias por su compra!`);
    } else {
      alert('No ingresó una cantidad válida.');
    }
    break;
  default:
    alert('Elegiste una opción invalida');
}
