
const Sequelize = require('sequelize');
const zlib = require('zlib');
const dotenv = require('dotenv');
const { timeStamp, log } = require('console');
dotenv.config()

const {sequelize} = require('./index');

const User = require('./User'); 

const {DataTypes , Op} = Sequelize


  

const Personne = sequelize.define('personne',{
  id : {
     type :  DataTypes.INTEGER ,
     allowNull: false,
     autoIncrement: true,
     primaryKey: true 
  },
  first_name : {
    type: DataTypes.STRING ,
    allowNull: false ,
 
  },
  last_name : {
    type: DataTypes.STRING ,
    allowNull: false ,
 
  },
  age :{
    type :  DataTypes.INTEGER ,
    allowNull: false , 
  },
  description : {
    type: DataTypes.STRING,
    allowNull: true
  }
},
{ 
 timestamps: false,
paranoid : true
}
 
);



 Personne.hasMany(User, { onDelete : 'CASCADE'})
 User.belongsTo(Personne , { onDelete : 'CASCADE'} )
 
 
  



 

module.exports = Personne 