export interface IFlashcard {
	front: string;
	back: string;
	showingBack: boolean;
	status: string;
}
export interface IAppData {
	title: string;
	flashcards: IFlashcard[];
}