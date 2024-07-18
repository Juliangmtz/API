const Disease = require ('../models/register of all diseases and their symptoms');


// Crear una nueva enfermedad
exports.createDisease = async (req, res) => {
  const { disease_name, description, symptoms } = req.body;
  
  // Validar que los síntomas sean un arreglo
  if (!Array.isArray(symptoms)) {
      return res.status(400).json({ message: 'Symptoms must be an array' });
  }

  const newDisease = new Disease({
      disease_name,
      description,
      symptoms
  });

  try {
      const savedDisease = await newDisease.save();
      res.status(201).json(savedDisease);
  } catch (err) {
      res.status(500).json({ message: err.message });
  }
};


// Obtener todas las enfermedades
exports.getAllDiseases = async (req, res) => {
    try {
        const diseases = await Disease.find();
        res.json(diseases); // Devolver directamente las enfermedades encontradas
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};