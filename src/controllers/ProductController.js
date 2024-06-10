const Product = require('../models/Product');

const   getProducts =   async   (req,res)=>{

    try {
        console.log("getAll Products ")
        const products = await Product.findAll( ) ;
         res.status(200).send(products);
       return  
   
       } 
       catch(err){
       console.log("Error syncing the table and model  : " , err)
       }
   
}

const getProduct =    async  (req,res)=>{
    const {id} = req.params
    try {
      console.log("getProduct : ") 
 const data = await Product.findByPk(id)
  if(!!  data )
     {   
      const product =data.dataValues
        console.log("Product : " , product )
        res.status(200).send(product);
      return 
    }
    res.status(400).send('No Product found!');
                return;

      } catch(err) {
      console.log("Error syncing the table and model  : " , err)
      }
}

const createProduct = async (req,res)=>{
try {
            const { name,price } = req.body;
            if (!name || !price) {
              res.status(400).send('Name and price are required');
              return;
            }
         
            const product = await Product.create({ name,price });
         
            res.status(201).send(`Product created: ${JSON.stringify(product)}`);
          } catch (error) {
            console.error('Error creating Product:', error);
            res.status(500).send('Internal Server Error');
          }
        
}

const updateProduct = async (req,res)=>{
const {id,name,price } = req.body
      
     try {     const findProduct = await Product.findByPk(id)
          if(!findProduct){
           res.status(400).send("product not found")
           return
          }
      
      const result =  await Product.update(
        {name: name , price : price   } ,
        {where: { id: id }}
        )
       console.log("result :",result)
          res.status(200).send("product updated successfully !! ")
        } catch(err){
          console.error('Error updating Product:', err);
            res.status(500).send('Internal Server Error');
        }
           
}

const deleteProduct = async (req,res)=>{
const {id} = req.params
      
try{
  const findProduct  = await Product.findByPk(id)
  if(!findProduct  ){
   res.status(400).send("product not found")
   return
  }
 const result = await Product.destroy({where: {id : id}})
console.log("result :",result)
  res.status(200).send("product deleted successfully !! ")
}catch (err){
  console.error('Error deleting product:', err);
            res.status(500).send('Internal Server Error');
}
           
}



module.exports = {
    getProduct,getProducts,createProduct,updateProduct,deleteProduct
}
