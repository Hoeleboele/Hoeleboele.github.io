import { AppEntry } from "../models/AppEntry.js";

export class AppRepository {
	getAll() {
		return [
			new AppEntry({
				name: "DND Character Tracker",
				url: "https://hoeleboele.github.io/DNDCharacterTracker/",
				logoPath: "logos/DndCharacterTrackerLogo.png",
				description: "Track your D&D characters, stats, and inventory. Made for use during Dungeons and Dragons sessions."
			}),
			new AppEntry({
				name: "GOA Init Tracker",
				url: "https://hoeleboele.github.io/GOAInitTracker/",
				logoPath: "logos/GuardsInitiativeTrackerLogo.png",
				description: "Manage initiative order for Guards of Atlantis 2 the boardgame."
			}),
			new AppEntry({
				name: "Boardgame Helper",
				url: "https://hoeleboele.github.io/UniversalBoardgameHelper/",
				logoPath: "logos/BoardgameHelperLogo.png",
				description: "Assist with various boardgames, keeping track of scores, lives or choose a start player."
			}),
			new AppEntry({
				name: "6 Siege Timer",
				url: "https://hoeleboele.github.io/6-Siege-Timer/",
				logoPath: "logos/6SiegeTimerLogo.png",
				description: "A timer for the boardgame 6 Siege, to manage the game flow and keep track of the time left for each player."
			}),
			new AppEntry({
				name: "Iron Quest",
				url: "https://hoeleboele.github.io/FitnessTracker/",
				logoPath: "logos/IronQuestLogo.png",
				description: "Track your fitness activities, progress, and goals like a true hero."
			})
		];
	}
}
