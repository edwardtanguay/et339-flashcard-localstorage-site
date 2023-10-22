import './style.scss'

const appData = {
	title: "Flashcards",
	flashcards: [
		{
			front: "in view of the situation",
			back: "in Anbetracht der Situation",
			showingBack: false,
			status: "learning"
		},
		{
			front: "the negotiation",
			back: "die Verhandlung",
			showingBack: false,
			status: "learning"
		},
		{
			front: "comprehensive",
			back: "umfassend",
			showingBack: false,
			status: "learning"
		}
	]
}

document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
<h1>${appData.title}</h1>
<div class="flashcards">
	${appData.flashcards.map(flashcard => {
	return `
			<div class="flashcard">
				<div class="front">${flashcard.front}</div>
				<div class="back">${flashcard.back}</div>
			</div>`
}).join('')}
</div>
`;

const frontElems = document.querySelectorAll<HTMLDivElement>('.front');
for (const frontElem of frontElems) {
	frontElem.addEventListener('click', () => {
		const backElem = frontElem.nextElementSibling;
		if (backElem) {
			(backElem as HTMLDivElement).style.display = 'block';
		}
	})
}