const contenedorProductos = document.getElementById("mainIndex");

const mostrarProductos = (productos) => {
    productos.forEach(producto => {
        const div = document.createElement('div');
        div.classList.add('card');
        div.innerHTML += `
                        <div class="card-image">
                            <img class="img-fluid" src=${producto.img}>
                            <a id=boton${producto.id}></a>
                        </div>
                        <div class="card-content">
                            <button class="botonProductos">Agregar al carrito</button>
                        </div>
                        <div class="cardAbajo">
                            <p> ${producto.desc} </p>
                            <p> ${producto.precio}$ </p>
                        </div>

                         `
                         contenedorProductos.appendChild(div);
    });
};

mostrarProductos(productos);