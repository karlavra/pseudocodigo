function promedio(){
	var num1= parseInt(prompt("Ingrese el primer numero a promediar"));
	var num2= parseInt(prompt("Ingrese el segundo numero a promediar"));
	var num3= parseInt(prompt("Ingrese el tercer numero a promediar"));
	var suma= num1+num2+num3;
	var promedio= suma/3;

	alert("El promedio es de "+ promedio)
}
promedio()