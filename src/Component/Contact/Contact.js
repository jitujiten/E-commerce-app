import React from "react";
import "./Contact.css";

const Contact = (props) => {


const submitHandler= async(e)=>{
   e.preventDefault();
   const datafromuser={
    "Name":e.target.name.value,
    "Email":e.target.exampleInputEmail1.value,
    "Phone":e.target.phone.value,
   }

  fetch('https://react-http-a04e6-default-rtdb.firebaseio.com/dataofuseer.json',{
    method:'POST',
    body:JSON.stringify(datafromuser),
    headers:{ "content-Type":"aplication/json"}
  })

   e.target.name.value="";
   e.target.exampleInputEmail1.value="";
   e.target.phone.value="";
}








  return (
    <div className="row justify-content-evenly">
      <div className="col-7  mt-5">
      <h2 className="heading">Contact Us:-</h2>
        <form onSubmit={submitHandler}>
        <label htmlFor="exampleInputname" className="form-label">
           Name:
          </label>
          <input
            type="text"
            className="form-control"
            id="name"
            required
          />
          <label htmlFor="exampleInputEmail1" className="form-label">
            Email address:
          </label>
          <input
            type="email"
            className="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
            required
          />
          <div id="emailHelp" className="form-text">
            We'll never share your email with anyone else.
          </div>
          <label htmlFor="exampleInputphone" className="form-label">
           Phone:
          </label>
          <input
            type="tel"
            className="form-control"
            id="phone"
            required
          />
         <button type="submit" id="submitbtn" className="btn btn-outline-primary mt-2">Submit</button> 
        </form>
      </div>
    </div>
  );
};

export default Contact;
