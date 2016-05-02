function costoLlamada(){
	var costoMinuto=parseFloat(prompt("Ingrese el costo por minuto"));
	var minutosHablados=parseInt(prompt("Ingrese la cantidad de minutos hablados"));
	var costo=parseFloat(costoMinuto*minutosHablados);

	alert("El costo de la llamada es " +costo );
}
costoLlamada()