const  User  = require('../models/User'); 
const  Product   = require('../models/Product'); 
const {sequelize,Sequelize} = require('../models/index')

const {DataTypes , Op} = Sequelize

 

const addProducts = async (req,res)=>{
  try{
    
    const findUsers  = await User.findAll( )
    if(!findUsers   ){
        res.status(400).send("Users not found")
        return
    }

    const    findproducts =   await Product.findAll()
    if(!findproducts  ){
      res.status(400).send("product  not found")
      return
     }  

    await   findUsers.forEach(elmt => {
      
      const result =elmt. addProducts(findproducts)
      console.log("result : ", result);

    }); 
 res.status(200).send("porducts  affected successfully !! ")

} catch(err){
    console.error('Error setting poroducts :', err);
    res.status(500).send('Internal Server Error');
}
}

// const countUsers = async (req,res)=>{
//   const {id} = req.params 
//   try{
    
//     const    findpersonne =   await Personne.findByPk(id)
//     if(!findpersonne  ){
//       res.status(400).send("personne  not found")
//       return
//      } 
 
//     const result   =  await   findpersonne.countUsers()
//     console.log("result : ", result);

//  res.status(200).send(`users counte is  : ${result}` )

// } catch(err){
//     console.error('Error setting fk  personne:', err);
//     res.status(500).send('Internal Server Error');
// }
// }

// const removeUsers = async (req,res)=>{
//   const {id} = req.params 
//   try{
    
//     const    findpersonne =   await Personne.findByPk(id)
//     if(!findpersonne  ){
//       res.status(400).send("personne  not found")
//       return
//      } 

//      const  findUsers = await findpersonne.getUsers(); 

//      if(!findUsers || findUsers=== 0   ){
//       res.status(400).send("personne  not found")
//       return
//      } 

//     const result   =  await   findpersonne.removeUser(findUsers)
//     console.log("result : ", result);

//  res.status(200).send(`users removed successfully !!!!!  ${result}` )

// } catch(err){
//     console.error('Error setting fk  personne:', err);
//     res.status(500).send('Internal Server Error');
// }
// }


module.exports =  addProducts


