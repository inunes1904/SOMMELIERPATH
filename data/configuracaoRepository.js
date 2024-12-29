const Configuracao = require('../models/configuracaoModel');

class ConfiguracaoRepository {
  async create(data) {
    return await Configuracao.create(data);
  }

  async findAll() {
    return await Configuracao.find();
  }

  async findById(id) {
    return await Configuracao.findById(id);
  }

  async updateById(id, data) {
    return await Configuracao.findOneAndUpdate({ _id: id }, data, { new: true });
  }

  async deleteById(id) {
    return await Configuracao.findOneAndDelete({ _id: id });
  }

  async getParameters() {
    const schemaPaths = Configuracao.schema.paths; // Access schema paths
    const ignoredFields = ['_id', '__v', 'createdAt', 'updatedAt']; // Fields to exclude

    const fields = Object.keys(schemaPaths)
      .filter((field) => !ignoredFields.includes(field)) // Exclude ignored fields
      .map((field) => {
        let type = schemaPaths[field].instance; // Get Mongoose data type

        // Map Mongoose type to generic API type
        switch (type) {
          case 'String':
            type = 'text/plain';
            break;
          case 'Number':
            type = 'float'; // Can be 'integer' based on your needs
            break;
          case 'Boolean':
            type = 'boolean';
            break;
          case 'Array':
            type = 'array';
            break;
          case 'ObjectID':
            type = 'text/plain'; // Treat ObjectId as a string
            break;
          case 'Date':
            type = 'date';
            break;
          default:
            type = 'unknown';
        }

        return { name: field, type };
      });

    console.log("Field Types:", fields); // Log the fields array
    return fields;
  }

}

module.exports = new ConfiguracaoRepository();
