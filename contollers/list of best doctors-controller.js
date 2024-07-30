const Doctor = require('../models/list of best doctors');

exports.getAllDoctors = async (req, res) => {
    try {
        const doctors = await Doctor.find();
        res.json(doctors); // Devolver todos los doctores
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};

exports.getDoctorsByProfessionallicense = async (req, res) => {
  const Professionallicense = req.params.Professionallicense;
  try {
      const doctors = await Doctor.find({ Professional_license: Professionallicense });
      res.json(doctors);
  } catch (err) {
      res.status(500).json({ message: err.message });
  }
};



exports.createDoctor = async (req, res) => {
    const { Name_of_doctor, Professional_license, Years_of_experience, Work_location} = req.body;

    try {
        const doctor = new Doctor({
            Name_of_doctor: Name_of_doctor,
            Professional_license: Professional_license,
            Years_of_experience: Years_of_experience,
            Work_location: Work_location,
        });

        const newDoctor = await doctor.save();
        res.status(201).json(newDoctor);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
};
