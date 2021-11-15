
const validateEmail = RegExp(/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/);

const Validation=(space)=>{


   let errors={}


   if(!space.fname){

    errors.fname="Name must be entered"
       
   }else{

    errors.fname=""


   }






   if(!space.lname){

    errors.lname="Name must be entered"
       
   }else{

    errors.lname=""


   }

   if(!space.faname){

    errors.faname="Name must be entered"
       
   }else{

    errors.faname=""


   }

   if(!space.maname){

    errors.maname="Name must be entered"
       
   }else{

    errors.maname=""


   }



   if(!space.email){

    errors.email="Email must be entered"

   }else if(!validateEmail){

    errors.email="Email must be in correct format"
   }else{

    errors.email=""


   }







   if(!space.password){

     errors.password="Password must be entered"

   } else if(!space.password.length<10){

     errors.password="password length must be below 10 characters"

   }else{

    errors.password=""


   }



   if(!space.pnum){

    errors.pum="number must be entered"
       
   }else if(!space.pnum.length<=10){

    errors.pnum="number must enter below 10 digits"

   }else{

    errors.pnum=""


   }


   if(!space.textarea){

    errors.textarea="Address must be entered"
       
   }else{

    errors.textarea=""


   }




   if(!space.role){

    errors.role="please select the role"
       
   }else{

    errors.role=""


   }




   if(!space.term){

    errors.term="please select the terms and conditions"
       
   }else{

    errors.term=""


   }

   return errors


}

export default Validation;