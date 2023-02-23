let opcion = prompt('Elegi que shampoo queres comprar: \n1-Lemon Glow \n2-Rosemary Charm \n3-Power Mint')
let iva = 1.21
switch(opcion){
    case '1': 
        alert('¡Elegiste un genial shampoo de limon y jojoba! ¡Brillo, suavidad y belleza!');
        alert ('Su precio es de $1000+IVA')
        let cantidadLemon = prompt('Ingrese la cantidad de shampoo Lemon Glow que desea comprar:');
        if (cantidadLemon) {
            let precioLemon = 1000; 
            let totalLemon = (precioLemon * cantidadLemon * iva);
            alert(`El precio total de ${cantidadLemon} unidades de shampoo Lemon Glow es de $${totalLemon}. ¡Gracias por su compra!`);
        } else {
            alert('No ingresó una cantidad válida.');
        }
        break;
    case '2':
        alert ('¡Elegiste un shampoo con la mejor canela y aceite de coco! ¡Volumen y brillo asegurados!');
        alert ('Su precio es de $900+IVA')
        let cantidadRosemary = prompt('Ingrese la cantidad de shampoo Rosemary Charm que desea comprar:');
        if (cantidadRosemary) {
            let precioRosemary = 900; 
            let totalRosemary = (precioRosemary * cantidadRosemary * iva);
            alert(`El precio total de ${cantidadRosemary} unidades de shampoo Rosemary Charm es de $${totalRosemary}. ¡Gracias por su compra!`);
        } else {
            alert('No ingresó una cantidad válida.');
        }
        break;
    case '3':
        alert('¡Elegiste un shampoo de menta y aceite de ricino! ¡Chau grasitud!');
        alert('Su precio es de %$1200 +IVA')
        let cantidadMint = prompt('Ingrese la cantidad de shampoo Power Mint que desea comprar:');
        if (cantidadMint) {
            let precioMint = 1200; 
            let totalMint = (precioMint * cantidadMint * iva);
            alert(`El precio total de ${cantidadMint} unidades de shampoo Power Mint es de $${totalMint}. ¡Gracias por su compra!`);
        } else {
            alert('No ingresó una cantidad válida.');
        }
        break;
    default:
        alert('Elegiste una opción invalida');    
}
