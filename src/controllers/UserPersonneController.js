const  User  = require('../models/User'); 
const  Personne   = require('../models/Personne'); 
const {sequelize,Sequelize} = require('../models/index')

const {DataTypes , Op} = Sequelize


const setFk  = async (req,res)=>{

    const {first_name, last_name  } = req.body

    
    try {  
        console.log("first_name : " , first_name , "\n last_name : ",last_name);
          findUsers  =  await  User.findAll({where : {  name: [first_name  , last_name]  }}) 
    
        if(!findUsers || findUsers.length === 0  ){
         res.status(400).send("Users not found")
         return
        }  
       const    findpersonne =   await Personne.findAll({where: { first_name : first_name , last_name :last_name }})
        if(!findpersonne  ){
          res.status(400).send("personne  not found")
          return
         } 
        console.log("findpersonne  :", findpersonne ,"\n", findpersonne[0] instanceof Personne )
        await  findUsers.forEach( elmt =>   {
          console.log("elmt user : " , elmt  );
          const result   =    findpersonne[0].setUser(elmt)
          console.log("result :",result)
        });
    
     res.status(200).send("fk affected successfully !! ")
      } 
      catch(err) {
        console.error('Error setting FK  personne:', err);
        res.status(500).send('Internal Server Error');
      };

  
}

const setfk = async (req,res)=>{
    const {name} = req.params

    try{
        console.log("name : " , name);
        const findUsers  = await User.findAll({where: { name: name }})
        if(!findUsers || findUsers.length ===  0 ){
            res.status(400).send("Users not found")
            return
        }

        const    findpersonne =   await Personne.findOne({where: { [Op.or]: [{     first_name : name  }, {  last_name :name }] }})
        if(!findpersonne  ){
          res.status(400).send("personne  not found")
          return
         } 

        console.log("findpersonne  :", findpersonne ,"\n", findpersonne instanceof Personne )

        await  findUsers.forEach( elmt =>   {
          console.log("elmt user : " , elmt  );
          const result   =    findpersonne.setUser(elmt)
          console.log("result :",result)
        });
    
     res.status(200).send("fk affected successfully !! ")

    } catch(err){
        console.error('Error setting fk  personne:', err);
        res.status(500).send('Internal Server Error');
    }
}

const set_fk = async (req,res)=>{
  try{
    
    const findUsers  = await User.findAll({where: { 	personneId : null }})
    if(!findUsers || findUsers.length ===  0 ){
        res.status(400).send("Users not found")
        return
    }

    const    findpersonne =   await Personne.findOne()
    if(!findpersonne  ){
      res.status(400).send("personne  not found")
      return
     } 

    console.log("findpersonne  :", findpersonne ,"\n", findpersonne instanceof Personne )

    const result   =  await   findpersonne.addUsers(findUsers)
    console.log("result : ", result);

 res.status(200).send("fk affected successfully !! ")

} catch(err){
    console.error('Error setting fk  personne:', err);
    res.status(500).send('Internal Server Error');
}
}

const countUsers = async (req,res)=>{
  const {id} = req.params 
  try{
    
    const    findpersonne =   await Personne.findByPk(id)
    if(!findpersonne  ){
      res.status(400).send("personne  not found")
      return
     } 
 
    const result   =  await   findpersonne.countUsers()
    console.log("result : ", result);

 res.status(200).send(`users counte is  : ${result}` )

} catch(err){
    console.error('Error setting fk  personne:', err);
    res.status(500).send('Internal Server Error');
}
}

const removeUsers = async (req,res)=>{
  const {id} = req.params 
  try{
    
    const    findpersonne =   await Personne.findByPk(id)
    if(!findpersonne  ){
      res.status(400).send("personne  not found")
      return
     } 

     const  findUsers = await findpersonne.getUsers(); 

     if(!findUsers || findUsers=== 0   ){
      res.status(400).send("personne  not found")
      return
     } 

    const result   =  await   findpersonne.removeUser(findUsers)
    console.log("result : ", result);

 res.status(200).send(`users removed successfully !!!!!  ${result}` )

} catch(err){
    console.error('Error setting fk  personne:', err);
    res.status(500).send('Internal Server Error');
}
}


module.exports = {setFk,setfk,set_fk,countUsers,removeUsers}


