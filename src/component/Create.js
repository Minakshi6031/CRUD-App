import React from 'react'
import { useState } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
const Create = () => {

const [name,setName]=useState("")
const [course,setCourse]=useState("")
const [year,setYear]=useState("");
const [address,setAddress]=useState("")
const [phone,setPhone]=useState("")
const [room,setRoom]=useState("")
const history=useNavigate()
const header=("Access-Control-Allow-Origin");
const handleSubmit=(e)=>{
    e.preventDefault();
    console.log("Clicked");
    axios.post( "https://66fc012bc3a184a84d15a9e3.mockapi.io/CRUDAPP",{

    name:name, course:course,year:year,address:address,phone:phone,room:room,header

    })

    .then(()=>{ history("/read")})
   
};

  return (
  <>
    
    <h1>Create user Details</h1>
   
  <form>
<div className="mb-3">
 <label htmlFor="exampleInputEmail1" className="form-label">Name</label>
 <input type="name" className="form-control"  aria-describedby="emailHelp"
 onChange={(e)=>setName(e.target.value)}
 />

</div>



<div className="mb-3">
 <label htmlFor="exampleInputPassword1" className="form-label">Course</label>
 <input type="course" className="form-control" 
 onChange={(e)=>setCourse(e.target.value)}
 />
</div>

<div className="mb-3">
 <label htmlFor="exampleInputPassword1" className="form-label">Year</label>
 <input type="year" className="form-control" 
 onChange={(e)=>setYear(e.target.value)}
 />
</div>


<div className="mb-3">
 <label htmlFor="exampleInputEmail1" className="form-label">Address</label>
 <input type="address" className="form-control"  aria-describedby="emailHelp"
 onChange={(e)=>setAddress(e.target.value)}
 />

</div>
<div className="mb-3">
 <label htmlFor="exampleInputPassword1" className="form-label">Parents Mobile No.</label>
 <input type="phone" className="form-control" 
 onChange={(e)=>setPhone(e.target.value)}
 />
</div>
<div className="mb-3">
 <label htmlFor="exampleInputPassword1" className="form-label">Room No.</label>
 <input type="room" className="form-control" 
 onChange={(e)=>setRoom(e.target.value)}
 />
</div>


{name}
{course}
{year}
{address}
{phone}
{room}

<button type="submit" className="btn btn-primary"
onClick={handleSubmit}
>Submit</button>
</form>
   
  </>
  )
}

export default Create
