import { NumbersCollection } from './NumbersCollection';

export abstract class Sorter {
	abstract length: number;
	abstract compare(
		leftHand: number,
		rightHand: number,
	): boolean;
	abstract swap(
		leftHand: number,
		rightHand: number,
	): void;

	sort(): void {
		let length = this.length;
		for (let i = 0; i < length; i++) {
			for (let j = 0; j < length - i - 1; j++) {
				if (this.compare(j, j + 1)) {
					this.swap(j, j + 1);
				}
			}
		}
	}
}
