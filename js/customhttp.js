class CustomHttp {
	/**
	 * @description The function sends a request to the server
	 * @param url - uniform resource locator
	 * @param callback - handler
	 */
	get(url, callback) {
		const xhr = new XMLHttpRequest();
		xhr.open('GET', url);
		xhr.send();
		xhr.addEventListener('load', () => callback(JSON.parse(xhr.responseText)));
	}

	/**
	 * @description The function sends data to the server
	 * @param url - uniform resource locator
	 * @param data - data
	 * @param callback - handler
	 */
	post(url, data, callback) {
		const xhr = new XMLHttpRequest();
		xhr.open('POST', url);
		xhr.setRequestHeader('Content-type', 'application/json');
		xhr.send(data);
		xhr.addEventListener('load', () => callback(xhr.responseText));
	}
}