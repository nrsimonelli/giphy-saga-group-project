const express = require('express');
const { default: Axios } = require('axios');
const router = express.Router();

router.get('/:string', (req, res) => {
    Axios.get(`http://api.giphy.com/v1/gifs/search?q=${req.params.string}&api_key=${process.env.GIPHY_API_KEY}&limit=27`)
		.then((response) => {
			console.log('sending back data', response.data);
			res.send(response.data);
		})
		.catch((error) => {
			console.log('Error in GET request', error);
			res.sendStatus(500);
		});
});

module.exports = router;