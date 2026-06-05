export class AppCardView {
	create(appEntry) {
		const card = document.createElement("a");
		card.className = "card";
		card.href = appEntry.url;
		card.target = "_blank";
		card.rel = "noopener noreferrer";
		card.setAttribute("aria-label", appEntry.ariaLabel);

		card.innerHTML = `
			<figure class="preview-shell">
				<iframe class="preview-frame" loading="lazy" title="${appEntry.previewTitle}" src="${appEntry.url}"></iframe>
				<p class="fallback-note">Preview blocked by browser settings. Click card to open the app.</p>
			</figure>
			<div class="card-content">
				<h2 class="card-title">${appEntry.name}</h2>
				<p class="card-url">${appEntry.url}</p>
			</div>
		`;

		return card;
	}
}
