import { inject, injectable } from 'inversify';
import { BaseController } from '../common/base.controller';
import { HTTPError } from '../errors/http-error.class';
import { NextFunction, Request, Response, Router } from 'express';
import { TYPES } from '../types';
import { ILogger } from '../logger/logger.interface';
import 'reflect-metadata';
import { IUserController } from './user.controller.interface';
import { UserLoginDto } from './dto/user-login.dto';
import { UserRegisterDto } from './dto/user-register.dto';
import { User } from './user.entity';
import { UserService } from './users.service';
import { ValidateMiddleware } from '../common/validate.middleware';
// import fs from 'fs';
// import { resolve } from 'path';

// class User {} - для откладки в devtools
// const users = [];
// clinic doctor --on-port='autocannon -m POST localhost:8000/users/register' -- node dist/main.js (поменять в терминале с powershell на cmd)
// const data = []; - для мониторинга производительности

@injectable()
export class UserController extends BaseController implements IUserController {
	constructor(
		@inject(TYPES.ILogger) private loggerServise: ILogger,
		@inject(TYPES.UserService) private userService: UserService,
	) {
		super(loggerServise);
		this.bindRoutes([
			{
				path: '/register',
				method: 'post',
				func: this.register,
				middlewares: [new ValidateMiddleware(UserRegisterDto)],
			},
			{ path: '/login', method: 'post', func: this.login },
		]);
	}

	login(req: Request<{}, {}, UserLoginDto>, res: Response, next: NextFunction): void {
		// this.ok(res, 'login');
		// users.push(new User());
		console.log(req.body);
		next(new HTTPError(401, 'ошибка авторизации ', 'login'));
	}

	async register(
		{ body }: Request<{}, {}, UserRegisterDto>,
		res: Response,
		next: NextFunction,
	): Promise<void> {
		// data.push(fs.readFileSync(resolve(__dirname, '../../path.mp4')));
		// console.log(req.body);
		// const newUser = new User(body.email, body.name);
		// await newUser.setPassword(body.password);
		const result = await this.userService.createUser(body);
		if (!result) {
			return next(new HTTPError(422, 'Такой пользователь уже существует!'));
		}
		this.ok(res, { email: result.email });
	}
}
