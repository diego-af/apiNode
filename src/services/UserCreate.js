

import {Users} from '../models/Users'

export class UserCreate{

        async exeucte({name}){
           

            const users = await Users.create({
                name: name
            })


            return users;
        }

}



