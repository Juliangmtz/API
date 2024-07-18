const mongoose = require('mongoose');

// Definición del esquema de Tip
const tipSchema = new mongoose.Schema({
    tip_name: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    }
});

// Método para mostrar datos
tipSchema.methods.showData = function() {
    return {
        tip_name: this.tip_name,
        description: this.description
    };
};

// Creación del modelo Tip
const Tip = mongoose.model('Tip', tipSchema);

module.exports = Tip;
