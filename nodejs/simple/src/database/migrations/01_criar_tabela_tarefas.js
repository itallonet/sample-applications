exports.up = async (pgm) => {
    await pgm.sql(`
      CREATE TABLE tarefas (
        id SERIAL PRIMARY KEY,
        descricao VARCHAR(255) NOT NULL,
        concluida BOOLEAN DEFAULT false
      );
    `);
  };
  
  exports.down = async (pgm) => {
    await pgm.sql('DROP TABLE tarefas;');
  };
  