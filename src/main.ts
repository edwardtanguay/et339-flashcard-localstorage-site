import './style.scss'
import * as tools from './tools';

const appData = tools.restoreSiteState();

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