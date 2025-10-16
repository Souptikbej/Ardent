import React from "react";

const Form = () => {
  return (
    <div className="formdiv">
      <table className="tablediv">
        <thead>
          <tr>
            <th>Personal Details : </th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>
              <label>
                Full Name :{" "}
                <sup>
                  <span style={{ color: "red" }}>*</span>
                </sup>
              </label>
              <input type="text" name="name" placeholder="Enetr Student Name" />
            </td>
          </tr>
          <tr>
            <td>
              <label>
                Gender :{" "}
                <sup>
                  <span style={{ color: "red" }}>*</span>
                </sup>
              </label>
              <input type="radio" name="gender" value={"male"} />
              Male
              <input type="radio" name="gender" value={"female"} />
              Female
              <input type="radio" name="gender" value={"other"} />
              Other
            </td>
          </tr>
          <tr>
            <td>
              <label>
                Date of Birth{" "}
                <sup>
                  <span style={{ color: "red" }}>*</span>
                </sup>
              </label>
              <input type="date" name="date" />
            </td>
          </tr>
          <tr>
            <td>
              <label>
                Contact Number :{" "}
                <sup>
                  <span style={{ color: "red" }}>*</span>
                </sup>
              </label>
              <input
                type="number"
                name="number"
                placeholder="Enetr Mobile Number"
              />
            </td>
          </tr>
          <tr>
            <td>
              <label>
                Email :{" "}
                <sup>
                  <span style={{ color: "red" }}>*</span>
                </sup>
              </label>
              <input type="email" name="email" placeholder="Enetr Email ID" />
            </td>
          </tr>
          <tr>
            <td>
              <label>
                Religion :{" "}
                <sup>
                  <span style={{ color: "red" }}>*</span>
                </sup>
              </label>
              <select name="religion">
                <option disabled selected value={""}>
                  --Select Religion--
                </option>
                <option value={"hindu"}>Hindu</option>
                <option value={"islam"}>Islam</option>
                <option value={"sikh"}>Sikh</option>
                <option value={"other"}>Other</option>
              </select>
            </td>
          </tr>
        </tbody>
        <thead>
          <tr>
            <th>Address Details : </th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>
              <label>Address</label>
              <textarea></textarea>
            </td>
          </tr>
          <tr>
            <td>
              <label>
                City{" "}
                <sup>
                  <span style={{ color: "red" }}>*</span>
                </sup>
              </label>
              <input
                type="text"
                name="city"
                placeholder="Enter Your city"
                required
              ></input>
            </td>
          </tr>
        </tbody>
        <thead>
          <tr>
            <th>Admission details : </th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>
              <label>
                Registration Number{" "}
                <sup>
                  <span style={{ color: "red" }}>*</span>
                </sup>
              </label>
              <input
                type="text"
                name="reg num"
                placeholder="Enter Your Registration Number"
                required
              ></input>
            </td>
          </tr>
          <tr>
            <td>
              <label>
                Course / Program :{" "}
                <sup>
                  <span style={{ color: "red" }}>*</span>
                </sup>
              </label>
              <select name="Course">
                <option disabled selected value={""}>
                  --Select Course / Program--
                </option>
                <option value={"CSE"}>CSE</option>
                <option value={"ECE"}>ECE</option>
                <option value={"ME"}>ME</option>
                <option value={"EE"}>EE</option>
              </select>
            </td>
          </tr>
          <tr>
            <td>
              <input type="checkbox" name="check"></input> Confirm <br></br>
              <button>Submit</button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default Form;
