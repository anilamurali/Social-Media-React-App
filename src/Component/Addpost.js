import React, { useState } from 'react'
import Nav from './Nav'

const Addpost = () => {
    var [title,setTitle]=useState("")
    var [messege,setMessege]=useState("")
    const changeValue=()=>{
        const data={"title":title,"messege":messege}
        console.log(data)
    }

  return (
    <div>
        <Nav/>
        <div>
    <div class="container">
<div class="row">
    <div class="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
        <div class="row g-2">
            <div class="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                <label for="" class="form-label">Title</label>
                <input onChange={(e)=>{setTitle(e.target.value)}} type="text" class="form-control"/>
            </div>
            <div class="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                <label for="" class="form-label">Messege</label>
                <textarea onChange={(e)=>{setMessege(e.target.value)}} name="" id="" cols="30" rows="4" class="form-control"></textarea>
            </div>
            
            <div class="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                <button onClick={changeValue} class="btn btn-success">SUBMIT</button>
            </div>
        </div>
    </div>
</div>
</div></div>
    </div>
  )
}

export default Addpost