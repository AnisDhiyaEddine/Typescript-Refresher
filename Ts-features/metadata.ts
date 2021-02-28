import 'reflect-metadata';

@printMetaData
class plane {
	color: string = 'red';

	@markFunction('hello world')
	fly(): void {
		console.log('vrrrr flying');
	}
}

function markFunction(secret: string) {
	return function(target: plane, key: string) {
		Reflect.defineMetadata(
			'secret',
			secret,
			target,
			key,
		);
	};
}

function printMetaData(target: typeof plane) {
	for (let key in target.prototype) {
		console.log(
			Reflect.getMetadata(
				'secret',
				target.prototype,
				key,
			),
		);
	}
}
