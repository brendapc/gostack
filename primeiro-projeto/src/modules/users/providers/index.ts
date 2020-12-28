import { container } from 'tsyringe'
import BCryptHashProvider from './HashProvider/implementations/BCryptHashProvider'
import iHashProvider from './HashProvider/models/iHashProvider'

container.registerSingleton<iHashProvider>('HashProvider', BCryptHashProvider)