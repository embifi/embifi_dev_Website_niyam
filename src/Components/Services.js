import React, { useContext } from "react";
import { GlobalInfo } from "../context/GlobalContext";

function Services() {
  const { home, services, whyUs, contactUs, quote } = useContext(GlobalInfo);

  return (
    <section id="services" ref={services}>
      <div className="header">
        <h1>OUR SERVICES</h1>
        <h1 className="heading">WHAT DO WE OFFER</h1>
        {/* <p>Along with end to end credit journey…</p> */}
      </div>
      <div className="row1-container">
        <div className="box box-down cyan">
          {/* <p className="text-center">
            <img
              src={
                "https:/drilca9ckdzo8.cloudfront.net/filters:format(webp)/api.svg"
              }
              alt=""
              width={80}
            />
          </p> */}
          <h2 className="text-center">APIs</h2>
          <p className="text-center">Plug and Play APIs for native journey</p>
        </div>

        <div className="box red">
          {/* <p className="text-center">
            <img
              src={
                "https:/drilca9ckdzo8.cloudfront.net/filters:format(webp)/platform.svg"
              }
              alt=""
              width={80}
            />
          </p> */}
          {/* <h2 className='text-center'>Platform</h2>
      <p className='text-center'>White label neutral platform</p> */}
          <h2 className="text-center">Credit journey</h2>
          <p className="text-center">end to end</p>
        </div>

        <div className="box box-down blue">
          {/* <p className="text-center">
            <img
              src={
                "https:/drilca9ckdzo8.cloudfront.net/filters:format(webp)/report.svg"
              }
              alt=""
              width={80}
            />
          </p> */}
          <h2 className="text-center">Reports</h2>
          <p className="text-center">Instant Reports and Analytics</p>
        </div>
      </div>
      <div className="row2-container">
        <div className="box orange">
          {/* <p className="text-center">
            <img
              src={
                "https:/drilca9ckdzo8.cloudfront.net/filters:format(webp)/dash.svg"
              }
              alt=""
              width={70}
            />
          </p> */}
          <h2 className="text-center">Dashboard</h2>
          <p className="text-center">Seamless Dashboard</p>
        </div>
      </div>
    </section>
  );
}

export default Services;
