import React from "react";
import axios from "axios";

function Student(props){
    const deleteStudent = studentId =>{
        axios.delete('http://127.0.0.1:8000/student/'+studentId).then(res=>{
            console.log(res);
        }
        ).catch(err=>{console.log(err);})
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
            </td>
        </tr>
            
    )
}
export default Student;