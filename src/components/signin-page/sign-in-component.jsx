import { Component } from "react";
import './sign-in.styles.css'
import FormInput from "../form-input/form-input.component";
import CustomButton from "../custom-button/custom-button.component";
import { Link } from "react-router-dom";

class SignInPage extends Component {
  constructor () {
    super();

    this.state = {
    
      email: '',
      password: '',
      inputNames: [
        'Email',
        'Password'
      ]

    }
  }

  handleSubmit(event) {
    event.preventDefault();
    this.setState({email: '', password:'' })
  }

  handleChange(event) {
    const {name, value } = event.target;
    this.setState({ [name]: value});
  }

  render ( ) {
    return (
     <div className="container">
       <div className="row">
        <div className="col-md-5 col-xl-5 col-lg-6 sign-in">
          <h3 className="title">Hi, You are welcome</h3>
            <p>Provide the credintials neeeded to access <br></br> the admin page</p>
              <form onSubmit={this.handleSubmit}>
                <div >
                  {this.state.inputNames.map((val, ind) => (
                  <FormInput onChange={this.handleChange} key={ind}  placeHolder={val} name={val}/> 
                 ))}
                </div>
                <div className="footer">
                {/* <p><Link > </Link></p> */}
                <p><a href="#">Forgot Password</a></p>
                <CustomButton>Login</CustomButton>
              </div>
            </form>
        </div>
        <div className="col-md-7 col-xl-7 col-lg-7 border-left sign-in-image">
          <img src="../../images/katt-yukawa-K0E6E0a0R3A-unsplash.jpg" alt="" srcset="" className="img-fluid"/>
        </div>
       </div>
     </div>
    )
  }
}
export default SignInPage;