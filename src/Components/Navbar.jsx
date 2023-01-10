import React, { useState } from 'react'
import './Style.css'
import {Search} from '@mui/icons-material';
export default function Navbar({search}) {
 const [State,SetState]=useState({
  name:""
})
const SetRegister=(event)=>{
  const {name,value}=event.target
  SetState({...State,[name]:value})
  console.log(State)
}


  return (
    <>
    <div className="contain">
      
        <div className="d-flex justify-content-center ">
          <div className="searchbar">
            <input className="search_input" type="text" name="name"value={State.name||[]}onChange={SetRegister} placeholder="Search..." />
            <button className="search_icon"><Search onClick={()=>{search(State.name)}}/></button>
            
          </div>
        </div>
      </div>
    
    </>
  )
}
