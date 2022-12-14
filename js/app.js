const productos = [];

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

    texto += `<tr> <td> ${producto.idproducto}  </td> <td> ${producto.nombre}  </td><td> ${producto.cantidad}  </td><td> ${producto.precio}  </td> </tr>`;
    console.log(tabla);
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