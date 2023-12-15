

//creamos un carrito para las cartas 
const colorCartas = {
    negro: "pantano",
    blanco: "llanura",
    azul: "isla",
    rojo: "montaña",
    verde: "bosques",
};
let carritoCarta = []
let total = 0;



// Agrega las cartas al carrito
function agregarAlCarrito() {
    let color = document.getElementById("color").value;
    let cantidad = document.getElementById("cantidad").value;

    if (color in colorCartas) {
        let cartasSeleccionadas = cartas.filter(carta => carta.color === color);
    


    for (let i = 0; i < cantidad; i++) {
        if (cartasSeleccionadas[i]) {
            carritoCarta.push(cartasSeleccionadas[i]);
            total = parseFloat(cartasSeleccionadas[i].precio);
        }
    }

    localStorage.setItem("carrtio", JSON.stringify(carritoCarta));
    localStorage.setItem("total", total);
}else {
    document.getElementById("mensaje").innerHTML = 'El Color ' + color + ' no se encuentra en la lista';

}
Tablatotal();
}
function Tablatotal() {
    const bodyTabla = document.getElementById("items");
    bodyTabla.innerHTML = ``;
    carritoCarta.forEach((item, index) => {
        bodyTabla.innerHTML = bodyTabla.innerHTML +
            `<tr>
        <th>${index + 1}</th>
        <td>${item.nombre}</td>
        <td>${item.color}</td>
        <td>1</td>
        <td>${item.precio}</td>
    </tr>`;

    });

}