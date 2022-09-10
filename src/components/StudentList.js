import React from "react";
import Student from "./Student";

function StudentList(props) {
  return (
    <table className="table">
      <thead>
        <tr>
          <th>Full name</th>
          <th>Email</th>
          <th>Phone</th>
          <th>Action</th>
        </tr>
      </thead>
      <tbody>
        {props.studentList.map((stud, i) => {
          return <Student student={stud} key={i} />;
        })}
      </tbody>
    </table>
  );
}
export default StudentList;
