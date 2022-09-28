import {Users}from '../models/Users'
import sequelize from '../../db'

import { UserCreate } from '../services/UserCreate'


export class UserChecking{



    async execute(req,res,next){

        const usercreate = new UserCreate()
        const {name} = req.body
        if(name === ''){
            return res.status(200).json({
                error:'error'
            })
        }

        const users = await usercreate.exeucte(req.body)


        next()
       return res.send('Foi')
    }

    


 

       
      
}

