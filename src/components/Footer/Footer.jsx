import React from 'react'
import './Footer.css'

const Footer = () => {
  return (
    <section className="f-wrapper">
      <div className="paddings innerWidth f-Container flexBetween">

        {/* left */}
        <div className="flexColStart f-left">
          <img src="./logo2.png" alt="" width={230} />

          <span className="secondaryText">
            Our vision is to make all people <br />
            the best place to live for them.
          </span>
        </div>

        {/* right */}
        <div className="flexColStart f-right">
          <span className="primaryText">Information</span>
          <span className="secondaryText">IT Park Near NIC Peshawar, KPK</span>

          <div className="flexCenter f-menu">
            <span>Property</span>
            <span>Services</span>
            <span>Product</span>
            <span>About Us</span>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Footer