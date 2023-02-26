function validaForm(){
	let validaCod = document.forms["cadastrar"]["codigo"].value;
	let validaDat = document.forms["cadastrar"]["data"].value;
	let validaTit = document.forms["cadastrar"]["titulo"].value;
	let validaDir = document.forms["cadastrar"]["diretor"].value;
	let validaAto = document.forms["cadastrar"]["ator"].value;
	let validaNot = document.forms["cadastrar"]["nota"].value;
	let validaRad = document.forms["cadastrar"]["radio"].value;

	if (validaCod == ""){
		alert("O código deve ser preenchido!");
		return false;		
	}

	if (validaDat == ""){
		alert("A data de lançamento deve ser preenchido!");
		return false;		
	}

	if (validaTit == ""){
		alert("O título deve ser preenchido!");
		return false;		
	}

	if (validaDir == ""){
		alert("O nome do diretor(a) deve ser preenchido!");
		return false;		
	}

	if (validaAto == ""){
		alert("O nome do(a) ator/atriz principal deve ser preenchido!");
		return false;		
	}

	if (validaNot == ""){
		alert("A nota IMDB deve ser preenchido!");
		return false;		
	}

	if (validaRad == ""){
		alert("O gênero deve ser marcado!");
		return false;		
	}
}

function insere(){
	let Cod = document.forms["cadastrar"]["codigo"].value;
	let Dat = document.forms["cadastrar"]["data"].value;
	let Tit = document.forms["cadastrar"]["titulo"].value;
	let Dir = document.forms["cadastrar"]["diretor"].value;
	let Ato = document.forms["cadastrar"]["ator"].value;
	let Not = document.forms["cadastrar"]["nota"].value;
	let Rad = document.forms["cadastrar"]["radio"].value;
	let inserir = document.getElementById("inserirTabela");
	inserir.innerHTML = `<th scope="row">${Cod}</th>
						 <td>${Dat}</td>
						 <td>${Tit}</td>
						 <td>${Dir}</td>
						 <td>${Ato}</td>
						 <td>${Not}</td>
						 <td>${Rad}</td>`
}