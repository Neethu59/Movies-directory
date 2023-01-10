import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import Navbar from './Navbar'

export default function Movieslist() {
  const key = "moviedata"
  const [data, setdata] = useState(JSON.parse(localStorage.getItem(key)) || [])
  const [searchData,setSearchData]=useState([])
  const [searchh,setSearchh]=useState(false)
  console.log(data[0]);
  localStorage.setItem(key, JSON.stringify(data))
  useEffect(() => {
    const sdata = data.sort((a, b) => {
      return b.durationInput - a.durationInput;

    });
    console.log(sdata);
    // setdata.reverse();
    setdata(sdata)

  }, [data])
  
  const search = (name) => {
    console.log(name);
    if (name.length >= 2) {
      const filterdata = data.filter(details => {
        return details?.nameInput.toLowerCase().includes(name.toLowerCase())

      })
      setSearchData(filterdata)
      setSearchh(true)
    }

  }
  useEffect(()=>{
    setdata(JSON.parse(localStorage.getItem(key)))
  },[])
  return (
    <>
      <Navbar search={search} />

      {/* <button type="button" class="btn btn-primary">ADD</button> */}
      {
        searchh===false ?

      
        <section className="vh-100 bg-image" style={{ "background-image": "url('https://mdbcdn.b-cdn.net/img/Photos/new-templates/search-box/img4.webp')" }}>
        <Link to="/">   <button type="button" class="btn btn-primary p-3 mt-2" style={{ marginLeft: "80%", width: "15%" }}>ADD</button></Link>

        <div class="container">
          <div class="row">
            {data?.map((details) => (
              <div class="col-sm-3 mt-5">
                <div class="card">
                  <div class="card-body">
                    <h5 class="card-title">Movie Name:{details?.nameInput}</h5>
                    <p class="card-text">Rating:{details?.ratingsInput}</p>
                    <p class="card-text">Duration:{details?.durationInput}h</p>
                    {/* <a href="#" class="btn btn-primary">Go somewhere</a> */}
                  </div>
                </div>
              </div>
            ))}

          </div>
        </div>
      </section>:


      
      
        searchData[0]?.nameInput==undefined ?
        <section className="vh-100 bg-image" style={{ "background-image": "url('https://mdbcdn.b-cdn.net/img/Photos/new-templates/search-box/img4.webp')" }}>
        <Link to="/">   <button type="button" class="btn btn-primary p-3 mt-2" style={{ marginLeft: "80%", width: "15%" }}>ADD</button></Link>

        <div class="container">
          <div class="row">
         <h1>No Data Found </h1>
          </div>
        </div>
      </section>
      :
      <section className="vh-100 bg-image" style={{ "background-image": "url('https://mdbcdn.b-cdn.net/img/Photos/new-templates/search-box/img4.webp')" }}>
      <Link to="/">   <button type="button" class="btn btn-primary p-3 mt-2" style={{ marginLeft: "80%", width: "15%" }}>ADD</button></Link>

      <div class="container">
        <div class="row">
          {
            searchData?.map((details) => (
            <div class="col-sm-3 mt-5">
              <div class="card">
                <div class="card-body">
                  <h5 class="card-title">{details?.nameInput}</h5>
                  <p class="card-text">{details?.ratingsInput}</p>
                  <p class="card-text">{details?.durationInput}h</p>
                  {/* <a href="#" class="btn btn-primary">Go somewhere</a> */}
                </div>
              </div>
            </div>
          ))}

        </div>
      </div>
    </section>

      

    }
    </>



  )
}
