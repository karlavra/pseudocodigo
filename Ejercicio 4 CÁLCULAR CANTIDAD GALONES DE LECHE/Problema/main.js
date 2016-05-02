function litrosAgalones(){
	var litrosdeleche=parseInt(prompt("Ingresar los litros de leche"));
	var galones=parseFloat(0.2642*litrosdeleche);
	alert("El productor tendra " +galones+ " galones de leche.");
}
litrosAgalones()