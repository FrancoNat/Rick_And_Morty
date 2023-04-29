import { useState } from "react";

const Form = () => {
    
    const [userData, setUserData] = useState({})
    
    return(
       <form>
         <label htmlFor="email">Email: </label>
         <input type="text" name="email"/>
         <label htmlFor="password">Password: </label>
         <input type="text" name="password"/>

         <button>Submit</button>
       </form>
    )
}


export default Form;