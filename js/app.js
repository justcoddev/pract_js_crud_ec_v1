const productos = [];

function mostrar() {
  console.log('Mostrando lista de productos...');
  // let texto = "";
  const texto = new Producto();
  for (let producto of productos) {
    console.log(producto);
    texto += `<li> ${producto.idproducto} ${producto.nombre}</li>`;
  }
  // document.getElementById('productoss').innerHTML = texto;
  document.getElementById('tableidproducto').innerHTML = texto.idproducto;
  document.getElementById('tablenombre').innerHTML = texto.nombre;
  document.getElementById('tablecantidad').innerHTML = texto.cantidad;
  document.getElementById('tableprecio').innerHTML = texto.precio;
  console.log(texto);
}

function agregar() {
  const forma = document.forms['forma'];
  const nombre = forma['nombre'];
  const idproducto = forma['idproducto'];
  // console.log(idproducto.value);
  // console.log(nombre.value);
  const product = new Producto(idproducto.value, nombre.value, cantidad.value, precio.value);
  console.log(product.idproducto);
  console.log(product.nombre);
  productos.push(product);
  mostrar();

}