const BASE_URL = 'http://api.reactprototypes.com';
const API_KEY = '?key=testuser1234';
//               ^query string; starts with "?"

axios.get(`${BASE_URL}/todos${API_KEY}`).then((resp) => {
	//get request: single argument (URL)
	//returns a promise; use a .then() to get the result of the promise
	const { todos } = resp.data;
	const table = $('table tbody');

	addToDom(todos, table);
});

const addToDom = (list, container) => {
	const tableRows = list.map((item, index) => {
		const tableData = [
			$(`<td>${index + 1}</td>`),
			$(`<td>${item.title}</td>`),
			item.complete ? $(`<td class="text-success">Yes</td>`) : $(`<td class="text-danger">No</td>`)
		];

		return $('<tr>').append(tableData);
	});

	container.append(tableRows);
};
