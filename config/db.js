const mongoose = require('mongoose');  

const dbconnnect = () => {
    mongoose.set('strictQuery', true);
    mongoose.connect("mongodb://127.0.0.1:27017/notes", {}, (err, res)=>{
        if(!err){
            console.log("Conexión correcta");
        }
        else{
            console.log("Error de conexión");
        }
    })
}

module.exports = dbconnnect;