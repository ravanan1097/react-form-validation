
import { useState, useEffect } from "react";
import "./App.css";

function App() {
const initialValues = { username: "", email: "", mobile: "",city:"",state:"",country:"" };
const [formValues, setFormValues] = useState(initialValues);
const [formErrors, setFormErrors] = useState({});
const [isSubmit, setIsSubmit] = useState(false);

const handleChange = (e) => {
const { name, value } = e.target;
setFormValues({ ...formValues, [name]: value });
};

const handleSubmit = (e) => {
e.preventDefault();
setFormErrors(validate(formValues));
setIsSubmit(true);

};

useEffect(() => {
console.log(formErrors);
if (Object.keys(formErrors).length === 0 && isSubmit) {
  console.log(formValues);
 
}
}, [formErrors, formValues, isSubmit]);
const validate = (values) => {
const errors = {};
const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
const mobileRegex=/^[0-9]*$/;

if (!values.username) {
  errors.username = "Username is required!";
}
if (!values.email) {
  errors.email = "Email is required!";
} else if (!regex.test(values.email)) {
  errors.email = "This is not a valid email format!";
} 
if(!mobileRegex.test(values.mobile)){
  errors.mobile="Enter valid Mobile Number"
}

return errors;
};

return (
<div className="container mt-4">
<div >
  
{Object.keys(formErrors).length === 0 && isSubmit ? (
        <div className="ui message success">Signed in successfully</div>
      ) : (
        <div>Enter all Fields</div>
      )}
  <form onSubmit={handleSubmit}>
    <div >
      <div className="mb-3 mt-3">
        <label>Username</label>
        <input
          type="text"
          name="username"
          className="form-control"
          placeholder="Username"
          value={formValues.username}
          onChange={handleChange}
        />
      </div>
      <p>{formErrors.username}</p>
      <div className="mb-3">
        <label>Email</label>
        <input
          type="text"
          name="email"
          className="form-control"
          placeholder="Email"
          value={formValues.email}
          onChange={handleChange}
        />
      </div>
      <p>{formErrors.email}</p>
      <div className="mb-3">
        <label>Mobile</label>
        <input
          type="text"
          name="mobile"
          className="form-control"
          placeholder="Mobile Number"
          value={formValues.mobile}
          onChange={handleChange}
        />
      </div>
      <p>{formErrors.mobile}</p>
     
      <div className="mb-3">
        <label>Country</label>
        <input
          type="text"
          name="country"
          className="form-control"
          placeholder="Country"
          value={formValues.country}
          onChange={handleChange}
        />
      </div>
      <div className="mb-3">
        <label>City</label>
        <input
          type="text"
          name="city"
          className="form-control"
          placeholder="City"
          value={formValues.city}
          onChange={handleChange}
        />
      </div>
      <div className="mb-3">
        <label>State</label>
        <input
          type="text"
          name="state"
          className="form-control"
          placeholder="State"
          value={formValues.state}
          onChange={handleChange}
        />
      </div>
      <button className="fluid ui button blue">Submit</button>
    </div>
  </form>
</div>
</div>

);
}

export default App;
