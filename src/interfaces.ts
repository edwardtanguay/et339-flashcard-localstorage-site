export interface IFlashcard {
	front: string;
	back: string;
	showingBack: boolean;
	status: string;
}
export interface IAppData {
	titleTesting: string;
	titleLearned: string;
	flashcards: IFlashcard[];
}