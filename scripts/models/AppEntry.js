export class AppEntry {
	constructor({ name, url, logoPath, description }) {
		this.name = String(name);
		this.url = String(url);
		this.logoPath = logoPath ? String(logoPath) : "";
		this.description = description ? String(description) : "";
	}

	get ariaLabel() {
		return `Open ${this.name}`;
	}

	get logoAlt() {
		return `${this.name} logo`;
	}
}
