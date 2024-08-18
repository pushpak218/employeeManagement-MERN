




require('dotenv').config()
const express = require('express');
const cors = require('cors');
const workoutsRoutes=require('./routes/workots')
const mongoose = require('mongoose');
const app = express();



//middleware
app.use(cors());
app.use(express.json())



// app.get('/', (req, res)=>{
//     res.send('Hello World');
// })

app.use('/api/workouts',workoutsRoutes)

mongoose.connect(process.env.MONGO_URI)
.then(()=>{
    console.log('Connected to MongoDB')
    app.listen(process.env.PORT,()=>{
        console.log('Server is running on port 4000');
    })
    
})
.catch((err)=>{
    console.log(err)
})