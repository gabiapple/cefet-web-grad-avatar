let nome = document.getElementById("input-name");

nome.addEventListener("input", () => { 
	let outputName = document.getElementById("avatar-nome");
	outputName.innerHTML = nome.value;
});


let color = document.getElementById("input-color");

color.addEventListener("change", () => {
	let outputCabeca = document.getElementById("avatar-cabeca");
	let outputCorpo = document.getElementById("avatar-corpo");
	outputCorpo.style.backgroundColor = color.value; 
	outputCabeca.style.backgroundColor = color.value;
});

let select = document.getElementById("select-image");

select.addEventListener("change", () => {
	let cabelo = document.getElementById("avatar-cabelo");
	cabelo.src = select.value;
});
// -------
