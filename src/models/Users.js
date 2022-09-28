import Sequelize, { DataType, DataTypes } from 'sequelize';
import db from '../../db'




const User = db.define('user',{
    id:{
        type:Sequelize.INTEGER,
        allowNull:false,
        autoIncrement:true,
        primaryKey:true,

    },
    name:{
        type:Sequelize.STRING,
        allowNull:true,
        unique:true
        
    }
})




 User.sync()


export const Users = User