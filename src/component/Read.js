import React, { useState,useEffect } from 'react'
import axios from 'axios';
import { Link } from 'react-router-dom';

const Read = () => {
    const [data,setData]=useState([]);
    function getData(){
        axios.get("https://66fc012bc3a184a84d15a9e3.mockapi.io/CRUDAPP")
        .then((res)=>{
            console.log(res.data);
            setData(res.data);
        })

    }
    function handleDelete(id){
        axios.delete(`https://66fc012bc3a184a84d15a9e3.mockapi.io/CRUDAPP/${id}`

        ).then(()=>{
          getData()
        
    })
  }
  const setToLocalStorage=(id,name,course,year,address,phone,room)=>{
    localStorage.setItem("id",id)
    localStorage.setItem("name",name)
    localStorage.setItem("course",course)
    localStorage.setItem("year",year)
    localStorage.setItem("address",address)
    localStorage.setItem("phone",phone)
    localStorage.setItem("room",room)

  }
    useEffect(()=>{
        getData()
    },[]);
   
  return (
   <>
   <h1>Read User Details</h1>
   <table className="table">
    
  <thead>
    <tr>
      <th scope="col">Id</th>
      <th scope="col">Name</th>
      <th scope="col">Course</th>
      <th scope="col">Year</th>
      <th scope="col">Address</th>
      <th scope="col">Parents No.</th>
      <th scope="col">Room No.</th>
     

    </tr>
  </thead>
{

data.map((eachData)=>{
    return(
        <>
        
        
        <tbody>
    <tr>
      <th scope="row">{eachData.id}</th>
         
      <td>{eachData.name}</td>
      <td>{eachData.course}</td>
      <td>{eachData.year}</td>
      <td>{eachData.address}</td>
      <td>{eachData.phone}</td>
      <td>{eachData.room}</td>
   

      
      <td>
        <Link to="/update"><button  className="btn btn-success" onClick={()=>setToLocalStorage()} >Edit</button> </Link>
        </td>
      <td><button type="button" className="btn btn-danger"
      
      onClick={()=>handleDelete(eachData.id)}
      >
        Delete{}
        </button></td>

    </tr>
    
  </tbody>  
        
        
        </>
    )        

    

})

 
}
</table>
   
   </>
  )
}

export default Read
