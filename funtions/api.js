/** @format */
import express from 'express';
import serverless from 'serverless-http';

const app = express();

app.get('/', (req, res) => {
	res.send('<h1>fafafa</h1>');
});

app.use('/.netlify/functions/api', router);
module.exports.handler = serverless(app);
