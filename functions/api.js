/** @format */
import express from 'express';
import serverless from 'serverless-http';
const app = express();
const router = express.Router();

router.get('/', (req, res) => {
	res.send('<h1>fafafa</h1>');
});
app.use('/.netlify/functions/api', router);
export const handler = serverless(app);
