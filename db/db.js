const mongoose = require('mongoose');

const dbURI = 'mongodb+srv://Engenharia:ckaQI9rasdasd8HR7mzgQf@apicluster.wbx2ewq.mongodb.net/?retryWrites=true&w=majority';

const connectToDatabase = async () => {
  try {
    await mongoose.connect(dbURI, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    });
    console.log('Conexão com o banco de dados estabelecida com sucesso.');
  } catch (error) {
    console.error('Erro ao conectar ao banco de dados:', error);
    process.exit(1); 
  }
};

module.exports = connectToDatabase;
