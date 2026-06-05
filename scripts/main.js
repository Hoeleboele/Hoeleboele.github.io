import { AppRepository } from "./services/AppRepository.js";
import { AppHubPage } from "./AppHubPage.js";

const cardContainer = document.getElementById("app-cards");

if (cardContainer) {
	const appHubPage = new AppHubPage({
		container: cardContainer,
		appRepository: new AppRepository()
	});

	appHubPage.render();
}
