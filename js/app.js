const newsService = new NewsService();
const newsUI = new NewsUI();
const alertUI = new AlertUI();

// UI Elements
const form = document.forms['newsControlForm'];
const countrySelect = form['country'];
const categorySelect = form['category'];
const search = form['search'];

/**
 * @description The function tracks changes in the select and sends a request to the server
 */
function onSelectChange() {
	const country = countrySelect.value;
	const category = categorySelect.value;

	if (!country) return alertUI.addAler('Выберите страну');
	if (!country || !category) return;

	newsService.getTopHeadlinesNews((response) => {
		const { articles } = response;

		newsUI.clearContainer();
		articles.forEach((news) => newsUI.addNews(news));
	}, category, country);
}

/**
 * @description The function tracks changes in the search field, and sends a request to the server
 */
function onSearchChange() {
	const searchNews = search.value;

	newsService.getEverythingNews((response) => {
		const { articles } = response;
		newsUI.clearContainer();

		if (!articles.length) {
			search.value = '';
			return alertUI.addAler('По данному запросу нет новостей');
		}

		articles.forEach((news) => newsUI.addNews(news));
	}, searchNews);
}

// Event listeners
countrySelect.addEventListener('change', onSelectChange);
categorySelect.addEventListener('change', onSelectChange);
search.addEventListener('input', function (event) {
	if (event.target.value.length >= 3) {
		onSearchChange();
	}
});