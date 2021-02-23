import { AxiosPromise } from 'axios';

interface modelAttributes<T> {
	get<K extends keyof T>(key: K): T[K];
	set(data: T): void;
	getAll(): T;
}

interface Events {
	on(eventNale: string, callback: () => void): void;
	trigger(eventName: string): void;
}

interface Sync<T> {
	fetch(id: number): AxiosPromise;
	save(data: T): AxiosPromise;
}

interface hasID {
	id?: number;
}

export class Model<T extends hasID> {
	constructor(
		private events: Events,
		private attributes: modelAttributes<T>,
		private sync: Sync<T>,
	) {}

	on = this.events.on;
	trigger = this.events.trigger;
	get = this.attributes.get;
	/* Pay attention to this syntax Ts compiler treats assignments 
  before constructor code .. this works because of init in constructor
  args
  */

	set(update: T) {
		this.attributes.set(update);
		this.events.trigger('change');
	}

	save(): void {
		this.sync.save(this.attributes.getAll());
		this.events.trigger('save');
	}
}
