

fetch("https://alpha-vantage.p.rapidapi.com/query?interval=5min&function=TIME_SERIES_INTRADAY&symbol=MSFT&datatype=json&output_size=compact", {
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