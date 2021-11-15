import React, { Fragment } from "react";

import State from "./state"


export const App=()=>{

  const { handleChange,handleSubmit,space,errors } = State()

  /// The above sentence enduku rasukovali antey, manam state.js lo rasukunna code ikkadiki access ravali antey import cheyali
  //  and State.js lo define cheysina variables ikkada folder lo access thechukovali antey,state.js lo variables return cheysukoni and ikkada destructure cheysukovali//
    
  return (
  
     <Fragment>
  
  
     <h3 id="header">Application form with useState method</h3>

     <form onSubmit={handleSubmit} id="frm">
 
      <div>
   
       <label>First Name : </label>
       <input type="text" name="fname" value={space.fname} onChange={handleChange}></input>
         
       {errors.fname?<p>{errors.fname}</p>:""}
      </div>
      
      <br/>
      <div>
   
       <label>Last Name : </label>
       <input type="text" name="lname" value={space.lname} onChange={handleChange}></input>
       {errors.lname?<p>{errors.lname}</p>:""}

      </div>
      
      <br/>
      <div>
   
       <label>Father Name : </label>
       <input type="text" name="faname"  value={space.faname} onChange={handleChange}></input>
       {errors.faname?<p>{errors.faname}</p>:""}

      </div>
      <br/>
      <div>
   
       <label>Mother Name : </label>
       <input type="text" name="maname"  value={space.maname} onChange={handleChange}></input>
       {errors.maname?<p>{errors.maname}</p>:""}

      </div>
      <br/>
      <div>
   
       <label>Password : </label>
       <input type="password" name="password" value={space.password} onChange={handleChange}></input>
       {errors.password?<p>{errors.password}</p>:""}
      </div>
      <br/>
      <div>
   
       <label>Email : </label>
       <input type="email" name="email" value={space.email} onChange={handleChange}></input>
       {errors.email?<p>{errors.email}</p>:""}

      </div>
      <br/>
      <div>
   
       <label>Phone number : </label>
       <input type="number" name="pnum" value={space.pnum} onChange={handleChange}></input>
       {errors.pnum?<p>{errors.pnum}</p>:""}
  
      </div>
      <br/>
      <div>
   
       <label>Address : </label>
       <textarea name="textarea" rows="8" cols="30" value={space.textarea} onChange={handleChange}></textarea>
       {errors.textarea?<p>{errors.textarea}</p>:""}

      </div>
      <br/>
      <div>
   
      <label>Role Applied for : </label>
      <select name="role" value={space.role} onChange={handleChange}>

              <option></option>
              <option value="react">ReactJs Dev</option>
              <option value="node">NodeJs Dev</option>
              <option value="mern">Mern Dev</option>

      </select>

      {errors.role?<p>{errors.role}</p>:""}
      </div>
      <br/>

     <div>
   
     <input name="term" type="checkbox" checked={space.term} onChange={handleChange}></input>
     {errors.term?<p>{errors.term}</p>:""}         
        <label>

    I certify that the statements made in this application, on my resume
    and any other attachments, and any other information that I provide is correct.

    </label> 

     </div>
     <br/>
      <div>
   
       <button type="submit">SUBMIT</button>

      </div>


    </form>

    </Fragment>
  
  )

}


