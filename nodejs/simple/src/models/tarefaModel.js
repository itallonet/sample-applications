const conexao = require('../database/conexao');

const TarefaModel = {
  async listarTarefas() {
    const client = await conexao.connect();
    try {
      const result = await client.query('SELECT * FROM tarefas');
      return result.rows;
    } finally {
      client.release();
    }
  },

  async criarTarefa(descricao) {
    const client = await conexao.connect();
    try {
      const result = await client.query('INSERT INTO tarefas (descricao) VALUES ($1) RETURNING *', [descricao]);
      return result.rows[0];
    } finally {
      client.release();
    }
  },

  async atualizarTarefa(id, descricao, concluida) {
    const client = await conexao.connect();
    try {
      const result = await client.query('UPDATE tarefas SET descricao = $2, concluida = $3 WHERE id = $1 RETURNING *', [id, descricao, concluida]);
      return result.rows[0];
    } finally {
      client.release();
    }
  },

  async excluirTarefa(id) {
    const client = await conexao.connect();
    try {
      const result = await client.query('DELETE FROM tarefas WHERE id = $1 RETURNING *', [id]);
      return result.rows[0];
    } finally {
      client.release();
    }
  },
};

module.exports = TarefaModel;
