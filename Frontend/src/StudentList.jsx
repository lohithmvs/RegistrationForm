import React, { useState, useEffect } from 'react';

const StudentList = () => {
  const [students, setStudents] = useState([]);

  useEffect(() => {
    // Fetch the student list from the backend
    fetch("http://localhost:8080/student/getAll")
      .then(res => res.json())
      .then(result => {
        setStudents(result);
      });
  }, []);

  return (
    <div>
      <h1>Registered Users</h1>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Address</th>
            <th>Date of Birth</th>
            <th>Email</th>
            <th>Gender</th>
            <th>Phone</th>
          </tr>
        </thead>
        <tbody>
          {students.map((student, index) => (
            <tr key={index}>
              <td>{student.name}</td>
              <td>{student.address}</td>
              <td>{student.dob}</td>
              <td>{student.email}</td>
              <td>{student.gender}</td>
              <td>{student.phone}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default StudentList;
