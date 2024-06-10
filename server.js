 
   const app = require('./src/app');
    const {sequelize} = require('./src/models/index')


       sequelize.sync({alter : true})

app.listen(process.env.SERVER_PORT || 3000 ,()=>{ 
    console.log(` started on port ${process.env.SERVER_PORT || 3000 }`)
})