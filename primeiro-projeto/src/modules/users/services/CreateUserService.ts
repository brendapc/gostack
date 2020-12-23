import { hash } from 'bcryptjs'
import User from "../infra/typeorm/entities/User";
import AppError from '../../../shared/errors/AppError'
import iUsersRepository from "../repositories/iUsersRepository";
import { inject, injectable } from 'tsyringe'
interface IRequest {
	name: string,
	email: string,
	password: string
}

@injectable()
class CreateUserService {
	constructor(
		@inject('UsersRepository')
		private usersRepository: iUsersRepository){ }

	public async execute({ name, email, password }: IRequest): Promise<User> {


		const checkUserExits = await this.usersRepository.findByEmail(email)

		if(checkUserExits){
			throw new AppError('Email address already used')
		}

		const hashedPassword = await hash(password, 8)

		const user = await this.usersRepository.create({
			name,
			email,
			password: hashedPassword
		})

		return user
	}
}

export default CreateUserService
