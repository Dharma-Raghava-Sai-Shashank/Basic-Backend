const Mongoose = require('mongoose')

Mongoose.connect('mongodb+srv://saishashank:Arjun@9920@cluster0.lemlj6u.mongodb.net/Collegeverse?retryWrites=true&w=majority',{
    useNewUrlParser:true,
    useCreateIndex:true,
    useUnifiedTopology:true,
    useFindAndModify:false
}).then(()=>{
        console.log("Connected to mongodb database")
    }).catch((err)=> console.log("Connection Unsucccessful"))

module.exports = Mongoose