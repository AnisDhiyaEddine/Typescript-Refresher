class Vehicle {
	constructor(public color: string) {}
	protected wee(): void {
		console.log('wee');
	}
}

const vehicle = new Vehicle('red');
console.log(vehicle.color);

class CarVehicle extends Vehicle {
	constructor(public wheels: number, color: string) {
		super(color);
	}

	private drive(): void {
		console.log('vroom');
	}

	startDriving(): void {
		this.wee();
		this.drive();
	}
}

const car = new CarVehicle(4, 'black');
car.startDriving();
