const Student = require("../model/student.model.js");

// Retrieve all Students from the database
exports.findAll = (req, res) => {
    Student.getAll((err, data) => {
      if (err)
        res.status(500).send({
          message:
            err.message || "Some error occurred while retrieving students."
        });
      else res.send(data);
    });
  };

  exports.save = (student) => {
    Student.save(student, (err) => {
      if (err)
        res.status(500).send({
          message:
            err.message || "Some error occurred while saving a student."
        });
    });
  };

