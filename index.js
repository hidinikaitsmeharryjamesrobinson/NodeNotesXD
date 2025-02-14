const express = require("express");
const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
const port = 10000;
const mysql = require('mysql2')

const pool = mysql.createPool({
	host     : '20.0.153.128',
	user     : 'Harry',
	password : 'Q^9Akbpqv#Rn',
	database : 'Harry'
});

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get('/', function(request, response) {
	response.send(`
 
<!-- Write the HTML here lol -->

`)});


function startServer(port) {
    app.listen(port, () => {
        console.log(`Server is at http://localhost:${port}`);
    }).on('error', (err) => {
    if (err.code === 'EADDRINUSE') {
        console.log(`Port ${port} is busy, trying ${port + 1}`);
        startServer(port + 1);
    } else {
        console.error('Server error:', err);
    }
    });
};
            
startServer(port);
