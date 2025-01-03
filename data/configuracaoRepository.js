const Configuracao = require('../models/configuracaoModel');
const Analytics =  require('../models/AnalyticsModel');

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
          case 'unknown':
            type = 'User';
            break;
          default:
            type = 'User';
        }

        return { name: field, type };
      });

    console.log("Field Types:", fields); // Log the fields array
    return fields;
  }

  async getAnalyticsActivity() {
    const schemaPaths = Analytics.schema.paths; // Access schema paths

    // Initialize the output structure
    const response = {
      qualAnalytics: [],
      quantAnalytics: [],
      configuracaoId: null, // Placeholder for configuracaoId
    };

    Object.keys(schemaPaths).forEach((field) => {
      const schemaField = schemaPaths[field];
      let type = schemaField.instance || schemaField.options.type?.name; // Detect type

      // Map Mongoose type to API-friendly type
      switch (type) {
        case 'String':
          type = 'text/plain';
          break;
        case 'Number':
          type = 'float'; // Use 'integer' if preferred
          break;
        case 'Boolean':
          type = 'boolean';
          break;
        case 'Array':
          type = 'array';
          break;
        case 'ObjectID':
          type = 'objectid';
          break;
        case 'Date':
          type = 'date';
          break;
        default:
          type = 'Configuracao';
      }

      // Group fields under their respective parent objects
      if (field.startsWith('qualAnalytics.')) {
        response.qualAnalytics.push({
          name: field.split('.').pop(), // Extract field name after "qualAnalytics"
          type,
        });
      } else if (field.startsWith('quantAnalytics.')) {
        response.quantAnalytics.push({
          name: field.split('.').pop(), // Extract field name after "quantAnalytics"
          type,
        });
      } else if (field === 'configuracaoId') {
        // Assign configuracaoId as a standalone field
        response.configuracaoId = {
          name: 'configuracaoId',
          type,
        };
      }
    });

    return response;
  }


}

module.exports = new ConfiguracaoRepository();
