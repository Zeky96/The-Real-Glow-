document.addEventListener('DOMContentLoaded', () => {

  // Variables
  const baseDeDatos = [
      {
          id: 1,
          nombre: 'Lemon Glow',
          precio: 520,
          imagen: './assets/img/lemonglow.jpg',
      },
      {
          id: 2,
          nombre: 'Power Mint',
          precio: 580,
          imagen: './assets/img/powermint.jpg',
      },
      {
          id: 3,
          nombre: 'Rosemary Charm',
          precio: 560,
          imagen: './assets/img/rosemarycharn.jpg'
      },
      {
          id: 4,
          nombre: 'Lavender Beauty',
          precio: 580,
          imagen: './assets/img/jabonera.jpg',
      }

  ];

  let carrito = [];
  const peso = '$';
  const DOMitems = document.querySelector('#items');
  const DOMcarrito = document.querySelector('#carrito');
  const DOMtotal = document.querySelector('#total');
  const DOMbotonVaciar = document.querySelector('#boton-vaciar');
  const DOMbotonComprar = document.querySelector('#boton-comprar');
  const miLocalStorage = window.localStorage;

  // Funciones

  function renderizarProductos() {
      baseDeDatos.forEach((info) => {
          // Estructura
          const miNodo = document.createElement('div');
          miNodo.classList.add('card', 'col-sm-4');
          // Body
          const miNodoCardBody = document.createElement('div');
          miNodoCardBody.classList.add('card-body');
          // Titulo
          const miNodoTitle = document.createElement('h5');
          miNodoTitle.classList.add('card-title');
          miNodoTitle.textContent = info.nombre;
          // Imagen
          const miNodoImagen = document.createElement('img');
          miNodoImagen.classList.add('img-fluid');
          miNodoImagen.setAttribute('src', info.imagen);
          // Precio
          const miNodoPrecio = document.createElement('p');
          miNodoPrecio.classList.add('card-text');
          miNodoPrecio.textContent = `${peso}${info.precio}`;
          // Boton 
          const miNodoBoton = document.createElement('button');
          miNodoBoton.classList.add('btn', 'btn-primary');
          miNodoBoton.textContent = '+';
          miNodoBoton.setAttribute('marcador', info.id);
          miNodoBoton.addEventListener('click', anyadirProductoAlCarrito);
          // Insertamos
          miNodoCardBody.appendChild(miNodoImagen);
          miNodoCardBody.appendChild(miNodoTitle);
          miNodoCardBody.appendChild(miNodoPrecio);
          miNodoCardBody.appendChild(miNodoBoton);
          miNodo.appendChild(miNodoCardBody);
          DOMitems.appendChild(miNodo);
      });
  }

  /**
  * Evento para añadir un producto al carrito de la compra
  */
  function anyadirProductoAlCarrito(evento) {
      // Aniadimos el Nodo a nuestro carrito
      carrito.push(evento.target.getAttribute('marcador'))
      // Actualizamos el carrito 
      renderizarCarrito();
      // Actualizamos el LocalStorage
      guardarCarritoEnLocalStorage();
  }

  /**
  * Dibuja todos los productos guardados en el carrito
  */
  function renderizarCarrito() {
      DOMcarrito.textContent = '';
      const carritoSinDuplicados = [...new Set(carrito)];
      carritoSinDuplicados.forEach((item) => {
          const miItem = baseDeDatos.filter((itemBaseDatos) => {
              return itemBaseDatos.id === parseInt(item);
          });
          // Cantidad de veces que se repite el producto
          const numeroUnidadesItem = carrito.reduce((total, itemId) => {
              return itemId === item ? total += 1 : total;
          }, 0);
          const miNodo = document.createElement('li');
          miNodo.classList.add('list-group-item', 'text-right', 'mx-2');
          miNodo.textContent = `${numeroUnidadesItem} x ${miItem[0].nombre} - ${miItem[0].precio}${peso}`;
          // Boton de borrar
          const miBoton = document.createElement('button');
          miBoton.classList.add('btn', 'btn-danger', 'mx-5');
          miBoton.textContent = 'X';
          miBoton.style.marginLeft = '1rem';
          miBoton.dataset.item = item;
          miBoton.addEventListener('click', borrarItemCarrito);
          miNodo.appendChild(miBoton);
          DOMcarrito.appendChild(miNodo);
      });
      DOMtotal.textContent = calcularTotal();
  }

  /**
  * Evento para borrar un elemento del carrito
  */
  function borrarItemCarrito(evento) {
      //Conseguir producto ID
      const id = evento.target.dataset.item;
      // Borrar todos los productos
      carrito = carrito.filter((carritoId) => {
          return carritoId !== id;
      });
      renderizarCarrito();
      guardarCarritoEnLocalStorage();

  }

  function calcularTotal() {
      return carrito.reduce((total, item) => {
          const miItem = baseDeDatos.filter((itemBaseDatos) => {
              return itemBaseDatos.id === parseInt(item);
          });
          return total + miItem[0].precio;
      }, 0).toFixed(2);
  }

  function vaciarCarrito() {
    const swalWithBootstrapButtons = Swal.mixin({
        customClass: {
          confirmButton: 'btn btn-success',
          cancelButton: 'btn btn-danger'
        },
        buttonsStyling: false
      })
      
      swalWithBootstrapButtons.fire({
        title: '¿Seguro que deseas vaciar?',
        text: "No hay vuelta atras!",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonText: 'Si, deseo vaciar!',
        cancelButtonText: 'Cancelar!',
        reverseButtons: true
      }).then((result) => {
        if (result.isConfirmed) {
          swalWithBootstrapButtons.fire(
            'Vaciado!',
            'Tu carrito se ha vaciado.',
            'Exito!'
          )
        } else if (
        
          result.dismiss === Swal.DismissReason.cancel
        ) {
          swalWithBootstrapButtons.fire(
            'Cancelado',
            'Bien hecho! Mejor compra!',
            'error'
          )
        }
      })
      carrito = [];
      renderizarCarrito();
      localStorage.clear();

  }

  function comprarProductos(){
    Swal.fire({
        title: 'Gracias por comprar en The Real Glow!',
        showClass: {
          popup: 'animate__animated animate__lightSpeedInLeft',
        },
        hideClass: {
          popup: 'animate__animated animate__fadeOutUp'
        },
      })
  }


  function guardarCarritoEnLocalStorage () {
      miLocalStorage.setItem('carrito', JSON.stringify(carrito));
  }

  function cargarCarritoDeLocalStorage () {
      // Por si hay guardado algo previamente
      if (miLocalStorage.getItem('carrito') !== null) {
          carrito = JSON.parse(miLocalStorage.getItem('carrito'));
      }
  }

  // Eventos
  DOMbotonVaciar.addEventListener('click', vaciarCarrito);
  DOMbotonComprar.addEventListener('click', comprarProductos);


  cargarCarritoDeLocalStorage();
  renderizarProductos();
  renderizarCarrito();
});

