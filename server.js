var express = require('express');
var mysql = require('mysql');
var app = express();
var port = 3000;
// connect mysql
var con = mysql.createConnection({
 host: 'localhost',
 user: 'root',
 password: 'root'
});

require('./route/main.js')(app);
require('./route/user.js')(app, con);


app.listen(port, () => {
    console.log(`listening on http://localhost:${port}`)
});
