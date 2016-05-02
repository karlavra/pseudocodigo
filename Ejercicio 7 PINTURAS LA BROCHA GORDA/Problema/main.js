function precioAcobrar(){
	var costo=parseFloat(prompt("Ingrese el costo por m2"));
	var Apintar=parseFloat(prompt("Ingrese los m2 a pintar"));
	var precio=parseFloat(costo*Apintar);

	alert("El precio a cobrar por " +Apintar+ " m2 es " +precio);
}
precioAcobrar()
