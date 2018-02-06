console.log('main.js loaded');

const BASE_URL = 'http://api.reactprototypes.com';
const API_KEY = '?key=testuser1234';

axios
	.get(`${BASE_URL}/todos${API_KEY}`)
	.then((resp) => {
		console.log('Response: ', resp);
	})
	.catch((err) => {
		console.log('Error: ', err);
	});

const newItem = {
	title: 'Spilling tea',
	details: 'Caution: The tea is scalding'
};

// axios
// 	.post(`${BASE_URL}/todos${API_KEY}`, newItem)
// 	.then((resp) => {
// 		console.log('Add response: ', resp);
// 	})
// 	.catch((err) => {
// 		console.log('Add error: ', err);
// 	});
