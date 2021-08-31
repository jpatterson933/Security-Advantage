// our fetch query function
const getCompanyDescription = (dropdownSelection) => {
	const baseUrl = "https://alpha-vantage.p.rapidapi.com/query?function=OVERVIEW&symbol=";
	const query = baseUrl + dropdownSelection + "&datatype=json&output_size=compact";
	console.log(query)
	return fetch(query, {
		"method": "GET",
		"headers": {
			"x-rapidapi-host": "alpha-vantage.p.rapidapi.com",
			"x-rapidapi-key": config
		}
	})
}

$("#ticker-choice").on("click", (e) => {
	e.preventDefault();
	const tickerSymbol = $("#ticker").val();
	getCompanyDescription(tickerSymbol)
	.then(response => {
		console.log(response)
		return response.json();
	})
	.then(data => {
		console.log(data)
		console.log(data.Name)
		console.log(data.Symbol)
		console.log(data.Description)

		const container = $("#container");

		const companyCard = `
			<h1>${data.Name}</h1>
			<h1>${data.Symbol}</h1>
			<p>${data.Description}<p>
		`

		container.append(companyCard);

	})
	.catch(err => {
		console.error(err)
	})
})
