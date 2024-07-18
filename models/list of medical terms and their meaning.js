const mongoose = require('mongoose');

// Definición del esquema de Glossary
const glossarySchema = new mongoose.Schema({
    term_name: {
        type: String,
        required: true
    },
    definition: {
        type: String,
        required: true
    }
});

// Método para mostrar datos
glossarySchema.methods.showData = function() {
    return {
        term_name: this.term_name,
        definition: this.definition
    };
};

// Creación del modelo Glossary
const Glossary = mongoose.model('Glossary', glossarySchema);

module.exports = Glossary;
