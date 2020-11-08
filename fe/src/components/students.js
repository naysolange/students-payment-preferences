import React from 'react'

    const Students = ({ students }) => {
      return (
        <div>
          <center><h1>Students Payment Preferences</h1></center>
          {students.map((student) => (
            <div className="card" key={student.id}>
                <div className="card-body">
                <h5 className="card-title">{student.name}</h5>
                <h6 className="card-subtitle mb-2 text-muted">{student.email}</h6>
                <h6 className="card-subtitle mb-2 text-muted">{student.phone_number}</h6>
                <h6 className="card-subtitle mb-2 text-muted">{student.country}, {student.city}</h6>
                <h6 className="card-subtitle mb-2 text-muted">Date of birth: {student.birth_date}</h6>
                <p className="card-text">Career: {student.career}</p>
                <p className="card-text">Payment option: {student.payment_option}</p>
            </div>
            </div>
        ))}
        </div>
         
      )
    };

export default Students