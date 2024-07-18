const Pharmacy = require ('../models/list of pharmacies');

exports.getAllpharmacy = async (req, res) => {
    try {
      const pharmacy = await Pharmacy.find();
      res.json(pharmacy); // Aplicamos el método showData para cada farmacia
    } catch (err) {
      res.status(500).json({ message: err.message });
    }
  };
  