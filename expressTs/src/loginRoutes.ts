import {
	Router,
	Response,
	Request,
	NextFunction,
} from 'express';

interface Request_body extends Request {
	body: { [key: string]: string | undefined };
}

const router = Router();

let requireAuth = (
	req: Request,
	res: Response,
	next: NextFunction,
) => {
	if (!(req.session && req.session.loggedIn)) {
		res.status(403).send('haha must login bitch');
	}
	next();
};

router.get('/', (req: Request_body, res: Response) => {
	if (req.session && req.session.loggedIn)
		res.send("hello khaoula you're in");
	res.send('You must login :(');
});

router.get('/login', (req: Request_body, res: Response) => {
	res.send(`
  <form method="post">
  <div> 
  <label>Email</label>
  <input name="email" />
  </div>
 
  <div>
  <label>Password</label>
  <input name="password" type="password"/>
  </div>
   <button>Submit<button/>
  </form>
  `);
});

router.post(
	'/login',
	(req: Request_body, res: Response) => {
		const { email, password } = req.body;

		if (
			email === 'hello@khaoula.fr' &&
			password === 'khaoula <3'
		) {
			req.session = { loggedIn: true };
			res.redirect('/');
		}
	},
);

router.get('/logout', (req: Request, res: Response) => {
	req.session = undefined;
	res.redirect('/');
});

router.get(
	'/protected',
	requireAuth,
	(req: Request, res: Response) => {
		res.send(
			"Hello khaoula this is protected and you're the only one who can see it ;)",
		);
	},
);
export { router };
