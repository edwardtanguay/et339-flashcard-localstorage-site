import { IAppData } from "./interfaces";
import * as tools from './tools';

export const redrawSite = (appData: IAppData) => {

	// FLASHCARDS BEING TESTED
	const testedFlashcardElems = document.querySelector('.testedFlashcards');
	if (testedFlashcardElems) {
		testedFlashcardElems.innerHTML = `
			${appData.flashcards.map(flashcard => {
			if (flashcard.status === 'testing') {
				return `
				<div class="flashcard">
					<div class="front">${flashcard.front}</div>
					<div class="back" ${flashcard.showingBack ? 'style="display: block"' : 'style="display: none"'}><span class="text">${flashcard.back}</span>
						<div class="buttonArea">
							<button>test again</button>
							<button>learned</button>
						</div>
					</div>
				</div>`
			}
		}).join('')}`
	}

	// APPDATA
	const showAppDataElem = document.querySelector<HTMLPreElement>('.showAppData');
	if (showAppDataElem) {
		showAppDataElem.innerText = JSON.stringify(appData, null, 2);
	}

	// FLASHCARDS LEARNED
	const learnedFlashcards = document.querySelector('.learnedFlashcards');
	if (learnedFlashcards) {
		learnedFlashcards.innerHTML = `
		<ol>
			${appData.flashcards.map(flashcard => {
			if (flashcard.status === 'learned') {
				return `
				<li>${flashcard.front} = <strong>${flashcard.back}</strong></li>`
			}
			}).join('')}
		</ol>`
	}
	tools.addEventsToFlashcardFronts(appData);
	tools.addEventsToButtons(appData);
}

export const addEventsToFlashcardFronts = (appData: IAppData) => {
	const frontElems = document.querySelectorAll<HTMLDivElement>('.front');
	for (const frontElem of frontElems) {
		frontElem.addEventListener('click', () => {
			const backElem = frontElem.nextElementSibling;
			if (backElem) {
				console.log(backElem);

				(backElem as HTMLDivElement).innerHTML = 'nnn';
				(backElem as HTMLDivElement).style.display = 'block';
				const flashcard = appData.flashcards.find(m => m.front === frontElem.innerText);
				if (flashcard) {
					flashcard.showingBack = true;
					tools.redrawSite(appData);
				}
			}
		})
	}
}

export const addEventsToButtons = (appData: IAppData) => {
	const backElems = document.querySelectorAll<HTMLDivElement>('.back');
	for (const backElem of backElems) {
		const backTextElem = backElem.querySelector<HTMLSpanElement>('.text');
		if (backTextElem) {
			const backText = backTextElem.innerText;
			const flashcard = appData.flashcards.find(m => m.back === backText);
			if (flashcard) {
				const [takeAgainButtonElem, learnedButtonElem] = backElem.querySelectorAll<HTMLButtonElement>('button');
				takeAgainButtonElem.addEventListener('click', () => {
					flashcard.showingBack = false;
					(backElem as HTMLDivElement).style.display = 'none';
					tools.redrawSite(appData);
				})
				learnedButtonElem.addEventListener('click', () => {
					flashcard.showingBack = false;
					flashcard.status = 'learned';
					(backElem as HTMLDivElement).style.display = 'none';
					tools.redrawSite(appData);
				})
			}
		}
	}
}