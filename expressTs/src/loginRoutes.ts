import { Router, Response, Request } from 'express';

interface Request_body extends Request {
	body: { [key: string]: string | undefined };
}

const router = Router();

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

		res.send({ email, password });
	},
);
export { router };
