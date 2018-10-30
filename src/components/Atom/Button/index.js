import React,  {Fragment} from 'react';


const Button = ({ text, classes, ...props}) => {
  return (
    <Fragment>
      <button {...props} className={classes}>{text}</button>
    </Fragment>
  )
}
export default Button;
