import React, { useEffect } from 'react'
import { useState } from 'react'
import axios from 'axios'
import { useNavigate } from "react-router-dom"
const Update = () => {
const [id,setId]=useState(0)
const [name,setName]=useState("")
const [course,setCourse]=useState("");
const [year,setYear]=useState("");
const [address,setAddress]=useState("");
const [phone,setPhone]=useState("");
const [room,setRoom]=useState("");

const navigate=useNavigate();

useEffect(()=>{
  setId(localStorage.getItem("id"));
  setName(localStorage.getItem("name"))
  setCourse(localStorage.getItem("course"))
  setYear(localStorage.getItem("year"))
  setAddress(localStorage.getItem("address"))
  setPhone(localStorage.getItem("phone"))
  setRoom(localStorage.getItem("room"))
  
},[])

const handleUpdate=(e)=>{
  e.preventDefault();
  console.log("Id...",id)
  axios.put(`https://66fc012bc3a184a84d15a9e3.mockapi.io/CRUDAPP/${id}`,{
    name:name,
    course:course,
    year:year,
    address:address,
    phone:phone,
    room:room
  }
)
.then(()=>{navigate("/read")

  });
}


  return (
    <>
    
    <h1>Update User Details</h1>
  <form>
<div className="mb-3">
 <label htmlFor="exampleInputEmail1" className="form-label">Name</label>
 <input type="name" className="form-control"   vlaue={name} 
 onChange={(e)=>setName(e.target.value)}
 />

</div>
<div className="mb-3">
 <label htmlFor="exampleInput" className="form-label">Course</label>
 <input type="course" className="form-control"  vlaue={course}
 onChange={(e)=> setCourse(e.target.value)}
 />
</div>

<div className="mb-3">
 <label htmlFor="exampleInput" className="form-label">Year</label>
 <input type="year" className="form-control"  vlaue={year}
 onChange={(e)=>setYear(e.target.value)}
 />
</div>

<div className="mb-3">
 <label htmlFor="exampleInput" className="form-label">Address</label>
 <input type="address" className="form-control"  vlaue={address}
 onChange={(e)=>setAddress(e.target.value)}
 />
</div>

<div className="mb-3">
 <label htmlFor="exampleInput" className="form-label">Parents No.</label>
 <input type="parentsnum" className="form-control"  vlaue={phone}
 onChange={(e)=>setPhone(e.target.value)}
 />
</div>
<div className="mb-3">
 <label htmlFor="exampleInput" className="form-label">Room No.</label>
 <input type="room" className="form-control" vlaue={room}
 onChange={(e)=>setRoom(e.target.value)}
 />
</div>


<button type="update" className="btn btn-primary"
onClick={handleUpdate}
>Update</button>
</form>
    </>
  )
  
}

export default Update
