export class AppCardView {
	create(appEntry) {
		const logoLink = document.createElement("a");
		logoLink.className = "app-logo-link";
		logoLink.href = appEntry.url;
		logoLink.target = "_blank";
		logoLink.rel = "noopener noreferrer";
		logoLink.setAttribute("aria-label", appEntry.ariaLabel);

		logoLink.innerHTML = `
			<img class="app-logo" loading="lazy" src="${appEntry.logoPath}" alt="${appEntry.logoAlt}">
			<div class="app-card-overlay" aria-hidden="true">
				<span class="app-card-overlay-text">${appEntry.description}</span>
			</div>
		`;

		return logoLink;
	}
}
