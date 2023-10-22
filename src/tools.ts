export const addEventsToFlashcardFronts = () => {
	const frontElems = document.querySelectorAll<HTMLDivElement>('.front');
	for (const frontElem of frontElems) {
		frontElem.addEventListener('click', () => {
			const backElem = frontElem.nextElementSibling;
			if (backElem) {
				(backElem as HTMLDivElement).style.display = 'block';
			}
		})
	}
}