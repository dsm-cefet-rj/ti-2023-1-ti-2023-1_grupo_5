const mongoose = require('mongoose');

const connectDatabase = () => {
    console.log("Tentando conectar...");

    mongoose.connect('mongodb+srv://infoneo:infoneo123@cluster0.0dyjgtu.mongodb.net/', 
    {useNewUrlParser: true, useUnifiedTopology: true})
    .then(() => {console.log("MongoDB Atlas Conectado")})
    .catch((e) => {console.log(e)});
}

module.exports = connectDatabase;