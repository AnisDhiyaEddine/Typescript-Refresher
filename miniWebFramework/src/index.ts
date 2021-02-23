import { Console } from 'console';
import { User } from './models/User';

let user = User.buildUser({
	name: 'khaoula my love',
	age: 20,
});

user.on('save', () =>
	console.log('horaaay khaoula my love'),
);

user.save();
