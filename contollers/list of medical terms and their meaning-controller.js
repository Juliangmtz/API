const Glossary = require ('../models/list of medical terms and their meaning');

exports.getAllglossary = async (req, res) => {
    try {
      const glossary = await Glossary.find();
      res.json(glossary
      ); // Aplicamos el método showData para cada término
    } catch (err) {
      res.status(500).json({ message: err.message });
    }
  };
  
// Crear un nuevo término en el glosario
exports.createGlossary = async (req, res) => {
  const { term_name, definition } = req.body;

  try {
    const glossaryItem = new Glossary({
      term_name: term_name,
      definition: definition
      // Agrega otros campos necesarios aquí
    });

    const newGlossaryItem = await glossaryItem.save();

    res.status(201).json(newGlossaryItem);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};



  
