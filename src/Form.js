import React  from 'react';

const Form = (props) => {

return (
    <div>
     

 <form>

   <input 
   type="text"
   placeholder="Name"
   {...props.useInput()}
   />

<input 
   type="text"
   placeholder="Surname"
   {...props.useInput()}
   />

<input 
   type="number"
   placeholder="Age"
   {...props.useInput()}
   />
  
 </form>

 
</div>
  );
}

export default Form;