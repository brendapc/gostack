import express, { Request, Response, NextFunction } from 'express';
import 'express-async-errors'
import cors from 'cors'
import 'reflect-metadata'
import routes from './routes';
import './database'
import uploadConfig from './config/upload'
import AppError from './errors/AppError'
const app = express();

app.use(express.json())

app.use(cors())
app.use('/files', express.static(uploadConfig.directory))
app.use(routes);

//tratando erros
app.use((err: Error, req: Request, res: Response, next: NextFunction ) => {
	if(err instanceof AppError){
		return res.status(err.statusCode).json({
			status: 'error',
			message: err.message
		})
	}
	console.error(err)

	return res.status(500).json({
		status: 'error',
		message: 'internal server error'
	})
})

app.listen(3333, () => {
	console.log('server started ✨');
});
