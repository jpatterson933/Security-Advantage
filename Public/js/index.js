

fetch("https://alpha-vantage.p.rapidapi.com/query?function=OVERVIEW&symbol=MSFT&datatype=json&output_size=compact", {
	"method": "GET",
	"headers": {
		"x-rapidapi-host": "alpha-vantage.p.rapidapi.com",
		"x-rapidapi-key": "1106950b9dmshf48984ce0c10169p1b65adjsn6b26758c20f9"
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