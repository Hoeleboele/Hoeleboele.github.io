import { AppEntry } from "../models/AppEntry.js";

export class AppRepository {
	getAll() {
		return [
			new AppEntry({
				name: "DND Character Tracker",
				url: "https://hoeleboele.github.io/DNDCharacterTracker/"
			}),
			new AppEntry({
				name: "GOA Init Tracker",
				url: "https://hoeleboele.github.io/GOAInitTracker/"
			})
		];
	}
}
