const User = require('../models/User') 

const   getUsers =   async   (req,res)=>{

     try {
         console.log("getAll ")
         const users = await User.findAll() 
         res.status(200).send(users);
        return  
        } 
        catch(err){
        console.log("Error syncing the table and model  : " , err)
        }
}

 const getUser =    async  (req,res)=>{
            const {id} = req.params
            try {
              console.log("getUser : ") 
         const data = await User.findByPk(id)
          if(!!  data )
             {   
              const user =data.dataValues
                console.log("user : " , user )
                res.status(200).send(user);
              return 
            }
            res.status(400).send('No user found!');
                        return;

              } catch(err) {
              console.log("Error syncing the table and model  : " , err)
              }
}

const createUser = async (req,res)=>{
    try {
                    const { name, age } = req.body;
                    if (!name || !age) {
                      res.status(400).send('Name and age are required');
                      return;
                    }
                 
                    const user = await User.create({ name, age });
                 
                    res.status(201).send(`User created: ${JSON.stringify(user)}`);
                  } catch (error) {
                    console.error('Error creating user:', error);
                    res.status(500).send('Internal Server Error');
                  }
                
}

const updateUser = async (req,res)=>{
    const {id, name , age } = req.body
              
                  const findUser = await User.findByPk(id)
                  if(!findUser){
                   res.status(400).send("User not found")
                   return
                  }
              
              const result =  await User.update({ name: name   , age: age } , {where: { id: id }})
               console.log("result :",result)
                  res.status(200).send("user updated successfully !! ")
                   
}

const deleteUser = async (req,res)=>{
    const {id} = req.params
              
                    const findUser  = await User.findByPk(id)
                    if(!findUser  ){
                     res.status(400).send("User not found")
                     return
                    }
                   const result = await User.destroy({where: {id : id}})
                  console.log("result :",result)
                    res.status(200).send("user deleted successfully !! ")
}






 module.exports = {
                   createUser,deleteUser,getUser,getUsers,updateUser 
                  };