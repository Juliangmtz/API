const mongoose = require('mongoose');

// Definición del esquema de Pharmacy
const pharmacySchema = new mongoose.Schema({
    sucursal: {
        type: String,
        required: true
    },
    direccion: {
        type: String,
        required: true
    },
    marca: {
        type: String,
        required: true,
        enum: ['medical consultation', 'sale of mediciness', 'both']  // Opciones para el tipo de farmacia
    },
    horario: {
        type: String,
        required: true
    },
    telefono: {
        type: String,
        required: true
    },
    lat: {
        type: String,
        required: true
    },
    lon: {
        type: String,
        required: true
    },
});

// Método para mostrar datos
pharmacySchema.methods.showData = function() {
    return {
        name_of_pharmacy: this.sucursal,
        address: this.direccion,
        type_of_pharmacy: this.marca,
        image: this.image,
        schedule: this.horario,
        phone: this.telefono
    };
};

// Creación del modelo Pharmacy
const Pharmacy = mongoose.model('Pharmacy', pharmacySchema);

module.exports = Pharmacy;