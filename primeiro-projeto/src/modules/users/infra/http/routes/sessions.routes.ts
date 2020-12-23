import { Router } from 'express'
import AuthenticateUserService from '../../../services/AuthenticateUserService'
import UsersRepository from '@modules/users/infra/typeorm/repositories/UsersRepository'
import Authenticate from '../../../services/AuthenticateUserService'
const sessionsRouter = Router()


sessionsRouter.post('/', async (req, res)=> {

		const { email, password } = req.body
		
		const usersRepository = new UsersRepository()
		const authenticateUser = new AuthenticateUserService(usersRepository)
		const { user, token } = await authenticateUser.execute({
			email,
			password
		})

		delete user.password

		return res.json({  user, token })


})

export default sessionsRouter
