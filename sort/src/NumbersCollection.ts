export class NumbersCollection {
	constructor(public data: number[]) {}
	get length(): number {
		return this.data.length;
	}

	swap(leftHand: number, rightHand: number): void {
		let temp = this.data[leftHand];
		this.data[leftHand] = this.data[rightHand];
		this.data[rightHand] = temp;
	}

	compare(leftHand: number, rightHand: number): boolean {
		return this.data[leftHand] > this.data[rightHand];
	}
}
