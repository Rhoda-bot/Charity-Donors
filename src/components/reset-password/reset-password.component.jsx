import './reset-password.styles.css'
import { Component } from 'react'
import FormInput from '../form-input/form-input.component';
import CustomButton from '../custom-button/custom-button.component';

class ResetPassword extends Component {
  constructor(){
    super();

    this.state = {
      resetPass: ''
    }
  }
  handleSubmit( event){
    event.preventDefault();
    this.setState({resetPass: ''})
  }
  handleChange( event ){
    const {name, value} = event.target;
    this.setState({[name]: value})
  }
  render() {
    return (
     <div className="container">
       <div className="row">
         <div className="col-md-5 col-lg-5 col-xl-5 reset-pass">
           <h3 className='title'>Reset Password</h3>
           <p className='title-text'>Kindly provide your Email</p>
         <div className=''>
          <form onSubmit={this.handleSubmit}>
           <FormInput  placeHolder={'Email'} name={'resetPassword'} onChange={this.handleChange}/>
            <div className="footer">
              <p>Back to Login?</p>
              <CustomButton>Reset</CustomButton>
            </div>
          </form>
         </div>
         </div>
         <div className="col-md-7 col-lg-7 col-xl-7">
           <img src="../../images/melanie-lim-nD3wunG16Fo-unsplash.jpg" className='img-fluid' alt="" srcSet="" />
         </div>
       </div>
     </div>
    )
  }
}

export default ResetPassword;