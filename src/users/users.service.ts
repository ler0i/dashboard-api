import { injectable } from 'inversify';
import { UserLoginDto } from './dto/user-login.dto';
import { UserRegisterDto } from './dto/user-register.dto';
import { User } from './user.entity';
import { IUserService } from './users.service.interface';

@injectable()
export class UserService implements IUserService {
	async createUser({ email, name, password }: UserRegisterDto): Promise<User | null> {
		// проверка что пользователь есть?
		// если существует - возвращаем null,
		// если не существует - создаем
		return null;
	}
	async validateUser(dto: UserLoginDto): Promise<boolean> {
		return true;
	}
}
