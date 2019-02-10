class AlertUI {
	constructor() {
		this.alertContainer = document.body;
	}

	/**
	 * @description The function displays an error message.
	 * @param text - error text
	 */
	addAler(text) {
		const template = AlertUI.alerTemplate(text);

		this.alertContainer.insertAdjacentHTML("beforeEnd", template);

		this.deleteAlert();
	}

	/**
	 * @description The function removes the error message from the view.
	 */
	deleteAlert() {
		setTimeout(function () {
			document.body.removeChild(document.body.querySelector('.alert'));
		}, 2000);
	}

	/**
	 * @description The function creates a markup with the filled data and returns it
	 * @param text - error text
	 * @return {string} - returns markup
	 */
	static alerTemplate(text) {
		return `
			<div class="alert" style="position: fixed; top: 0; left: 0; width: 100vw; height: 100vh; z-index: 9999; background-color: rgba(0, 0, 0, .5)">
				<div class="card-panel red darken-4 z-depth-1" style="position: absolute; top: 50%; left: 50%; transform: translate(-50%, -50%);">
					<div class="valign-wrapper black-text">
						<span>${ text }</span>
					</div>
				</div>
			</div>`;
	}
}