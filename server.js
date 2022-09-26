import express,{Router} from 'express'
import sequelize from './db'
import { UserCreate } from './src/services/UserCreate'




const  app = express()
const route = Router()


app.use(route)
app.use(express.json())

app.get('/',async(req, res) => {
    
})
app.listen(3000, console.log("Rodando na porta 3000"))