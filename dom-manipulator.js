function insertDogFood (dogFood) {
	console.log(dogFood[0].breeds);
	let output = null;
	let table = document.getElementById("petfood");
	output += `<tr>`;
	for (let i = 0; i < dogFood.length; i++) {
		output += `<td>${dogFood[i].name}</td>`;
		output += `<td>`;
		dogFood[0].breeds.forEach( function(item, index) {
			output += `${item}`;
		});
		output += `</td>`;
	}
	output += `</tr>`;
	table.innerHTML += output;
}



petFood.loadDogFood(insertDogFood);