import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import React, { useState, useEffect } from "react";
import axios from "axios";
import StudentList from "./components/StudentList";
function App() {
  const [studentList, setStudentList] = useState([{}])
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [phone, setPhone] = useState('')
  useEffect(()=>{
    getAllStudents()
  },[])
  const getAllStudents = () =>{
    axios.get('http://127.0.0.1:8000/students')
    .then(response =>{
      setStudentList(response.data)
      console.log(response.data);
    })
    .catch(error=>{
      console.log(error);
    })
  }
  const addStudent = () =>{
    const student = {
      "full_name": name,
      "email": email,
      "phone": phone
    }
    axios.post('http://127.0.0.1:8000/student',student).then(response =>{
      console.log(response);
      getAllStudents();
      setEmail('')
      setName('')
      setPhone('')
    }).catch(error=>{
      console.log(error);
    })
  }
  return (
    <div className="container">
      <div
        className="text-center mt-3 list-group-item justify-content-center align-items-center mx-auto"
        style={{ width: "70vw", backgroundColor: "#ffffff" }}
      >
        <h2 className="card text-white bg-primary mb-1 pb-1">
          School Management
        </h2>
        <div className="card-body">
          <h5 className="card text-white bg-dark pb-1">Add student</h5>
          <span className="card-text">
            <input
              className="mb-2 form-control stud-name"
              placeholder="Enter your name"
              onChange={event => setName(event.target.value)}
              value={name}
            />
            <input
              className="mb-2 form-control stud-email"
              placeholder="Enter your email"
              onChange={event => setEmail(event.target.value)}
              value={email}
            />
            <input
              className="mb-2 form-control stud-phone"
              placeholder="Enter your phone"
              onChange={event => setPhone(event.target.value)}
              value={phone}
            />
            <button className="mb-4 btn btn-outline-success" onClick={()=>addStudent()}> Add</button>
          </span>
          <h5 className="card text-white bg-dark pb-1">Students list</h5>
          <div>
            <StudentList studentList={studentList}></StudentList>
          </div>
        </div>
        <h6 className="card text-dark bg-warning py-2">All rights reserved &copy; {new Date().getFullYear()}</h6>
      </div>
    </div>
  );
}

export default App;
