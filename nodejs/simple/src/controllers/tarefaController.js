const TarefaModel = require('../models/tarefaModel');

const tarefaController = {
  async listarTarefas(req, res) {
    try {
      const tarefas = await TarefaModel.listarTarefas();
      res.json(tarefas);
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Erro ao listar tarefas.' });
    }
  },

  async criarTarefa(req, res) {
    const { descricao } = req.body;

    try {
      const novaTarefa = await TarefaModel.criarTarefa(descricao);
      res.status(201).json(novaTarefa);
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Erro ao criar tarefa.' });
    }
  },

  async atualizarTarefa(req, res) {
    const { id } = req.params;
    const { descricao, concluida } = req.body;

    try {
      const tarefaAtualizada = await TarefaModel.atualizarTarefa(id, descricao, concluida);
      if (!tarefaAtualizada) {
        res.status(404).json({ error: 'Tarefa não encontrada.' });
      } else {
        res.json(tarefaAtualizada);
      }
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Erro ao atualizar tarefa.' });
    }
  },

  async excluirTarefa(req, res) {
    const { id } = req.params;

    try {
      const tarefaExcluida = await TarefaModel.excluirTarefa(id);
      if (!tarefaExcluida) {
        res.status(404).json({ error: 'Tarefa não encontrada.' });
      } else {
        res.json({ mensagem: 'Tarefa excluída com sucesso.' });
      }
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Erro ao excluir tarefa.' });
    }
  },
};

module.exports = tarefaController;
