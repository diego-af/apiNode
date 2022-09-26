
import {Users}from '../models/Users'
import sequelize from '../../db'



export class UserCreate{



   async execute(req, res){

       
        const {name} = req.body

        const user = await Users.create(name)


        return user;
    }
}

