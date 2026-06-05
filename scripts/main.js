import { AppRepository } from "./services/AppRepository.js";
import { AppHubPage } from "./AppHubPage.js";

const THEME_STORAGE_KEY = "app-hub-theme";
const THEME_LIGHT = "light";
const THEME_DARK = "dark";

const root = document.documentElement;
const themeToggle = document.getElementById("theme-toggle");
const cardContainer = document.getElementById("app-cards");

function applyTheme(theme) {
	root.setAttribute("data-theme", theme);

	if (!themeToggle) {
		return;
	}

	const isDark = theme === THEME_DARK;
	themeToggle.setAttribute("aria-pressed", String(isDark));
	themeToggle.setAttribute("aria-label", isDark ? "Switch to light mode" : "Switch to dark mode");
	const label = themeToggle.querySelector(".theme-toggle-label");
	if (label) {
		label.textContent = isDark ? "Light mode" : "Dark mode";
	}
}

function getSavedTheme() {
	const storedTheme = localStorage.getItem(THEME_STORAGE_KEY);
	if (storedTheme === THEME_DARK || storedTheme === THEME_LIGHT) {
		return storedTheme;
	}
	return THEME_LIGHT;
}

applyTheme(getSavedTheme());

if (themeToggle) {
	themeToggle.addEventListener("click", () => {
		const currentTheme = root.getAttribute("data-theme") === THEME_DARK ? THEME_DARK : THEME_LIGHT;
		const nextTheme = currentTheme === THEME_DARK ? THEME_LIGHT : THEME_DARK;

		applyTheme(nextTheme);
		localStorage.setItem(THEME_STORAGE_KEY, nextTheme);
	});
}

if (cardContainer) {
	const appHubPage = new AppHubPage({
		container: cardContainer,
		appRepository: new AppRepository()
	});

	appHubPage.render();
}
