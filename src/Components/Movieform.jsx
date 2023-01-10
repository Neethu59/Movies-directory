
import React, { useEffect, useState } from 'react'
import {  useNavigate } from 'react-router-dom'

export default function Movieform() {
    const key="moviedata"
    const navigate=useNavigate();
    const[error,seterror]=useState(null)
    const[valid,setvalid]=useState('')
    const[check,setcheck]=useState(null)
    const [data,setdata]=useState(JSON.parse(localStorage.getItem(key))||[])
    const[State,SetState]=useState({
      nameInput:"",
      ratingsInput:"",
      durationInput:"",
    })
    const[temp,settemp]=useState(null)
   
 
  console.log(data)
 const setRegister=(event)=>{
        const{name,value}=event.target
        SetState({...State,[name]:value}) 
        console.log(State)
    }
    const addButton=(event)=>{
      // settemp(true)
        event.preventDefault()
        setvalid(' ')
        seterror('')
        console.log(State)
       const duration=(State.durationInput)
       const time=duration.slice(0,duration.length-1)
      const t=duration.slice(-1)
      console.log(t)
      if(t==="m")
      {
      var Hours =(time/60).toFixed(1)
      console.log(Hours)
      SetState({...State,durationInput:Hours})
      settemp(true)
      }
      else if(t==="h")
      {
        console.log(time)
        SetState({...State,durationInput:time})
      settemp(true)
      }
      else{
        alert("please enter duration in m or h")
        seterror(true)
      }
        // var a=State.rating
       if(State.nameInput==""||State.ratingsInput==""||State.durationInput==""){
        seterror(true)
      } 
      if(State.ratingsInput>100)
      {
        console.log("reting...>",true)
        seterror(true)
        setvalid('please enter rating must be lessthan 100')
      } 
    }
    useEffect(()=>{
      if(temp===true){
       setcheck(true)
        setdata([...data,State])
     

      // setcheck(true)
        
      }    
    },[temp])

    useEffect(()=>{      
        localStorage.setItem(key,JSON.stringify(data)) 
        
    },[data])
    if(check===true)
    {
      navigate("/movieslist")  
    }
    
  return (
    <section className="vh-100 bg-image" style={{"background-image":"url('https://mdbcdn.b-cdn.net/img/Photos/new-templates/search-box/img4.webp')"}}>
  <div className="mask d-flex align-items-center h-100 gradient-custom-3">
    <div className="container h-100">
      <div className="row d-flex justify-content-center align-items-center h-100">
        <div className="col-12 col-md-9 col-lg-7 col-xl-6">
          <div className="card" style={{"border-radius":"15px"}}>
            <div className="card-body p-5">
              <h2 className="text-uppercase text-center mb-5">Favorite Movie Directory</h2>
              <form onSubmit={addButton}>
                <div className="form-outline mb-4">
                  <input type="text" id="form3Example1cg" className="form-control form-control-lg"name="nameInput"value={State.nameInput||[]}onChange={setRegister}required />
                  <label className="form-label" htmlFor="form3Example1cg">Movie Name</label>
                </div>
                <div className="form-outline mb-4">
                  <input type="number" id="form3Example3cg" className="form-control form-control-lg" name="ratingsInput"value={State.ratingsInput||[]}onChange={setRegister}required/>
                  <label className="form-label" htmlFor="form3Example3cg"required>Rating</label><p style={{color:"red"}}>{valid}</p>
                  
                </div>
                <div className="form-outline mb-4">
                  <input type="text" id="form3Example4cg" className="form-control form-control-lg" name="durationInput"value={State.durationInput||[]}onChange={setRegister}/>
                  <label className="form-label" htmlFor="form3Example4cg">Duration</label><span className="text-muted">(please enter duration in m or h(minute or hour))</span>
                </div>
                
                {error&&(<p className="text-center text-muted-danger mt-2 mb-0 ">Please enter valid data</p>)}
                <div className="d-flex justify-content-center">
                  <button type="submit" className="btn btn-success btn-block btn-lg gradient-custom-4 text-body">ADD</button>
                </div>
                {/* <p className="text-center text-muted mt-5 mb-0">Have already an account? <a href="#!" className="fw-bold text-body"><u>Login here</u></a></p> */}
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>
  )
}
