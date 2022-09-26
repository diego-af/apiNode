import Sequelize from 'sequelize'




const sequelize = new Sequelize("confissao", "root","102324",{
    host: 'localhost',
    dialect:'mysql'
})




export default sequelize