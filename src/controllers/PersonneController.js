const Personne = require('../models/Personne');

const   getPersonnes =   async   (req,res)=>{

    try {
        console.log("getAll Personnes ")
        const personnes = await Personne.findAll( ) ;
         res.status(200).send(personnes);
       return  
   
       } 
       catch(err){
       console.log("Error syncing the table and model  : " , err)
       }
   
}

const getPersonne =    async  (req,res)=>{
    const {id} = req.params
    try {
      console.log("getPersonne : ") 
 const data = await Personne.findByPk(id)
  if(!!  data )
     {   
      const personne =data.dataValues
        console.log("personne : " , personne )
        res.status(200).send(personne);
      return 
    }
    res.status(400).send('No personne found!');
                return;

      } catch(err) {
      console.log("Error syncing the table and model  : " , err)
      }
}

const createPersonne = async (req,res)=>{
try {
            const { first_name,last_name, age,description } = req.body;
            if (!first_name || !last_name || !age) {
              res.status(400).send('Name and age are required');
              return;
            }
         
            const personne = await Personne.create({ first_name,last_name, age , description });
         
            res.status(201).send(`Personne created: ${JSON.stringify(personne)}`);
          } catch (error) {
            console.error('Error creating personne:', error);
            res.status(500).send('Internal Server Error');
          }
        
}

const updatePersonne = async (req,res)=>{
const {id, first_name,last_name, age , description  } = req.body
      
     try {     const findPersonne = await Personne.findByPk(id)
          if(!findPersonne){
           res.status(400).send("personne not found")
           return
          }
      
      const result =  await Personne.update(
        {first_name: first_name , last_name : last_name  , age: age, description : description } ,
        {where: { id: id }}
        )
       console.log("result :",result)
          res.status(200).send("personne updated successfully !! ")
        } catch(err){
          console.error('Error updating personne:', err);
            res.status(500).send('Internal Server Error');
        }
           
}

const deletePersonne = async (req,res)=>{
const {id} = req.params
      
try{
  const findPersonne  = await Personne.findByPk(id)
  if(!findPersonne  ){
   res.status(400).send("Personne not found")
   return
  }
 const result = await Personne.destroy({where: {id : id}})
console.log("result :",result)
  res.status(200).send("personne deleted successfully !! ")
}catch (err){
  console.error('Error deleting personne:', err);
            res.status(500).send('Internal Server Error');
}
           
}



module.exports = {
    getPersonnes,createPersonne,deletePersonne,getPersonne,updatePersonne
}
