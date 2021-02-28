import { Request, Response } from 'express';
import {
	get,
	controller,
	bodyValidator,
	post,
} from './decoratores';

@controller('/auth')
class LoginController {
	@get('/login')
	getLogin(req: Request, res: Response): void {
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
	}

	@post('/login')
	@bodyValidator('email', 'password')
	Login(req: Request, res: Response) {
		const { email, password } = req.body;
		if (
			email === 'hello@khaoula.fr' &&
			password === 'khaoula'
		) {
			req.session = { loggedIn: true };
		}
		res.redirect('/');
	}

	@get('/logout')
	Logout(req: Request, res: Response) {
		req.session = undefined;
		res.redirect('/');
	}
}
