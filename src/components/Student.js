import React from "react";
import axios from "axios";

function Student(props){
    const getAllStudents = () => {
        axios
          .get("http://127.0.0.1:8000/students")
          .then((response) => {
            props.setStudentList(response.data);
            console.log(response.data);
          })
          .catch((error) => {
            console.log(error);
          });
      };
    const deleteStudent = studentId =>{
        axios.delete('http://127.0.0.1:8000/student/'+studentId).then(res=>{
            getAllStudents();
        }
        ).catch(err=>{console.log(err);})
    }
    const editStudent = student =>{
        props.setId(student.id)
        props.setName(student.full_name)
        props.setPhone(student.phone)
        props.setEmail(student.email)
    }
    return(
        <tr>
            <td>
                {props.student.full_name}
            </td>
            <td>
                {props.student.email}
            </td>
            <td>
                {props.student.phone} 
            </td>
            <td>
                <button className="btn btn-danger" onClick={()=>deleteStudent(props.student.id)}>X</button>
                <button className="btn btn-warning" style={{marginLeft:"6px"}} onClick={()=>editStudent(props.student)}>Edit</button>
            </td>
        </tr>
            
    )
}
export default Student;