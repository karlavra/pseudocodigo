function costoBoleto(){
	var costoKilometro=parseFloat(prompt("Ingrese el costo por Kilometro"));
	var kmArecorrer=parseInt(prompt("Ingrese los Kilometros a recorrer"));
	var costo=parseFloat(costoKilometro*kmArecorrer);

	alert("El costo de boleto es " +costo);
}
costoBoleto()