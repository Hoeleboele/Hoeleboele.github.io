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

		this.setupTouchOverlayToggle(logoLink);

		return logoLink;
	}

	setupTouchOverlayToggle(logoLink) {
		if (this.hasDesktopHover() || this.isMobileLayout()) {
			return;
		}

		const overlay = logoLink.querySelector(".app-card-overlay");
		if (!overlay) {
			return;
		}

		logoLink.setAttribute("aria-expanded", "false");

		logoLink.addEventListener("click", (event) => {
			const isOpen = logoLink.classList.contains("overlay-open");

			if (!isOpen) {
				event.preventDefault();
				logoLink.classList.add("overlay-open");
				logoLink.setAttribute("aria-expanded", "true");
				overlay.setAttribute("aria-hidden", "false");
			}
		});

		logoLink.addEventListener("blur", () => {
			if (!logoLink.classList.contains("overlay-open")) {
				return;
			}

			logoLink.classList.remove("overlay-open");
			logoLink.setAttribute("aria-expanded", "false");
			overlay.setAttribute("aria-hidden", "true");
		});
	}

	hasDesktopHover() {
		if (typeof window === "undefined" || typeof window.matchMedia !== "function") {
			return false;
		}

		return window.matchMedia("(hover: hover) and (pointer: fine)").matches;
	}

	isMobileLayout() {
		if (typeof window === "undefined" || typeof window.matchMedia !== "function") {
			return false;
		}

		return window.matchMedia("(max-width: 620px)").matches;
	}
}
