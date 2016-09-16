function validateForm(){

	var nom = document.getElementById("name").value;
    var apellido = document.getElementById("lastname").value;
    var cor = document.getElementById("input-email").value;
    var contr = document.getElementById("input-password").value;
    var text = "";
    if (nom.length == 0 && apellido == 0 && cor == 0 && contr == 0) {
		text = "Complete los campos.";
		error(text, "name");
	} else{
    //NOMBRE
	if( nom == null || nom.length == 0 || nom == ""){
		text = "Escribe un nombre.";
		error(text, "name");
	}else if ( /[0-9]/.test(nom)){
		text = "No ingrese números.";
		error(text, "name");
	}else if ( /^[a-z]/.test(nom.charAt(0)) ){
		text="escriba el primer caracter en mayuscula";
		error(text, "name");
	}
    //APELLIDO
	if( apellido == null || apellido.length == 0 || apellido == ""){
	 	text = "Escribe tu apellido.";
		error(text, "lastname");
	}else if ( /[0-9]/.test(apellido)){
		text ="No ingrese números.";
		error(text, "lastname");
	}else if ( /^[a-z]/.test(apellido.charAt(0)) ){
		text = "Escriba el primer caracter en mayúscula.";
		error(text, "lastname");
	}
    //EMAIL
	var emailRegex=/^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
    if(!emailRegex.test(cor)) {
        text = "Ingrese un correo válido.";
        error(text, "input-email");
    };
    //CONTRASEÑA
    if(contr == null || contr.length == 0) {
        text = "Ingresa una contraseña.";
        error(text, "input-password");
    } else if (contr.length < 6){
        text = "Contraseña no válida, debe tener como mínimo 6 caracteres.";
        error(text, "input-password");
    } 
    if (contr == "123456" || contr == "098754" || contr == "password"){
    	text = "'123456', '098754' y 'password' no son contraseñas válidas.";
    	error(text, "input-password");
    };
    //SELECT
	var opcion = document.querySelector("select").selectedIndex;
        if( opcion == null || opcion == "" ) {
        text = "Por favor, seleccione una opción.";
        var error = document.createElement("span");
		var textError = document.createTextNode(text);
		error.appendChild(textError);
		var name = document.querySelector("select");
		var padre = name.parentNode;
		var newSpan = padre.insertBefore(error, name);
    }
}
	function error(texto, identificador){
		var error = document.createElement("span");
		var textError = document.createTextNode(texto);
		error.appendChild(textError);
		var name = document.getElementById(identificador);
		var padre = name.parentNode;
		var newSpan = padre.insertBefore(error, name);
	}

}

	

