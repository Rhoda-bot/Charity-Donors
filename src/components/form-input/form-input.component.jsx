import  './form-input.style.css';

const FormInput = ({handleOnchange, placeHolder, otherProps }) => {
  return (
    <div className="group">
      <input type="text"  onChange={handleOnchange} placeholder={placeHolder} className='form-control'/>
    </div>
  )
}
 

export default FormInput;