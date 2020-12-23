import { response, Router } from 'express'
import multer from 'multer'
import uploadConfig from '@config/upload'

import CreateUserService from '../../../services/CreateUserService'
import ensureAuthenticated from '@modules/users/infra/http//middlewares/ensureAuthenticated'
import UpdateUserAvatarService from '@modules/users/services/UpdateUserAvatar'
import UsersRepository from '@modules/users/infra/typeorm/repositories/UsersRepository'

const usersRouter = Router()
const upload = multer(uploadConfig)

usersRouter.post('/', async (req, res)=> {
	
	
	const { name, email, password } = req.body
	
		const usersRepository = new UsersRepository()
		const createUser = new CreateUserService(usersRepository)

		const user = await createUser.execute({
			name, email, password
		})

		delete user.password;

		return res.json(user)

})

usersRouter.patch('/avatar', ensureAuthenticated, upload.single('avatar'), async (req, res)=>{

		const UpdateUserAvatar = new UpdateUserAvatarService(usersRepository)

		const user = await UpdateUserAvatar.execute({
			user_id: req.user.id,
			avatarFileName: req.file.filename
		})

		delete user.password

		return res.json(user)

})
export default usersRouter


