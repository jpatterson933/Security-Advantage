
// fetch for autocomplete data
fetch('./companyInfo.json')
                .then(res => res.json())
                .then(data => {
					console.log(data)
                  console.log(data.tickerSymbol[10], data.companyName[10])
				  
                })
                .catch(err => console.error(err));

// our fetch query function for quick company description
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
		//our container located in the index.html file
		const container = $("#container");
		
		//new html element created for any new companys that are searched
		const companyCard = `
		<div id="company-card-wrapper">
			<h2>${data.Name}</h2>
			<h3>Ticker Symbol: ${data.Symbol}</h3>
			<p id="content">${data.Description}<span id="more-info"><button id="show-info">...</button>${data.Description.substring(50)}</span></p>
			<p>Asset Type: 	${data.AssetType}</p>
			<p>Industry: ${data.Industry} Sector: ${data.Sector}</p>
		</div>
		`
		container.append(companyCard);

	})
	.catch(err => {
		console.error(err)
	})
})
