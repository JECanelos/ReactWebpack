const express = require('express');
const app = express();

const port = process.env.PORT || 9000;
const host = process.env.HOST || 'localhost';

app.use(express.static('dist'));

app.listen(port, host, error => {
	if (error) return console.error(error);
	console.log(`Server is listening on http://${host}:${port}`);
});
