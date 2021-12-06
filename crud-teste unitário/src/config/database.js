
const mongoose = require("mongoose")

mongoose.connect("mongodb://ian123:git123@ds225375.mlab.com:25375/crudapinode", 
{ useNewUrlParser: true},
 (error) => {
     if(error)
        console.log('Falha ao conectar o MongoDB', error)
 })

 mongoose.connection.once("open", () => console.log("MongoDB Conectado!"))