import React from "react";

const FormOriginal = () => {
  return (
    <div className="maindiv">
      <form action="" className="border-solid">
        <h1>Student Registration Form</h1>

        <fieldset>
          <legend>Personal Details</legend>

          <label>Full Name:</label>
          <input type="text" />
          
          <label>Gender :{""}<sup><span style={{ color: "red" }}>*</span></sup></label>
          <input type="radio" name="gender" value={"male"} />Male
          <input type="radio" name="gender" value={"female"} />Female
          <input type="radio" name="gender" value={"other"} />Other

          <label htmlFor="">Date of Birth</label>
          <input type="date" name="dob"/>

          <label htmlFor="">Email ID:</label>
          <input type="email" name="email" placeholder="Enter Email ID"/>

          <label htmlFor="">Contact Number:</label>
          <input type="number" name="phnumber" />

          <label htmlFor="">Father's Name:</label>
          <input type="text" name="father"/>

          <label htmlFor="">Mother's Name:</label>
          <input type="text" name="mother"/>

          <label htmlFor="">Upload Photo:</label>
          <input type="file" name="photo" accept="image/*"/>
        </fieldset>
      </form>
    </div>
  );
};

export default FormOriginal;
