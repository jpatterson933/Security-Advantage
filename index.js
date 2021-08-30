fetch("https://alpha-vantage.p.rapidapi.com/query?function=OVERVIEW&symbol=MSFT&datatype=json&output_size=compact", {
	"method": "GET",
	"headers": {
		"x-rapidapi-host": "alpha-vantage.p.rapidapi.com",
		"x-rapidapi-key": "keyhidden"
	}
})
.then(response => {
	console.log(response);
    return response.json()
})
.then(data => {
    console.log(data)
})
.catch(err => {
	console.error(err);
});