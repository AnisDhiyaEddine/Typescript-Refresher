@classDecorator
class Boat {
	color: string = 'blue';
	get formattedColor(): string {
		return `this boats color is ${this.color}`;
	}

	@errorLog('Oops something went wrong')
	pilot(
		@parameterDecorator speed: string,
		@parameterDecorator generateWake: boolean,
	): void {
		if (speed === 'fast') {
			console.log('swish');
		} else {
			console.log('(-_-)');
		}
	}
}

function errorLog(error: string) {
	return function(
		target: any,
		key: string,
		dsc: PropertyDescriptor,
	) {
		let method = dsc.value;
		try {
			method();
		} catch (e) {
			console.log(error);
		}
	};
}

function parameterDecorator(
	target: any,
	key: string,
	index: number,
) {
	console.log(key, index);
}

function classDecorator(constructor: typeof Boat) {
	console.log(constructor);
}
/* let boat = new Boat();
boat.pilot('fast', false); */
