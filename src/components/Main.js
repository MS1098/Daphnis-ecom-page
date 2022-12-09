import React from 'react';
import Navbar from './Nav';
import {
    MDBCard,
    MDBCardBody,
    MDBCardTitle,
    MDBCardText,
    MDBCardImage,
    MDBBtn,
    MDBRipple
  } from 'mdb-react-ui-kit';
function Main() {
  return (
    <div>
  
       <Navbar/>
      <div className='medP'><p>  Medical Darpan>Search  </p></div>
       <div class="input-group mb-10  w-50 p-3 ">
  <input type="text  " class="form-control " placeholder="Search here" aria-label="Search Here" aria-describedby="basic-addon2"/>
  <div class="input-group-append">
    <span class="input-group-text" style={{backgroundColor:"teal",color:"white"}} id="basic-addon2">Search</span>
  </div>
</div>
{/* <div className='textM'>
    <h1>Paracetamol</h1>
</div> */}








<div className='cardDiv' style={{display:"flex",width:"100%",content:"revert-layer" }}>
<div class="list-group " style={{width:"20%"}}>
  <a href="#" class="list-group-item list-group-item-action active " style={{backgroundColor:"grey"}} >
    Related Category
  </a>
  <a href="#" class="list-group-item list-group-item-action">Paracetamol Tablets</a>
  <a href="#" class="list-group-item list-group-item-action">Paracetamol Syrup</a>
  <a href="#" class="list-group-item list-group-item-action">Paracetamol Powder</a>
  <a href="#" class="list-group-item list-group-item-action">Acelofenac</a>
  <a href="#" class="list-group-item list-group-item-action">Megalederate Simithicone Oral Suspension</a>
  <a href="#" class="list-group-item list-group-item-action disabled" tabindex="-1" aria-disabled="true">Mefeanic Paracetamol </a>
</div>


<MDBCard className='card' style={{width:"20%", height:"20%",marginLeft:"5px"}}>
      <MDBRipple rippleColor='light' rippleTag='div' className='bg-image hover-overlay '>
        <MDBCardImage src='https://5.imimg.com/data5/JM/EL/FG/SELLER-4455966/favipiravir-200mg-tablet-500x500.jpg' fluid alt='...' />
        <a>
          <div className='mask' style={{ backgroundColor: '#DC143C' }}></div>
        </a>
      </MDBRipple>
      <MDBCardBody>
        <MDBCardTitle style={{fontSize:"15px"}}>Favipiravir 400mg (Fabiflu) Tablets</MDBCardTitle>
        <MDBCardTitle style={{color:"#DC143C",fontSize:"20px"}}>Rs 1775 /<p style={{fontSize:"10px"}}>Stripe</p></MDBCardTitle>
        <MDBCardText>
          Glenmark Pharmaceutical Limited
          <p>PARVAT PATIYA,SURAT,GUJRAT</p>
        </MDBCardText>
        <div style={{color:"black",width:"100%",height:"1px"}}></div>
        {/* <MDBBtn href='#'>Button</MDBBtn> */}
   
        
      </MDBCardBody>
      <div className='bar' style={{width:"100%",height:"10px",backgroundColor:"#DC143C"}}></div>
    </MDBCard>



    <MDBCard className='card' style={{width:"20%", height:"20%" ,marginLeft:"20px"}}>
      <MDBRipple rippleColor='light' rippleTag='div' className='bg-image hover-overlay '>
        <MDBCardImage src='https://5.imimg.com/data5/JM/EL/FG/SELLER-4455966/favipiravir-200mg-tablet-500x500.jpg' fluid alt='...' />
        <a>
          <div className='mask' style={{ backgroundColor: 'rgba(251, 251, 251, 0.15)' }}></div>
        </a>
      </MDBRipple>
      <MDBCardBody>
        <MDBCardTitle style={{fontSize:"15px"}}>Favipiravir 400mg (Fabiflu) Tablets</MDBCardTitle>
        <MDBCardTitle style={{color:"#DC143C",fontSize:"20px"}}>Rs 1775 /<p style={{fontSize:"10px"}}>Stripe</p></MDBCardTitle>
        <MDBCardText>
        Glenmark Pharmaceutical Limited
          <p>PARVAT PATIYA,SURAT,GUJRAT</p>
        </MDBCardText>
        {/* <MDBBtn href='#'>Button</MDBBtn> */}
      </MDBCardBody>
      <div className='bar' style={{width:"100%",height:"10px",backgroundColor:"#DC143C"}}></div>
    </MDBCard>

    <MDBCard className='card' style={{width:"20%", height:"20%" ,marginLeft:"20px"}}>
      <MDBRipple rippleColor='light' rippleTag='div' className='bg-image hover-overlay '>
        <MDBCardImage src='https://5.imimg.com/data5/JM/EL/FG/SELLER-4455966/favipiravir-200mg-tablet-500x500.jpg' fluid alt='...' />
        <a>
          <div className='mask' style={{ backgroundColor: 'rgba(251, 251, 251, 0.15)' }}></div>
        </a>
      </MDBRipple>
      <MDBCardBody>
        <MDBCardTitle style={{fontSize:"15px"}}>Favipiravir 400mg (Fabiflu) Tablets</MDBCardTitle>
        <MDBCardTitle style={{color:"#DC143C",fontSize:"20px"}}>Rs 1775 /<p style={{fontSize:"10px"}}>Stripe</p></MDBCardTitle>
        <MDBCardText>
        Glenmark Pharmaceutical Limited
          <p>PARVAT PATIYA,SURAT,GUJRAT</p>
        </MDBCardText>
        {/* <MDBBtn href='#'>Button</MDBBtn> */}
      </MDBCardBody>
      <div className='bar' style={{width:"100%",height:"10px",backgroundColor:"#DC143C"}}></div>
    </MDBCard>
</div>
<div className='cardDiv' style={{display:"flex",marginTop:"10px",width:"100%",content:"revert-layer" }}>
<div class="list-group " style={{width:"20%"}}>
  <a href="#" class="list-group-item list-group-item-action active " style={{backgroundColor:"grey"}} >
    Related Brands
  </a>
  <a href="#" class="list-group-item list-group-item-action">Cipmol Paracetamol</a>
  <a href="#" class="list-group-item list-group-item-action">Pandamol Paracetamol</a>
  <a href="#" class="list-group-item list-group-item-action">Paracetamol Powder</a>
  <a href="#" class="list-group-item list-group-item-action">Acelofenac</a>
  <a href="#" class="list-group-item list-group-item-action">Megalederate Simithicone Oral Suspension</a>
  <a href="#" class="list-group-item list-group-item-action disabled" tabindex="-1" aria-disabled="true">Mefeanic Paracetamol </a>
</div>


<MDBCard className='card' style={{width:"20%", height:"20%"}}>
      <MDBRipple rippleColor='light' rippleTag='div' className='bg-image hover-overlay '>
        <MDBCardImage src='https://5.imimg.com/data5/JM/EL/FG/SELLER-4455966/favipiravir-200mg-tablet-500x500.jpg' fluid alt='...' />
        <a>
          <div className='mask' style={{ backgroundColor: 'rgba(251, 251, 251, 0.15)' }}></div>
        </a>
      </MDBRipple>
      <MDBCardBody>
        <MDBCardTitle style={{fontSize:"15px"}}>Favipiravir 400mg (Fabiflu) Tablets</MDBCardTitle>
        <MDBCardTitle style={{color:"#DC143C",fontSize:"20px"}}>Rs 1775 /<p style={{fontSize:"10px"}}>Stripe</p></MDBCardTitle>
        <MDBCardText>
        Glenmark Pharmaceutical Limited
          <p>PARVAT PATIYA,SURAT,GUJRAT</p>
        </MDBCardText>
        {/* <MDBBtn href='#'>Button</MDBBtn> */}
      </MDBCardBody>
      <div className='bar' style={{width:"100%",height:"10px",backgroundColor:"#DC143C"}}></div>
    </MDBCard>

    <MDBCard className='card' style={{width:"20%", height:"20%" ,marginLeft:"20px"}}>
      <MDBRipple rippleColor='light' rippleTag='div' className='bg-image hover-overlay '>
        <MDBCardImage src='https://5.imimg.com/data5/JM/EL/FG/SELLER-4455966/favipiravir-200mg-tablet-500x500.jpg' fluid alt='...' />
        <a>
          <div className='mask' style={{ backgroundColor: 'rgba(251, 251, 251, 0.15)' }}></div>
        </a>
      </MDBRipple>
      <MDBCardBody>
        <MDBCardTitle style={{fontSize:"15px"}}>Favipiravir 400mg (Fabiflu) Tablets</MDBCardTitle>
        <MDBCardTitle style={{color:"#DC143C",fontSize:"20px"}}>Rs 1775 /<p style={{fontSize:"10px"}}>Stripe</p></MDBCardTitle>
        <MDBCardText>
        Glenmark Pharmaceutical Limited
          <p>PARVAT PATIYA,SURAT,GUJRAT</p>
        </MDBCardText>
        {/* <MDBBtn href='#'>Button</MDBBtn> */}
      </MDBCardBody>
      <div className='bar' style={{width:"100%",height:"10px",backgroundColor:"#DC143C"}}></div>
    </MDBCard>

    <MDBCard className='card' style={{width:"20%", height:"20%" ,marginLeft:"20px"}}>
      <MDBRipple rippleColor='light' rippleTag='div' className='bg-image hover-overlay '>
        <MDBCardImage src='https://5.imimg.com/data5/JM/EL/FG/SELLER-4455966/favipiravir-200mg-tablet-500x500.jpg' fluid alt='...' />
        <a>
          <div className='mask' style={{ backgroundColor: 'rgba(251, 251, 251, 0.15)' }}></div>
        </a>
      </MDBRipple>
      <MDBCardBody>
        <MDBCardTitle style={{fontSize:"15px"}}>Favipiravir 400mg (Fabiflu) Tablets</MDBCardTitle>
        <MDBCardTitle style={{color:"#DC143C",fontSize:"20px"}}>Rs 1775 /<p style={{fontSize:"10px"}}>Stripe</p></MDBCardTitle>
        <MDBCardText>
        Glenmark Pharmaceutical Limited
          <p>PARVAT PATIYA,SURAT,GUJRAT</p>
        </MDBCardText>
        {/* <MDBBtn href='#'>Button</MDBBtn> */}
      </MDBCardBody>
      <div className='bar' style={{width:"100%",height:"10px",backgroundColor:"#DC143C"}}></div>
    </MDBCard>
</div>
   
    </div>
  )
}

export default Main