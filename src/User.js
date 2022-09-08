import React from "react";
import { Link } from "react-router-dom";
import { useFormik } from "formik";
import { signUpSchema } from "./schemas";
import "./form_css.css";

function User(){

    const inputvalues = {
        name:"",
        email:"",
        password:"",
        confirm_password:"",
        number:"",
    }

    const { values, touched, errors, handleBlur, handleChange, handleSubmit} = useFormik({
        initialValues : inputvalues,
        validationSchema : signUpSchema,
        onSubmit : (values,action) => {
            console.log(values);
        action.resetForm();
        }
    })
   
  return (
    <>
        <header>
        <li><Link to="/User" >User</Link></li>
        <li><Link to="/admin">Admin </Link></li><hr/>
        </header>
        <div className="maindiv">
            <h1>welcome to User login form!!!</h1>
        </div>
        <form onSubmit={handleSubmit}>
            <div className="input_block">
                <label className="input_label">Name:</label>
                <input 
                type="name" 
                name="name"
                placeholder="enter your name" 
                value={values.name} 
                onChange={handleChange} 
                onBlur={handleBlur}></input>
                {errors.name && touched.name ? (<p className="form_error">{errors.name}</p>) : null }
                <br></br>
            </div>
            <div className="input_block">
                <label className="input_label">Email:</label>
                <input type="text" 
                name="email" 
                placeholder="enter your email" 
                value={values.email} 
                onChange={handleChange} 
                onBlur={handleBlur}></input>
                {errors.email && touched.email ? (<p className="form_error">{errors.email}</p>) : null }          
                <br></br>
            </div>
            <div className="input_block">
                <label className="input_label">Password:</label>
                <input type="password" 
                name="password" 
                placeholder="enter your password" 
                value={values.password} 
                onChange={handleChange} 
                onBlur={handleBlur}></input>
                {errors.password && touched.password ? (<p className="form_error">{errors.password}</p>) : null }
                <br></br>
            </div>
            <div className="input_block">
                <label className="input_label">Confirm Password:</label>
                <input type="password" 
                name="confirm_password" 
                placeholder="enter confirm password" 
                value={values.confirm_password} 
                onChange={handleChange} 
                onBlur={handleBlur}></input>
                {errors.confirm_password && touched.confirm_password ? (<p className="form_error">{errors.confirm_password}</p>) : null }      
                <br></br>
            </div>
            <div className="input_block">
                <label className="input_label">mobile no:</label>
                <input type="text" 
                name="number" 
                placeholder="enter your mobile number" 
                value={values.number} 
                onChange={handleChange} 
                onBlur={handleBlur}></input>
                {errors.number && touched.number ? (<p className="form_error">{errors.number}</p>) : null }
                <br></br>
            </div>
            <div className="button">
            <button className="input_button" type="submit">login</button>
            </div>
        </form>
    </>
  );
}

export default User;
