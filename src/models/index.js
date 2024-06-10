const Sequelize = require('sequelize');
 
const dotenv = require('dotenv');
dotenv.config()


const sequelize = new Sequelize(process.env.MYSQL_DATABASE ,process.env.MYSQL_USER,process.env.MYSQL_PWD,{
  host:process.env.MYSQL_HOST,
  port:process.env.MYSQL_PORT,
  dialect:'mysql'
});


 



module.exports =   {sequelize,Sequelize} 