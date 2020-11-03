import { response, Router } from 'express'
import multer from 'multer'
import uploadConfig from '../config/upload'

import CreateUserService from '../services/CreateUserService'
import ensureAuthenticated from '../middlewares/ensureAuthenticated'
import UpdateUserAvatarService from '../services/UpdateUserAvatar'

const usersRouter = Router()
const upload = multer(uploadConfig)


usersRouter.post('/', async (req, res)=> {
	try {

		const { name, email, password } = req.body

		const createUser = new CreateUserService()

		const user = await createUser.execute({
			name, email, password
		})

		delete user.password;

		return res.json(user)

	}catch(err){
		return res.status(400).json({error: err.message})
	}
})

usersRouter.patch('/avatar', ensureAuthenticated, upload.single('avatar'), async (req, res)=>{
	try{
		const UpdateUserAvatar = new UpdateUserAvatarService

		const user = await UpdateUserAvatar.execute({
			user_id: req.user.id,
			avatarFileName: req.file.filename
		})

		delete user.password
		
		return res.json(user)
	}catch(err){
		return response.status(400).json({ error: err.message})
	}
})
export default usersRouter


