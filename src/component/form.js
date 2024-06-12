import React from "react";
import { Formik, useFormik } from "formik";
import "bootstrap/dist/css/bootstrap.min.css";
import FormValid from "./formvalid";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";

function Form() {
  const student = {
    name: "",
    Rollno: "",
    phone: "",
    marks: ""
  };
const navigate=useNavigate();
  const { handleChange, handleSubmit, handleBlur, values, touched, errors } = useFormik({
    initialValues: student,
    validationSchema: FormValid,
    onSubmit: (value, { resetForm }) => {
      console.log("value",value);
      console.log("values",values);
      axios.post("https://66684aacf53957909ff7610d.mockapi.io/student",{s_name:values.name,s_roll:values.Rollno,s_phone:values.phone,s_marks:values.marks}).then((res)=>{console.log(res);
       navigate("/table");
       resetForm();
      }).catch((err)=>console.log(err));
      
    }
  });

  return (
    <div className="container mt-5" style={{backgroundColor:"aliceblue", padding:"4px"}}>
      <form onSubmit={handleSubmit}>
        <h1 style={{textAlign:"center"}}>ABS INTER SCHOOL</h1>
        <div className="form-group">
          <label>Enter the name:</label>
          <input
            type="text"
            name="name"
            className="form-control"
            value={values.name}
            onChange={handleChange}
            onBlur={handleBlur}
          />
          {touched.name && errors.name ? (
            <div style={{ color: "red", fontWeight: "bold" }}>{errors.name}</div>
          ) : null}
        </div>
        <div className="form-group">
          <label>Enter the RollNo:</label>
          <input
            type="number"
            name="Rollno"
            className="form-control"
            value={values.Rollno}
            onChange={handleChange}
            onBlur={handleBlur}
          />
          {touched.Rollno && errors.Rollno ? (
            <div style={{ color: "red", fontWeight: "bold" }}>{errors.Rollno}</div>
          ) : null}
        </div>
        <div className="form-group">
          <label>Enter the phone Number:</label>
          <input
            type="number"
            name="phone"
            className="form-control"
            value={values.phone}
            onChange={handleChange}
            onBlur={handleBlur}
          />
          {touched.phone && errors.phone ? (
            <div style={{ color: "red", fontWeight: "bold" }}>{errors.phone}</div>
          ) : null}
        </div>
        <div className="form-group">
          <label>Enter the Total Marks:</label>
          <input
            type="number"
            name="marks"
            className="form-control"
            value={values.marks}
            onChange={handleChange}
            onBlur={handleBlur}
          />
          {touched.marks && errors.marks ? (
            <div style={{ color: "red", fontWeight: "bold" }}>{errors.marks}</div>
          ) : null}
        </div>
        <button type="submit" className="btn btn-success">
          Submit
        </button>
        <br/><br/>
        <Link to ="/table">
        <button  className="btn btn-secondary">
          show Table
        </button>
        </Link>
      </form>
    </div>
  );
}

export default Form;
