const Student = require("../model/student.model.js");

// Retrieve all Students from the database
exports.findAll = (req, res) => {
    Student.getAll((err, data) => {
      if (err) {
        res.status(500).send({
          message: "Some error occurred while retrieving students"
        });
      } else res.status(200).send(data);
    });
  };

// Creates a new student
exports.create = (req, res) => {
  student = {
    name: req.body.name,
    email: req.body.email,
    career: req.body.career,
    birthDate: req.body.birth_date,
    phoneNumber: req.body.phone_number,
    country: req.body.country,
    city: req.body.city,
    paymentOption: req.body.payment_option
  };

	saveStudent(res, student);
};


function saveStudent(res, student) {
  Student.save(student, (err) => {
    if (err) {
      res.status(500).send({
        message: "Some error occurred while saving a student"
      });
      return;
    } 
    res.status(204).send({
      message: "The student was created successfully"
    });
  });
}



	


