class NewsUI {
	constructor() {
		this.newsContainer = document.querySelector('.news-wrap .row');
	}

	/**
	 * @description Feature adds news to markup
	 * @param {object} news - object with full information about the news
	 */
	addNews(news) {
		const template = NewsUI.newsTemplate(news);

		// this.newsContainer.insertAdjacentHTML("afterbegin", template);
		this.newsContainer.appendChild(template);
	}

	/**
	 * @description The function clears the container from the news
	 */
	clearContainer() {
		let first = this.newsContainer.firstElementChild;

		while (first) {
			this.newsContainer.removeChild(first);
			first = this.newsContainer.firstElementChild;
		}
	}

	/**
	 * @description The function creates a markup with the filled data and returns it
	 * @param {Object} news - object with full information about the news
	 * @return {string} - returns markup
	 */
	// static newsTemplate(news) {
	// 	return `
	// 		<div class="col s12 m6">
	// 			<div class="card hoverable">
	// 				<div class="card-image">
	// 					<img src="${ news.urlToImage }">
	// 				</div>
	// 				<div class="card-content">
	// 					<span class="card-title">${ news.title || '' }</span>
	// 					<p>${ news.description || '' }</p>
	// 				</div>
	// 				<div class="card-action">
	// 					<a href="${ news.url }" target="_blank">Read more</a>
	// 				</div>
	// 			</div>
	// 		</div>`;
	// }

	/**
	 * @description - The function creates a markup with the filled data and returns it
	 * @param {Object} news - object with full information about the news
	 * @return {HTMLDivElement} - returns markup
	 */
	static newsTemplate(news) {
		let container = document.createElement('div');
		let holder = document.createElement('div');
		let imgHolder = document.createElement('div');
		let img = document.createElement('img');
		let cardContentHolder = document.createElement('div');
		let cardTitle = document.createElement('span');
		let cardContent = document.createElement('p');
		let cardActionHolder = document.createElement('div');
		let cardAction = document.createElement('a');

		container.classList.add('col');
		container.classList.add('s12');
		container.classList.add('m6');
		holder.classList.add('card');
		holder.classList.add('hoverable');
		imgHolder.classList.add('card-image');
		cardContentHolder.classList.add('card-content');
		cardTitle.classList.add('card-title');
		cardActionHolder.classList.add('card-action');

		if (news.urlToImage) {
			img.setAttribute('src', news.urlToImage);
			img.setAttribute('alt', 'image description');

			imgHolder.appendChild(img);
			holder.appendChild(imgHolder);
		}

		if (news.title) {
			cardTitle.innerHTML = news.title;
			cardContentHolder.appendChild(cardTitle);
		}

		if (news.description) {
			cardContent.innerHTML = news.description;
			cardContentHolder.appendChild(cardContent);
		}

		cardAction.setAttribute('href', news.url);
		cardAction.setAttribute('target', '_blank');
		cardAction.innerHTML = 'Read more';

		cardActionHolder.appendChild(cardAction);

		holder.appendChild(cardContentHolder);
		holder.appendChild(cardActionHolder);

		container.appendChild(holder);

		return container;
	}
}