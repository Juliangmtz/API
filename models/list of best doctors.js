const mongoose = require('mongoose');

// Definición del esquema de Doctor
const doctorSchema = new mongoose.Schema({
    Name_of_doctor: {
        type: String,
        required: true
    },
    Professional_license: {
        type: String,
        required: true,
        
    },
    Years_of_experience: {
        type: String,
        required: true
    },
    Work_location: {
        type: String,
        required: true
    }
});

// Método para mostrar datos
doctorSchema.methods.showData = function() {
    return {
        Name_of_doctor: this.Name_of_doctor,
        Professional_license: this.Professional_license,
        Years_of_experience: this.Years_of_experience,
        Work_location: this.Work_location
    };
};

// Creación del modelo Doctor
const Doctor = mongoose.model('Doctor', doctorSchema);

module.exports = Doctor;
