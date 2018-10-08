
var tablaModeradores = document.getElementById('tabla_moderadores');
var divFormNuevo = document.getElementById('formNuevoModerador');
var codigoValido;
var divTabla;
var codigosAEliminar = [];

window.onload = function(){

	//Inicializando codigo valido
	codigoValido = 4;

	//divContenedor de tabla
	divTabla = document.getElementById('divTablaModeradores');

	//Creando tabla

	var fila = tabla_moderadores.insertRow(0);
	fila.id = "0";
	var celda1 = fila.insertCell(0);
	var celda2 = fila.insertCell(1);
	var celda3 = fila.insertCell(2);

	var celda4 = fila.insertCell(3);

	var celda5 = fila.insertCell(4);
	var celda6 = fila.insertCell(5);
	celda1.innerHTML = "<strong>Codigo</strong>";
	celda2.innerHTML = "<strong>Nombre</strong>";
	celda3.innerHTML = "<strong>Apellido</strong>";

	celda4.innerHTML = "<strong>Fecha Nac</strong>";

	celda5.innerHTML = "<strong>Correo</strong>";
	celda6.innerHTML = "<strong>Eliminar</strong>";
	for (i = 0; i < 3; i++){
		var fila = tabla_moderadores.insertRow(i + 1);
		fila.id = i + 1;
		var celda1 = fila.insertCell(0);
		var celda2 = fila.insertCell(1);
		var celda3 = fila.insertCell(2);
		var celda4 = fila.insertCell(3);
		var celda5 = fila.insertCell(4);
		var celda6 = fila.insertCell(5);
		celda1.innerHTML = codigosModeradores[i];
		celda2.innerHTML = nombresModeradores[i];
		celda3.innerHTML = apellidosModeradores[i];

		celda4.innerHTML = fechasModeradores[i];

		celda5.innerHTML = usuariosModeradores[i];
		celda6.innerHTML = '<input type="checkbox" onclick="marcarModerador(this)" id="chx'+ codigosModeradores[i] + '">';
	}
}

function verFormNuevo(){
	divFormNuevo = document.getElementById('formNuevoModerador');
	divFooter = document.getElementById('moderadores_footer');
	divTabla.style.top = '115%';
	divFooter.style.top = '150%';
	//tabla_moderadores.style.top = '100%';

	divFormNuevo.hidden = false;

	document.getElementById('txtNombre').focus();
}

function cancelarNuevo(){
	divFormNuevo.hidden = true;
	//tabla_moderadores.style.top = '50%';
	divTabla.style.top = '50%';
	divFooter = document.getElementById('moderadores_footer');
	divFooter.style.top = '110%';
}

function guardarModerador(){
	usuario = document.getElementById('txtUsuario');
	console.log(usuariosModeradores.includes(usuario))
	if (usuariosModeradores.includes(usuario.value) || usuario.value == ""){
		document.getElementById('correcto').hidden = true;
		document.getElementById('alerta').hidden = false;
	}
	else{
		document.getElementById('correcto').hidden = false;
		document.getElementById('alerta').hidden = true;
		nombre = document.getElementById('txtNombre');
		apellido = document.getElementById('txtApellido');
		fecha = document.getElementById('txtFecha');
		var fila = tabla_moderadores.insertRow(codigosModeradores.length + 1);
		fila.id = codigoValido;
		var celda1 = fila.insertCell(0);
		var celda2 = fila.insertCell(1);
		var celda3 = fila.insertCell(2);
		var celda4 = fila.insertCell(3);
		var celda5 = fila.insertCell(4);
		var celda6 = fila.insertCell(5);
		celda1.innerHTML = codigoValido;
		celda2.innerHTML = nombre.value;
		celda3.innerHTML = apellido.value;
		celda4.innerHTML = fecha.value;
		celda5.innerHTML = usuario.value;
		celda6.innerHTML = '<input type="checkbox" onclick="marcarModerador(this)" id="chx' + codigoValido + '">';
		codigosModeradores.push(codigoValido++);
		usuariosModeradores.push(usuario.value);
		nombre.value="";
		apellido.value="";
		usuario.value="";
		nombre.focus();
	}
	
}

function isEmail(email) {
    if(email == ""){
        return true;
    }
    else{
        var regex = /^([a-zA-Z0-9_.+-])+\@(([a-zA-Z0-9-])+\.)+([a-zA-Z0-9]{2,4})+$/;
        return regex.test(email);
    }
}

function validarCorreo(){
	usuario = document.getElementById('txtUsuario').value;
	if (isEmail(usuario)){

		document.getElementById('alerta').hidden = true;
		document.getElementById('btnGuardar').disabled = false;
	}
	else{
		document.getElementById('alerta').hidden = false;
		document.getElementById('btnGuardar').disabled = true;
	}
}

function marcarModerador(r){
	if (r.checked){
		codigosAEliminar.push(r.id);
	}
	else{
		codigosAEliminar.splice(codigosAEliminar.indexOf(r.id), 1);
	}
}

function eliminar(){
	console.log(codigosModeradores);
	for (i = 0; i < codigosAEliminar.length; i++){
		tabla_moderadores.deleteRow(document.getElementById(codigosAEliminar[i]).parentNode.parentNode.rowIndex);
		codigosModeradores.splice(codigosModeradores.indexOf(codigosAEliminar[i]), 1);
	}
	codigosAEliminar= [];
}