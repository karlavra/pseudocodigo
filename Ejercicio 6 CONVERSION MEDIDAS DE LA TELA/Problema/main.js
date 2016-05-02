function conversion(){
	var cantidadMetros=parseInt(prompt("Ingrese la cantidad de metros a convertir"));
	var pulgadas=parseFloat(39.3701*cantidadMetros);

	alert("La cantidad de tela a pedir en pulgadas es " +pulgadas);
}
conversion()