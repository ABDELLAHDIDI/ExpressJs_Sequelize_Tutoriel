
const Sequelize = require('sequelize');
const zlib = require('zlib'); 
const {sequelize} = require('./index'); 


const {DataTypes , Op} = Sequelize

const Product = sequelize.define('product',{
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
  price : {
    type: DataTypes.INTEGER ,
    allowNull: false ,
 
  }
},
{
timestamps: false,
paranoid : false 
}
 
);

 
 

module.exports = Product  