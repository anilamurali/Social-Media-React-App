import React, { useState } from 'react'
import Nav from './Nav'

const Searchpost = () => {
    var [name,setName]=useState("Anila")
    const changeName=()=>{
        setName(
            name="Anju"

        )
    }
  return (
    <div>
        <Nav/>
        <div>
    <div class="container">
<div class="row">
    <div class="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
        <div class="row g-2">
          <h1>{name}</h1>  
            <button class="btn btn-success" onClick={changeName}>Change</button>
        </div>
    </div>
</div>
</div></div>
    </div>
  )
}

export default Searchpost