// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'


import logo1 from '@/assets/logo (2).png'
import menu from '@/assets/menu.png'
import calendar from '@/assets/calendar 1.png'
import person from '@/assets/person 1.png'
import search from '@/assets/search-outline 1.png'
import search1 from '@/assets/search 1.png'
import pin from '@/assets/pin 1.png'

import image1 from '@/assets/image (14).png'
import image2 from '@/assets/image (15).png'
import image3 from '@/assets/image (16).png'
import image4 from '@/assets/image (17).png'
import image5 from '@/assets/image (18).png'
import image6 from '@/assets/image (19).png'

import group1 from '@/assets/Group 78.png'
import group2 from '@/assets/Group 79.png'
import group3 from '@/assets/Group 80.png'
import group4 from '@/assets/Group 81.png'
// import group5 from '@/assets/Group 50.png'
import Group6 from '@/assets/Group 19.png'
import Group7 from '@/assets/Group 23.png'
import Group8 from '@/assets/Group 24.png'
import rectangle from '@/assets/Rectangle 847.png'
import rectangle1 from '@/assets/Rectangle 846.png'

import a1 from '@/assets/a1.png'
import a2 from '@/assets/a2.png'
import a3 from '@/assets/a3.png'
import a4 from '@/assets/a4.png'
import a5 from '@/assets/a5.png'




export default function App() {
  return (
    <>
      <header className='header'>
        <img src={logo1} alt="" />
        <aside>
          <div className='menu'>

            <p>Booking</p>
            <p>Facilities</p>
            <p>About Us</p>
            <p>Location</p>
            <p>Contact</p>
          </div>
          <div style={{ display: "flex", gap: "10px", alignItems: "center" }}>
            <img src={menu} alt="" />
            <button style={{ border: "1px solid black", backgroundColor: "transparent", width: "92px", height: "40px", borderRadius: "30px" }}>Sing in</button>
          </div>
        </aside>
      </header>

      <section className='section1'>
        <div className='h1'>
          <h1>Find Your Best Hotel for Deals</h1>
          <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
        </div>

        <aside >
          <div style={{ display: "flex", gap: "20px" }}>

            <Card1 name="Jun 10 - 14" img={calendar} />
            <Card1 name="2 Guests" img={person} />
          </div>

          <div className='card2'>
            <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>

              <img src={pin} alt="" />
              <h2>United States</h2>
            </div>
            <div className='serch'>
              <img src={search} alt="" />
            </div>
          </div>

        </aside>
      </section>



      <section className='section2'>

        <img className='img1' src={image1} alt="" />
        <aside className='aside1'>
          <img src={image2} alt="" />
          <img src={image3} alt="" />
        </aside>
      </section>

      <section className='section3'>
        <div className='section3-2'>
          <div className='nemon'>
            <h1>Facilities & Service</h1>
            <p style={{ color: "gray" }}>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy </p>
          </div>
          <div>
            <p style={{ color: "#3771C8", fontSize: "20px" }}>View All</p>
          </div>
        </div>

        <div className='card3'>
          <aside>

            <Card2 name="Private Workspace" img={group1} des="Lorem Ipsum is simply dummy text of the printing and typesetting industry." />
            <Card2 name="Parking Area" img={group2} des="Lorem Ipsum is simply dummy text of the printing and typesetting industry." />
          </aside>
          <aside>

            <Card2 name="Free Wifi" img={group3} des="Lorem Ipsum is simply dummy text of the printing and typesetting industry." />
            <Card2 name="Breakfast" img={group4} des="Lorem Ipsum is simply dummy text of the printing and typesetting industry." />
          </aside>
        </div>

      </section>

      <section className='section4'>
        <img className='section-img' src={rectangle} alt="" />
        <aside className='section-as'>
          <h1>Finest Luxury Hotels & Resort</h1>
          <p style={{ color: "gray", width: "300px" }}>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
          <div className='sec-img' style={{}}>
            {/* <img src={group5} alt="" /> */}
            {/* <img src={group5} alt="" /> */}
            {/* <img src={group5} alt="" /> */}
            {/* <img src={group5} alt="" /> */}
          </div>
          <button style={{ backgroundColor: "#3771C8", width: "130px", color: "white", borderRadius: "10px", height: "54px", border: "0" }}>Explore More</button>
        </aside>
      </section>

      <section className='section5'>
        <img src={a1} alt="" />
        <img src={a2} alt="" />
        <img src={a3} alt="" />
        <img src={a4} alt="" />
        <img src={a5} alt="" />
      </section>

      <section className='section6'>
        <img src={image4} alt="" />
        <aside className='aside2'>
          <img src={rectangle1} alt="" />
          <h3 style={{ color: "gray" }}> Nabeel</h3>
          <p className='sec-p'>“Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the ”</p>
        </aside>
      </section>

      <section className='section7'>

        <div className='section7-aside'>

          <div>
            <div className='secr'>
              <h1>Best Quality Hotels</h1>
              <p style={{ color: "gray" }}>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
            </div>

            <div className='sec6-card' >


              <Card3 name="1 Start" />
              <Card3 name="2 Start" />
              <Card3 name="3 Start" />
              <Card3 name="4 Start" />
              <Card3 name="5 Start" />
            </div>
          </div>
          <div>
            <p style={{ color: "#3771C8", fontSize: "20px" }} className='wiev'>View All</p>
          </div>
        </div>

        <div className='sec7-card'>
          <Card4 img={image5} name="Swimming pool and beach of luxury..." des="Lorem Ipsum is simply dummy text of the printing and typesetting industry." price="$250" />
          <Card4 img={image5} name="Swimming pool and beach of luxury..." des="Lorem Ipsum is simply dummy text of the printing and typesetting industry." price="$250" />
          <Card4 img={image5} name="Swimming pool and beach of luxury..." des="Lorem Ipsum is simply dummy text of the printing and typesetting industry." price="$250" />
        </div>
      </section>

      <section className='section8' style={{ backgroundColor: "#E8E9EB" }}>

        <aside>
          <h1>Subscribe for our mailing list to get latest updates and offers</h1>
          <p style={{color:"gray",fontSize:"20px"}}>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's </p>
          <div style={{ backgroundColor: "white", width: "300px", height: "20px", borderRadius: "20px", padding: "10px 10px", display: "flex", gap: "10px", alignItems: "center", justifyContent: "space-between" }}>
            <p>Enter your email</p>
            <button style={{ backgroundColor: "#3771C8", borderRadius: "20px", color: "white", border: "0", height: "40px" }}>Subscribe</button>
          </div>
        </aside>
        <img src={image6} alt="" />
      </section>

      <footer className='footer'>
        <div className='footer1'>


        <div>
          <img src={Group6} alt="" />
          <p style={{color:"gray"}}>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
          <div style={{ display: "flex", gap: "20px", alignItems: "center" }}>
            <img src={Group7} alt="" />
            <img src={Group8} alt="" />
            <img src={search1} alt="" />
          </div>


        </div>
        <Card5 home1="Home" home2="Booking" home3="Facilities" home4="Location" home5="Contact"/>
        </div>
        <div className='footer1'>

        <Card5 home1="Help" home2="About Us" home3="Help center" home4="Privacy policy" home5="FAQs"/>
        <Card5 home1="Get the app" home2="iOS app" home3="Android app" home4="Location" home5="Contact"/>
        </div>
      </footer>



    </>
  )
}


function Card1(props) {
  return (
    <div className='card1'>
      <img src={props.img} alt="" />
      <h2>{props.name}</h2>

    </div>
  )
}

function Card2(props) {
  return (
    <div>
      <img src={props.img} alt="" />
      <h2 >{props.name}</h2>
      <p style={{ color: "gray", fontSize: "23px" }}>{props.des}</p>

    </div>
  )

}
function Card3(props) {
  return (
    <div style={{ display: "flex", gap: "20px", alignItems: "center", border: "1px solid gray", width: "100px", height: "40px", borderRadius: "20px", padding: "10px" }}>
      <h1>{props.name}</h1>
    </div>
  )
}


function Card4(props) {
  return (
    <div className='card4'>
      <img src={props.img} alt="" />
      <div style={{ padding: "0px 20px  " }}>
        <h1>{props.name}</h1>
        <p>{props.des}</p>
        <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
          <h1 style={{ color: "#3771C8" }}>{props.price}/Night</h1>
          <button style={{ width: "77px", height: "30px", backgroundColor: "#3771C8", borderRadius: "10px", color: "white", border: "0" }}>Details</button>
        </div>
      </div>
    </div>
  )
}

function Card5(props) {
  return (
    <div style={{color:"gray"}}>
      <h1 style={{color:"black"}}>{props.home1}</h1>
      <p>{props.home2}</p>
      <p>{props.home3}</p>
      <p>{props.home4}</p>
      <p>{props.home5}</p>
    </div>
  )
}
