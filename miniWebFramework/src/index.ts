import { User } from './models/User';

let user = new User({ name: 'Anis', age: 20 });

user.on('click', () => {
	console.log('hello khaoula');
});

user.on('click', () => {
	console.log('hello Anis');
});

user.trigger('click');
