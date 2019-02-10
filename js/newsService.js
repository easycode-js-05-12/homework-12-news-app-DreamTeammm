const http = new CustomHttp();

class NewsService {
	constructor() {
		this.apiUrl = 'https://newsapi.org/v2';
		this.apiKey = '9c27b0f722b84da5a08312d2b125351b';
		this.country = 'ua';
		this.category = 'technology';
	}

	/**
	 * @description Get all news
	 * @param callback - the callback that handles the response.
	 * @param category - news of this category
	 * @param country - news in a specific country
	 */
	getTopHeadlinesNews(callback, category = this.category, country = this.country) {
		http.get(`${ this.apiUrl }/top-headlines?country=${ country }&category=${ category }&apiKey=${ this.apiKey }`, callback);
	}

	/**
	 * @description Get all search news
	 * @param callback - the callback that handles the response.
	 * @param searchNews - keyword for which the request is made
	 */
	getEverythingNews(callback, searchNews) {
		http.get(`${ this.apiUrl }/everything?q=${ searchNews }}&apiKey=${ this.apiKey }`, callback);
	}
}