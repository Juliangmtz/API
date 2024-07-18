const Doctor = require ('../models/list of best doctors');

exports.getAllDoctors = async (req, res) => {
    try {
      const doctors = await Doctor.find();
      res.json(doctors); // Aplicamos el método showData para cada doctor
    } catch (err) {
      res.status(500).json({ message: err.message });
    }
  };
  
  exports.createDoctor = async (req, res) => {
    const { name_of_doctor, professional_license, years_of_experience, work_location, image } = req.body;
  
    try {
      const doctor = new Doctor({
        name_of_doctor: name_of_doctor,
        professional_license: professional_license,
        years_of_experience: years_of_experience,
        work_location: work_location,
        image: image // Este campo es opcional, puede ser omitido si no se envía
      });
  
      const newDoctor = await doctor.save();
      res.status(201).json(newDoctor);
    } catch (err) {
      res.status(400).json({ message: err.message });
    }
  };
  