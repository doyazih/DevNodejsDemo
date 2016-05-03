var dbContext = require('./db');

//Procedural Programming Model
console.log('Procedural Programming Pattern');
var data = dbContext.querySync('select * from straw_hat_crew');

for (var i = 0; i < data.length; i++) {
	console.log(data[i]);
}

//Event Driven Prgramming Model
console.log('Callback Pattern');
dbContext.query('select * from straw_hat_crew', function (err, data) {

    if (err) {
        return console.error(err);
	}

	data.forEach(function (item) {
		console.log(item);
	});

	console.log('>> Complete loading data');
});