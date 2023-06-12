
//Carrito de consultoria

let productos = [
    {
        nombre: "Consultoria Soporte Técnico",
        precio:4000
    },
    {
        nombre: "Consultoria armado de servidores",
        precio:8000
    },
    {
        nombre: "Consultoria Cámaras de Seguridad",
        precio:3500
    },
    {
        nombre: "Consultoria Enlaces Wirelles",
        precio:3500
    },

];

const productosContainer = document.getElementById("productos");
const carritoList = document.getElementById("lista-compra");
const comprarBtn = document.getElementById("comprar-btn");
const limpiarBtn = document.getElementById("limpiar-btn");
const verListaBtn = document.getElementById("ver-lista-btn");

// mostrar los productos en el HTML
function mostrarProductos() {
    productosContainer.innerHTML = "";
    productos.forEach((producto, index) => {
        const productoDiv = document.createElement("div");
        productoDiv.className = "producto";
        productoDiv.innerHTML = `
            <h3>${producto.nombre}</h3>
            <p>Precio: $${producto.precio}</p>
            <button onclick="agregarAlCarrito(${index})">Agregar al carrito</button>
        `;
        productosContainer.appendChild(productoDiv);
    });
}

// agregar un producto al carrito
function agregarAlCarrito(index) {
    const producto = productos[index];
    const carritoItem = document.createElement("li");
    carritoItem.textContent = `${producto.nombre} - $${producto.precio}`;
    carritoList.appendChild(carritoItem);
}

// para comprar los productos
function comprar() {
    alert("Compra realizada correctamente");
    limpiarCarrito();
}

// limpiar el carrito
function limpiarCarrito() {
    carritoList.innerHTML = "";
}


// Event listeners para los botones
comprarBtn.addEventListener("click", comprar);
limpiarBtn.addEventListener("click", limpiarCarrito);


// Mostrar los productos al cargar la página
mostrarProductos();
