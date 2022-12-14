const productos = [];

function modificar() {
  const forma = document.forms['forma'];
  const id = forma['id'];
  const nombre = forma['nombre'];
  const cantidad = forma['cantidad'];
  const precio = forma['precio'];


  const producto = new Producto(id.value, nombre.value, cantidad.value, precio.value);
  productos.push(producto);
  for (let producto of productos) {
    console.log(producto);
  }
  mostrar();

}
// function eliminar() {

// }
const eliminar = (producto) => {
  // let indiceEliminar = productos.findIndex(producto => producto.id === id);
  // productos.splice(indiceEliminar, id);

  var indice = producto.indexOf(3); // obtenemos el indice
  producto.splice(indice, 1); // 1 es la cantidad de elemento a eliminar

  console.log(arreglo);

  mostrar();
}

function mostrar() {
  // let id=0;
  // let nombre="";
  // let cant=0;
  // let prec=0;
  let texto = "";
  // for (let i = 0; i < productos.length; i++) {
  //     nombre=productos[i].nombre;

  // }
  for (let producto of productos) {
    // id=producto.idproducto;
    // nombre=producto.nombre;
    // cant=producto.cantidad;

    // prec=producto.precio;

    texto += `<tr> <td> ${producto.idproducto}  </td> <td> ${producto.nombre}  </td><td> ${producto.cantidad}  </td><td> ${producto.precio}  </td> <td> <button class="boton" onclick="modificar()">EDITAR</button></td> <td> <button class="boton" onclick="eliminar()">ELIMINAR</button></td> </tr>`;
    console.log(tabla);
    console.log(producto);
  }
  document.getElementById('tabla').innerHTML = texto;
  // document.getElementById('tableidproducto').innerHTML =id ;
  // document.getElementById('tablenombre').innerHTML = nombre;
  // document.getElementById('tablecantidad').innerHTML = cant;
  // document.getElementById('tableprecio').innerHTML = prec;

}
function agregar() {
  const forma = document.forms['forma'];
  const id = forma['id'];
  const nombre = forma['nombre'];
  const cantidad = forma['cantidad'];
  const precio = forma['precio'];


  const producto = new Producto(id.value, nombre.value, cantidad.value, precio.value);
  productos.push(producto);
  for (let producto of productos) {
    console.log(producto);
  }
  mostrar();

}