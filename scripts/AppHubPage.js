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
		const columns = Math.min(3, Math.max(cards.length, 1));

		this.container.dataset.columns = String(columns);

		this.container.replaceChildren(...cards);
		this.revealCards(cards);
	}

	revealCards(cards) {
		cards.forEach((card, index) => {
			setTimeout(() => {
				card.classList.add("revealed");
			}, 140 + index * 130);
		});
	}
}
