
const Sequelize = require('sequelize');
const zlib = require('zlib');
const dotenv = require('dotenv');
dotenv.config()


const sequelize = new Sequelize(process.env.MYSQL_DATABASE ,process.env.MYSQL_USER,process.env.MYSQL_PWD,{
  host:process.env.MYSQL_HOST,
  port:process.env.MYSQL_PORT,
  dialect:'mysql'
});

const {DataTypes , Op} = Sequelize

const User = sequelize.define('user',{
  id : {
     type :  DataTypes.INTEGER ,
     allowNull: false,
     autoIncrement: true,
     primaryKey: true 
  },
  name : {
    type: DataTypes.STRING ,
    allowNull: false ,
 
  },
  age :{
    type :  DataTypes.INTEGER ,
    allowNull: false , 
  }
},
{
timestamps: false

}
 
);


module.exports = User