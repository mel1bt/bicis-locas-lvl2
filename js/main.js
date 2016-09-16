function validateForm(){
	/* Escribe tú código aquí */
	var nom = document.getElementById("name").value;
	if( nom == null || nom.length == 0 || nom == ""){
	  alert("Escribe un nombre.");
	}else if ( /[0-9]/.test(nom)){
		alert("nN ingrese números.")
	}else if ( /^[a-z]/.test(nom.charAt(0)) ){
		alert ("escriba el primer caracter en mayuscula")
	}
}