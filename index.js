

fetch("https://alpha-vantage.p.rapidapi.com/query?function=OVERVIEW&symbol=MSFT&datatype=json&output_size=compact", {
	"method": "GET",
	"headers": {
		"x-rapidapi-host": "alpha-vantage.p.rapidapi.com",
		"x-rapidapi-key": config
	}
})
	.then(response => {
		console.log(response);
		return response.json();
	})
	.then(data => {
		console.log(data)
	})
	.catch(err => {
		console.error(err);
	});

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
	})
	.catch(err => {
		console.error(err)
	})
})
