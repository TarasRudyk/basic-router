Router.route('resful', {where: 'server'})
	.get(function() {
		this.response.end('GET request\n');
	})
	.post(function() {
		this.response.end('POST request\n');
	})
	.put(function() {
		this.response.end('PUT request\n');
	})
	.delete(function() {
		this.response.end('DELETE request\n');
	})



