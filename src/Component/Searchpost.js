import React from 'react'
import Nav from './Nav'

const Searchpost = () => {
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
                <input type="text" class="form-control"/>
            </div>
            
            
            <div class="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                <button class="btn btn-success">Search</button>
            </div>
        </div>
    </div>
</div>
</div></div>
    </div>
  )
}

export default Searchpost