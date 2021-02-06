import { Sorter } from './Sort';

export class NumbersCollection extends Sorter {
	constructor(public data: number[]) {
		super();
	}
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
