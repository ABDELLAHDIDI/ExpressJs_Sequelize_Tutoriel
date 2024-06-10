
const Sequelize = require('sequelize');
const zlib = require('zlib'); 
const {sequelize} = require('./index');
const Product = require('./Product');
const { timeStamp } = require('console');


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
timestamps: false,
paranoid : true 
}
 
);
 

Product.belongsToMany(User ,{ through : 'userproduct'})
User.belongsToMany(Product ,{ through : 'userproduct'})

 

module.exports = User  