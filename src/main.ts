import './style.scss'
import * as tools from './tools';

const appData = {
	titleTesting: "Flashcards being tested",
	titleLearned: "Flashcards learned",
	flashcards: [
		{
			front: "in view of the situation",
			back: "in Anbetracht der Situation",
			showingBack: false,
			status: "testing"
		},
		{
			front: "the negotiation",
			back: "die Verhandlung",
			showingBack: false,
			status: "testing"
		},
		{
			front: "comprehensive",
			back: "umfassend",
			showingBack: false,
			status: "testing"
		}
	]
}

document.querySelector<HTMLDivElement>('#app')!.innerHTML = /*html*/ `
<h1>${appData.titleTesting}</h1>
<div class="testedFlashcards"> </div>
<div class="debugArea">
	<hr>
	<pre class="showAppData"></pre>
	<hr>
</div>
<h2>${appData.titleLearned}</h2>
<div class="learnedFlashcards"> </div>
`;

tools.redrawSite(appData);