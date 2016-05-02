var dbContext = require('./db.js');

//Procedural
var data = dbContext.query('select * from table');

//Callback
dbContext.query('select * from table', function (err, data) {
    if (err) {
        return console.error(err);
    }

    //Do(data);
    data.forEach(function (item, idx) {
        console.log(item);
    });
});
