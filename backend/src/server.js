const express = require('express');
const mongoose = require('mongoose');

const routes = require('./routes');

const app = express();


mongoose.connect('mongodb+srv://dmelo:8k8n36ng@slumfood.hfoax.mongodb.net/?retryWrites=true&w=majority', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  
  })


// GET= BUSCAR UMA INFOR, POST= CRIAR, PUT=EDITAR, DELETE
// req.query = Acessar query params
// req.params = acessar route params (para edição,delete)
// req.body = acessar corpo da requisição (para criaçao e ediçao)
// sequelize banco de dados

app.use(express.json());
app.use(routes);

app.listen(3333);