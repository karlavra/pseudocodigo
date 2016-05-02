function costoHabitacion(){
	var habitacion = parseInt(prompt("Ingrese el costo de habitacion por día"));
	var diasHospedados = parseInt(prompt("Ingrese la cantidad de dias que se hospedo"));
	var costoEstancia = habitacion*diasHospedados;

	alert("El costo por la cantidad de días hospedado es " + costoEstancia);
}
costoHabitacion()