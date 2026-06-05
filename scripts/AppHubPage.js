import { AppCardView } from "./ui/AppCardView.js";

export class AppHubPage {
	constructor({ container, appRepository }) {
		this.container = container;
		this.appRepository = appRepository;
		this.cardView = new AppCardView();
	}

	render() {
		const entries = this.appRepository.getAll();
		const cards = entries.map((entry) => this.cardView.create(entry));

		this.container.replaceChildren(...cards);
		this.revealCards(cards);
		this.attachPreviewFallback(cards);
	}

	revealCards(cards) {
		cards.forEach((card, index) => {
			setTimeout(() => {
				card.classList.add("revealed");
			}, 140 + index * 130);
		});
	}

	attachPreviewFallback(cards) {
		cards.forEach((card) => {
			const frame = card.querySelector(".preview-frame");
			const shell = card.querySelector(".preview-shell");
			let loaded = false;

			if (!frame || !shell) {
				return;
			}

			frame.addEventListener("load", () => {
				loaded = true;
			});

			setTimeout(() => {
				if (!loaded) {
					shell.classList.add("preview-error");
				}
			}, 3000);
		});
	}
}
