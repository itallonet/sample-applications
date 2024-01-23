const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const tarefaRoutes = require('./routes/tarefaRoutes');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use('/tarefas', tarefaRoutes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});
