const express = require('express')
const app = express()
const db = require('./models')
const cors = require('cors')
const user_router = require('./routes/user-routes')

app.use(express.json())
app.use(cors())
app.use(user_router)

db.sequelize.sync({alert: true}).then((req)=>{
    app.listen(process.env.PORT, function(){
        console.log(`app is on port: ${process.env.PORT}`) 
        console.log("database is connected");
    })
})
