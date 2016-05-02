function areaTriangulo(){
	var base=parseInt(prompt("Ingrese la base del triangulo"));
	var altura=parseInt(prompt("Ingrese la altura del triangulo"));
	var area=(base*altura)/2;

	alert("El area del triangulo es " +area);
}
areaTriangulo()