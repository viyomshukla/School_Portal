import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
function Table() {
  const [dat, setdata] = useState([]);
  const navigate=useNavigate();
  useEffect(() => {
    handleget();
  }, []);
  const handleget = () => {
    axios.get("https://66684aacf53957909ff7610d.mockapi.io/student")
      .then((res) => {
        console.log(res);
        setdata(res.data);
      })
      .catch((err) => console.log(err));
  };
  const handledelete=(id)=>{
    axios.delete(`https://66684aacf53957909ff7610d.mockapi.io/student/${id}`).then((res)=>{console.log(res);
        handleget();
       
     }).catch((err)=>console.log(err));
  }
  const setupdate=(id,name,rollno,phone,marks)=>{
    localStorage.setItem("id",id);
    localStorage.setItem("name",name);
    localStorage.setItem("rollno",rollno);
    localStorage.setItem("phone",phone);
    localStorage.setItem("marks",marks);
  }
  return (
    <div>
      <table className="table table bordered table striped table-dark table-hover">
        <thead>
          <tr>
            <th>id</th>
            <th>name</th>
            <th>Roll Number</th>
            <th>phone number</th>
            <th>marks</th>
            <th>Edit</th>
            <th>Delete</th>
          </tr>
        </thead>
        <tbody>
          {dat.map((e) => {
            const { id, s_name, s_roll, s_phone, s_marks } = e;
            return (
              <tr>
                <td>{id}</td>
                <td>{s_name}</td>
                <td>{s_roll}</td>
                <td>{s_phone}</td>
                <td>{s_marks}</td>
                <td>
                    <Link to="/update">
                  <button className="btn btn-outline-primary" onClick={()=>{
                    setupdate(id,s_name,s_roll,s_phone,s_marks);

                  }}>Edit</button></Link>
                </td>
                <td>
                  <button className="btn btn-outline-danger" onClick={()=>{
                    if(window.confirm("Are you sure you want delete"))
                    {handledelete(id)}}}>Delete</button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
      <br />
      <br />
      <Link to="/form">
        <button className="btn btn-outline-primary">show Form</button>
      </Link>
    </div>
  );
}
export default Table;
