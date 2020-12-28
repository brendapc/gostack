import { compare, hash } from 'bcryptjs'
import "reflect-metadata"
import { sign } from 'jsonwebtoken'
import { injectable, inject } from 'tsyringe'
import AppError from '../../../shared/errors/AppError'
import User from "../infra/typeorm/entities/User";
import authConfig from '../../../config/auth'
import iUsersRepository from "../repositories/iUsersRepository";
import UsersRepository from '../infra/typeorm/repositories/UsersRepository';
import iHashProvider from '../providers/HashProvider/models/iHashProvider';

interface IRequest {
	email: string;
	password: string;
}
interface IResponse{
	user: User;
	token: string;

}
@injectable()
class AuthenticateUserService {
	constructor(
		@inject('UsersRepository') 
		private usersRepository: iUsersRepository,

		@inject('HashProvider')
		private hashProvider: iHashProvider
	){ }

		

		public async execute({ email, password}: IRequest ): Promise<IResponse>{
			
			const user = await this.usersRepository.findByEmail(email)

			if(!user){
				throw new AppError('Incorrect email/password combination', 401)
			}

			const passwordMatched = await this.hashProvider.compareHash(password, user.password)

			if(!passwordMatched){
				throw new AppError('Incorrect email/password combination', 401 )
			}

			const { secret, expiresIn } = authConfig.jwt
			const token = sign({ }, secret, {
				subject: user.id,
				expiresIn
			})

			return {
				user,
				token
			}
		}
}

export default AuthenticateUserService
