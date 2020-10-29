import { Request, Response } from 'express'

import createUser from './services/createUser'

export function helloWorld(req: Request, res: Response){
    const user = createUser({
        email: 'brenda',
        password: 'jdnjs',
        techs: [
            'react',
            'node',
            { title: 'front' , experience: 2 },
        ]
    })

}