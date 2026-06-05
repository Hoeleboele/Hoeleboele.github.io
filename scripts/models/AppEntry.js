export class AppEntry {
	constructor({ name, url }) {
		this.name = String(name);
		this.url = String(url);
	}

	get ariaLabel() {
		return `Open ${this.name}`;
	}

	get previewTitle() {
		return `${this.name} preview`;
	}
}
