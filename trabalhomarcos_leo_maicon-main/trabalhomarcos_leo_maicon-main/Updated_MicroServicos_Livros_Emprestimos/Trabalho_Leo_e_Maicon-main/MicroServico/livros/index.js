const express = require('express');
const bodyParser = require('body-parser');
const { sequelize } = require('./models');
const livroRoutes = require('./routes/livroRoutes');

// Sincronizando o banco de dados
sequelize.sync().then(() => {
  console.log('Banco de dados sincronizado.');
}).catch(err => {
  console.error('Erro ao sincronizar o banco de dados:', err);
});

const app = express();
app.use(bodyParser.json());

// Rotas do serviço de usuários
app.use('/livros', livroRoutes);

const PORT = process.env.PORT || 3002;
app.listen(PORT, () => {
  console.log(`Serviço de livros rodando na porta ${PORT}`);
});
