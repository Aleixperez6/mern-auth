import {Request, Response} from 'express'
import jwt from 'jsonwebtoken'

export const loginHandler = (req: Request ,res: Response) => {

    //req.body : email, password
    //validation norms
    //store in database - mongodb
    //generate token, jsonwebtoken hasheado


    const token = jwt.sign({
        //email, img profile, age....
        test: "test"
    }, 
    //token largo
    'secret', {
        expiresIn: 60 * 60 * 24
    })

    //lo que se le devuelve al cliente, token:token
    return res.json({
        token
    })

}

//minuto 17;:14 fatzcode zustand