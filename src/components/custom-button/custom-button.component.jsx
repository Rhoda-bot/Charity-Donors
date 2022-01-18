import './custom-button.styles.css';
const CustomButton = ({children, ...otherProps}) => {
  return(
    <div>
      <button className="custom-button"> 
        {children}
        
        </button>
    </div>
  )
}

export default CustomButton;