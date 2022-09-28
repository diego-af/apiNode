import express,{Router} from 'express'
import sequelize from './db'
import { UserChecking } from './src/middlewares/UserChecking'




const  app = express()
const route = Router()
const userChecking = new UserChecking()

app.use(route)
app.use(express.json())

app.post('/users',userChecking.execute)  




app.listen(3000, console.log("Rodando na porta 3000"))