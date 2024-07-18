const Tip = require ('../models/tips');

// Función para obtener un número aleatorio dentro de un rango
function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}

exports.getAlltip = async (req, res) => {
  try {
      const count = await Tip.countDocuments();
      const randomIndices = new Set();

      // Generar tres índices aleatorios
      while (randomIndices.size < 3) {
          randomIndices.add(getRandomInt(count));
      }

      const tips = await Tip.find().then(tipsArray => {
          return Array.from(randomIndices).map(index => tipsArray[index].showData());
      });

      res.json(tips);
  } catch (err) {
      res.status(500).json({ message: err.message });
  }
};

// Crear un nuevo tip
exports.createTip = async (req, res) => {
  const tip = new Tip({
    tip_name: req.body.tip_name,  
    description: req.body.description
      // Agrega otros campos necesarios aquí
  });

  try {
      const newTip = await tip.save();
      res.status(201).json(newTip);
  } catch (err) {
      res.status(400).json({ message: err.message });
  }
};

// Eliminar un tip por ID
exports.deleteTip = async (req, res) => {
  try {
      const tip = await Tip.findById(req.params.id);
      if (!tip) return res.status(404).json({ message: 'Tip not found' });

      await tip.remove();
      res.json({ message: 'Tip deleted' });
  } catch (err) {
      res.status(500).json({ message: err.message });
  }
};

// Editar un tip por tip_name
exports.updateTipByName = async (req, res) => {
  try {
      // Buscar el tip por el nombre (tip_name)
      const tip = await Tip.findOne({ tip_name: req.body.tip_name });
      if (!tip) return res.status(404).json({ message: 'Tip not found' });

      // Actualiza los campos necesarios
      if (req.body.new_tip_name != null) tip.tip_name = req.body.new_tip_name;
      if (req.body.description != null) tip.description = req.body.description;
      // Agrega otros campos que desees actualizar aquí

      const updatedTip = await tip.save();
      res.json(updatedTip);
  } catch (err) {
      res.status(400).json({ message: err.message });
  }
};
