var moderadores = ["paty", "rober", "cris", "vero"]
var administrador = "mari";
var passModeradores = ["tpi115", "doberto115", "tpi115", "tpi115"];
var passAdmin = "tpi115_marisol";

function iniciarSesion(){
	var usuario = document.getElementById("txtUser").value;
	var pass = document.getElementById("txtPass").value;
	console.log(usuario, pass);
	for(i = 0; i < moderadores.length; i++){
		if (moderadores[i] == usuario && pass == passModeradores[i]){
			window.location.href = "www.google.com";
		}
		else{
			if (usuario == administrador && pass == passAdmin)
				window.location.href = "moderadores.html" ;
		}
	}
}