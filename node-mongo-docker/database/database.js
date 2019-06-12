const mongoose = require('mongoose');

mongoose.connect('mongodb://mongodb:27017/node-api', function (err) {
  if (err) {
    console.log("Erro ao conectar ao banco: " + err)
  } else {
    console.log("Conexão estabelecida com sucesso !")
  }
})

mongoose.Promise = global.Promise;

module.exports = mongoose;