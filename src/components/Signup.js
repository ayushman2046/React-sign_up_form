import React,{useState} from 'react'
export default function Signup() {
    const initialValues = { username: "", email: "", password: "",confirm: ""};
    const [formValues, setFormValues] = useState(initialValues);
    const [formErrors, setFormErrors] = useState({});
    const [isSubmit, setIsSubmit] = useState(false);
    let mystyle = {
        color : "red",
    }

    const handleonchange= (event) =>{
        const {name,value} = event.target;
        setFormValues({...formValues, [name] : value});
    };
    const handleSubmit = (e) => {
        e.preventDefault();
        setFormErrors(validate(formValues));
        setIsSubmit(true);
      };
   
    const validate = (values) => {
        const errors = {};
        const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
        if (!values.username) {
          errors.username = "Username is required!";
        }
        if (!values.email) {
          errors.email = "Email is required!";
        } else if (!regex.test(values.email)) {
          errors.email = "This is not a valid email format!";
        }
        if (!values.password) {
          errors.password = "Password is required";
        } else if (values.password.length < 4) {
          errors.password = "Password must be more than 4 characters";
        }
        if (!values.confirm) {
            errors.confirm = "Password is required";
          } else if (values.confirm.length < 4) {
            errors.confirm = "Password must be more than 4 characters";
          } 
        return errors;
      };

  return (
      <>
    <div className="container">
        {Object.keys(formErrors).length === 0 && isSubmit ? (
                <div className="contain" style={mystyle}><h4>You have signed up succesfully</h4></div>
            ) : 
            (<pre>{JSON.stringify(formValues, undefined, 2)}</pre>)
                }
    <form className="form form" id="createAccount" onSubmit={handleSubmit}>
        <h1 className="form__title"> <b> Create Account</b> </h1>
        <div className="form__message form__message--error"></div>
        <div className="form__input-group">
            <i className="material-icons">&#xe8d3;</i>
            <input autoComplete='off' name = "username" type="text" value={formValues.username} onChange={handleonchange} id="signupUsername" className="form__input" autoFocus placeholder="Username"/>
            <p style={mystyle}>{formErrors.username}</p>
            <div className="form__input-error-message"></div>
        </div>
        <div className="form__input-group">
            <i className="material-icons">&#xe0be;</i>  
            <input type="text" name = "email" value={formValues.email} onChange={handleonchange} className="form__input" autoFocus placeholder="Email Address"/>
            <p style={mystyle}>{formErrors.email}</p>
            <div className="form__input-error-message"></div>
        </div>
        <div className="form__input-group">
            <i className="material-icons" >&#xf042;</i>
            <input type="password" name = "password" value={formValues.password} onChange={handleonchange}  className="form__input" autoFocus placeholder="Password"/>
            <p style={mystyle}>{formErrors.password}</p>
            <div className="form__input-error-message"></div>
        </div>
        <div className="form__input-group">
            <i className="material-icons" >&#xf042;</i>
            <input type="password" name = "confirm" value={formValues.confirm} onChange={handleonchange} className="form__input" autoFocus placeholder="Confirm password"/>
            <p style={mystyle}>{formErrors.confirm}</p>
            <div className="form__input-error-message"></div>
        </div>
        <button className="form__button" type='submit'>Sign Up</button>
    </form>
    </div>
    </>
  )
}
