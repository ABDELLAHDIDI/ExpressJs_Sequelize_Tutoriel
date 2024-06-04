// import  express from 'express'
// // import  mysql from 'mysql2'
// import  dotenv from 'dotenv'



// import {router} from './routers/testRoutes.js'




const express = require('express');
 
const testRoute = require('./routers/testRoutes');
 
const app = express()

app.use(express.json())

app.use(  testRoute ) // complete router to call testFunction /api/v1/test/testFN


module.exports  = app






              /* --------------Version 1 --------------- */
// const users = []


// app.get('/users' , (req,res)=>{

//     if(users.length === 0 ) {
//         res.status(400).send('No users  found !')
//         return 
//     }
//     res.status(200).send(users)
//     })
    
    
    
    // app.post('/users' , (req,res)=>{
    //     const user = req.body 
    //     if(!user) { 
    //         res.status(400).send('no user to create')
    //         return
    //     }
    //     const findUser = users.find((x)=> x.id === user.id)
    //     if(findUser) {
    //         res.status(404).send('use already exists !')
    //         return 
    //     }
    //     users.push(user)
    //     res.status(201).send('Created!')
    //     })
    
    
     
    // app.delete('/users/:id' , (req,res)=>{
    //    const {id} = req.params
    
    //    console.log("id : " , id)
    //    const findUserIndex = users.findIndex((x)=> x.id === id )
    //    if(findUserIndex == -1 ){
    //     res.status(400).send("User not found")
    //     return
    //    }
    //    users.splice(findUserIndex,1)
    //    res.status(200).send("user deleted successfully !! ")
    
    //     })
    
        // app.put('/users' , (req,res)=>{
        //     const {id, name , age } = req.body
         
          
    
        //     const findUserIndex = users.findIndex((x)=> x.id === id )
        //     if(findUserIndex == -1 ){
        //      res.status(400).send("User not found")
        //      return
        //     }
        //     users[findUserIndex].name=name 
        //     users[findUserIndex].age=age 
        //     res.status(200).send("user updated successfully !! ")
         
        //      })


/* ------------------------Version 2------------------------------ */


// const pool = mysql.createPool({
//     host: process.env.MYSQL_HOST,
//     user: process.env.MYSQL_USER, 
//     password: process.env.MYSQL_PWD, 
//     database:process.env.MYSQL_DATABASE 
// }).promise()


// async function getUsers(){
//             const [rows] = await pool.query('select * from users')
//             return rows 
//         }
        
// async function getUser(id){
//             const [rows] = await  pool.query('select * from users where id = ? ' , [id])
//             return rows[0]  
//         }
        
          
// async function saveUser(id,name , age ){
//     if(!!(await getUser(id))){
//         const [result] = await  pool.query('update users  set name = ? , age = ? where id= ?',[name ,age,id])
//         const id_update =  result.insertId 
//         return getUser(id_update)
//     }
//             const [result] = await  pool.query('INSERT INTO users( name, age) VALUES (?,?)',[name ,age])
//             const id_insert =  result.insertId 
//             return getUser(id_insert)
//   }

// async function deleteUser(id){
//             if(!!(await getUser(id))){
//                 const [result] = await  pool.query('delete from users  where id= ?',[id])
//                 const id_update =  result.insertId 
//                 return getUser(id_update)
//             }
//             return false 
//                 }

// app.get('/users' ,async  (req,res)=>{

//     try {
//         const users = await getUsers(); 
    
//         console.log("users:", users);
    
//         if (users.length === 0) {
//           res.status(400).send('No users found!');
//           return;
//         }
    
//         res.status(200).send(users);
//       } catch (error) {
//         console.error('Error fetching users:', error);
//         res.status(500).send('Internal Server Error');
//       }
//     })

// app.get('/users/:id' ,async  (req,res)=>{

//     const {id} = req.params
//         try {
//             const user = await getUser(id); 
        
//             if (!user) {
//               res.status(400).send('No user found!');
//               return;
//             }
        
//             res.status(200).send(user);
//           } catch (error) {
//             console.error('Error fetching users:', error);
//             res.status(500).send('Internal Server Error');
//           }
//         })

// app.post('/users' ,async  (req,res)=>{

//     const {name,age} = req.body
     
//     if(!name || !age) { 
//         res.status(400).send('no user to create')
//         return
//     }

//     // const findUser = await getUser(name,age)
//     // if(findUser) {
//     //     res.status(404).send('use already exists !')
//     //     return 
//     // } 
//           const result = await saveUser(-1,name,age) 
//           console.log("result :",result)
//           res.status(201).send('Created!')
//             })

// app.put('/users' ,async (req,res)=>{
//               const {id, name , age } = req.body
              
//               const findUser = await getUser(id)
//               if(!findUser){
//                res.status(400).send("User not found")
//                return
//               }
//            const result = await saveUser(id,name,age)
//            console.log("result :",result)
//               res.status(200).send("user updated successfully !! ")
//                })
 
// app.delete('/users/:id' , async (req,res)=>{
//                 const {id} = req.params
              
//                 const findUser  = await getUser(id)
//                 if(!findUser  ){
//                  res.status(400).send("User not found")
//                  return
//                 }
//                const result = await deleteUser(id)
//               console.log("result :",result)
//                 res.status(200).send("user deleted successfully !! ")
//                  })
        
 
/*----------------------Version 3------------------------ */

// const sequelize = new Sequelize(process.env.MYSQL_DATABASE ,process.env.MYSQL_USER,process.env.MYSQL_PWD,{
//   host:process.env.MYSQL_HOST,
//   port:process.env.MYSQL_PORT,
//   dialect:'mysql'
// });

// const {DataTypes , Op} = Sequelize

// const User = sequelize.define('user',{
//   id : {
//      type :  DataTypes.INTEGER ,
//      allowNull: false,
//      autoIncrement: true,
//      primaryKey: true 
//   },
//   name : {
//     type: DataTypes.STRING ,
//     allowNull: false ,
//     get(){
//       const value  =this.getDataValue('name') 
//       const uncompressed = zlib.inflateSync(Buffer.from(value, 'base64'))
//       return uncompressed 
//     }, 
//     set(value){
//       const compressed = zlib.deflateSync(value).toString('base64')
//       this.setDataValue('name' , compressed  )
//       console.log(" parseInt(compressed) : " ,  compressed )
//     }
//   },
//   age :{
//     type :  DataTypes.INTEGER ,
//     allowNull: false , 
// //     set(value){
// //  const compressed = zlib.deflateSync(value.toString()).toString('base64')
// //  this.setDataValue('age' , 90 )
// //  console.log(" parseInt(compressed) : " ,  compressed )
// //     },
 

//     // get() {
//     //   const value = this.getDataValue('age');
//     //   try {
//     //     const uncompressed = zlib.inflateSync(Buffer.from(value.toString(), 'base64'));

//     //     console.log("uncompressed : " , uncompressed );


//     //     return parseInt(uncompressed.toString('utf8'));
//     //   } catch (error) {
//     //     console.error('Error decompressing data:', error);
//     //     // Handle error appropriately, maybe return a default value or rethrow the error
//     //     throw error;
//     //   }
//     // }
//   }
// },
// {
// timestamps: false

// }
 
// );
 
// app.get('/users' ,async  (req,res)=>{

//   User.sync( ).then(()=>{
//     console.log("Table and model synced successfully !!")
     
//     return User.findAll(); 

//     }).then((data)=>{
//       const users = []
//     data.forEach((elmt) =>{ 
//       users.push(elmt.dataValues );
//       console.log( elmt.get());
//     })
//       res.status(200).send(users);
//       return
//     }) 
//     .catch((err)=>{
//     console.log("Error syncing the table and model  : " , err)
//     })


//     })

// app.get('/users/:id' ,async  (req,res)=>{

//     const {id} = req.params
//     User.sync( ).then(()=>{
//       console.log("Table and model synced successfully !!")
       
//       return User.findByPk(id); 

//       }).then((data)=>{
//   if(!!data)
//      {   
//       const user = data.dataValues
//         console.log("user : " , user )
//         res.status(200).send(user);
//       return 
//     }
//     res.status(400).send('No user found!');
//                 return;
//       }) 
//       .catch((err)=>{
//       console.log("Error syncing the table and model  : " , err)
//       })
//         })

// app.post('/users', async (req, res) => {
//           try {
//             const { name, age } = req.body;
//             if (!name || !age) {
//               res.status(400).send('Name and age are required');
//               return;
//             }
         
//             const user = await User.create({ name, age });
         
//             res.status(201).send(`User created: ${JSON.stringify(user)}`);
//           } catch (error) {
//             console.error('Error creating user:', error);
//             res.status(500).send('Internal Server Error');
//           }
//         });


// app.put('/users' ,async (req,res)=>{
//               const {id, name , age } = req.body
              
//               const findUser = await User.findByPk(id)
//               if(!findUser){
//                res.status(400).send("User not found")
//                return
//               }
          
//           const result =  await User.update({ name: name   , age: age } , {where: { id: id }})
//            console.log("result :",result)
//               res.status(200).send("user updated successfully !! ")
//                })
 
// app.delete('/users/:id' , async (req,res)=>{
//                 const {id} = req.params
              
//                 const findUser  = await User.findByPk(id)
//                 if(!findUser  ){
//                  res.status(400).send("User not found")
//                  return
//                 }
//                const result = await User.destroy({where: {id : id}})
//               console.log("result :",result)
//                 res.status(200).send("user deleted successfully !! ")
//                  })








//                  app.listen(3000,()=>{
//     console.log("started on port 3000 ")
// })





 

