const mongoose = require('mongoose');

// Definición del esquema de Disease
const diseaseSchema = new mongoose.Schema({
    disease_name: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    symptoms: {
        type: [String], // Cambiamos a un arreglo de cadenas
        required: true
    }
});

// Método para mostrar datos
diseaseSchema.methods.showData = function() {
    return {
        disease_name: this.disease_name,
        description: this.description,
        symptoms: this.symptoms.join('\n') // Formatear la lista de síntomas como una cadena
    };
};

// Creación del modelo Disease
const Disease = mongoose.model('Disease', diseaseSchema);

module.exports = Disease;
