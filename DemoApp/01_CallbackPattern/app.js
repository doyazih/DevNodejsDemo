var dbContext = require('./db');

//Procedural
console.log('Procedural pattern');
var data = dbContext.querySync('select * from straw_hat_crew');

for (var i = 0; i < data.length; i++) {
	console.log(data[i]);
}

//Callback
console.log('Callback pattern');
dbContext.query('select * from straw_hat_crew', function (err, data) {
    if (err) {
        return console.error(err);
    }

    data.forEach(function (item, idx) {
        console.log(item);
    });
});
