import { Request, Response, NextFunction } from 'express';
import {
	get,
	controller,
	useMiddlewares,
} from './decoratores';

@controller('')
export class RootController {
	static requireAuth(
		req: Request,
		res: Response,
		next: NextFunction,
	) {
		console.log("i'm here ;)");
		if (!(req.session && req.session.loggedIn)) {
			res.status(403).send('haha must login bitch');
			return;
		}
		next();
	}

	@get('/protected')
	getProtected(req: Request, res: Response) {
		res.send(
			"Hello khaoula this is protected and you're the only one who can see it ;)",
		);
	}

	@get('/')
	@useMiddlewares(RootController.requireAuth)
	getRoot(req: Request, res: Response) {
		if (req.session && req.session.loggedIn) {
			res.send("hello khaoula you're in");
			return;
		}
		res.send('You must login :(');
	}
}
