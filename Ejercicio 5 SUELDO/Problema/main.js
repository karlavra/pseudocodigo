function sueldo (){
	var horas= parseInt(prompt("Ingresar el # de horas trabajadas"));
	var pagoxhora= parseInt(prompt("Ingresar la cantidad de pago por hora"));
	var sueldo=horas*pagoxhora;

	alert("El sueldo a pagar es " +sueldo);
}
sueldo ()