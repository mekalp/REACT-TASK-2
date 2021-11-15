import { useState } from "react";

import Validation from "./validations"


const State =()=>{

 const [space,setSpace]= useState({fname:"",lname:"", faname:"",maname:"",password:"",email:"",pnum:"",textarea:"",role:"",term:""})

 const [errors, setErrors]=useState({})

      
const handleSubmit=(e)=>{

    e.preventDefault()

    // setSpace(space)


    setErrors(Validation(space))

    console.log(space)


}
    
    
const handleChange=({target:{name,value,checked}})=>{

           if(name==="term"){
 
            value=checked;

           }

           setSpace({[name]:value})

           console.log(name,value)

     }

     return {handleChange,handleSubmit,space,errors}

    }

    export default State