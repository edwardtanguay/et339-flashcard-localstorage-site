import './style.css'

const flashcards = [
	{
		front: "in view of the situation",
		back: "in Anbetracht der Situation",
		status: "learning"
	},
	{
		front: "the negotiation",
		back: "die Verhandlung",
		status: "learning"
	},
	{
		front: "comprehensive",
		back: "umfassend",
		status: "learning"
	}
];

document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
<h1>Flashcards</h1>
<div class="flashcards">
	${flashcards.map(flashcard => {
	return `
			<div class="flashcard">
				<div class="front">${flashcard.front}</div>
				<div class="front">${flashcard.back}</div>
			</div>`
}).join('')}
</div>
`;