import { IAppData } from "./interfaces";
import * as tools from './tools';

export const showAppData = (appData: IAppData) => {
	const showAppDataElem = document.querySelector<HTMLPreElement>('.showAppData');
	if (showAppDataElem) {
		showAppDataElem.innerText = JSON.stringify(appData, null, 2);
	}
}

export const addEventsToFlashcardFronts = (appData: IAppData) => {
	const frontElems = document.querySelectorAll<HTMLDivElement>('.front');
	for (const frontElem of frontElems) {
		frontElem.addEventListener('click', () => {
			const backElem = frontElem.nextElementSibling;
			if (backElem) {
				(backElem as HTMLDivElement).style.display = 'block';
				const flashcard = appData.flashcards.find(m => m.front === frontElem.innerText);
				if (flashcard) {
					flashcard.showingBack = true;
					tools.showAppData(appData);
				}
			}
		})
	}
}