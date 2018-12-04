let nome = document.getElementById("input-name");

nome.addEventListener("input", () => { 
	let outputName = document.getElementById("avatar-nome");
	outputName.innerHTML = nome.value;
});
