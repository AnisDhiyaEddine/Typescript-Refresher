export class CharactersCollection {
	constructor(public data: string) {}

	get length(): number {
		return this.data.length;
	}

	compare(leftHand: number, rightHand: number): boolean {
		return (
			this.data[leftHand].toLowerCase() >
			this.data[rightHand].toLowerCase()
		);
	}

	swap(leftHand: number, rightHand: number): void {
		let chars = this.data.split('');
		let tempo = chars[leftHand];
		chars[leftHand] = chars[rightHand];
		chars[rightHand] = tempo;

		this.data = chars.join('');
	}
}
