import React, { useState, useEffect, useContext } from "react";
import { Button } from "@mui/material";
import MobHeader from "./MobHeader";
import "./style.css";
import "./responsive.css";
import { GlobalInfo } from "../context/GlobalContext";
import { useNavigate } from "react-router-dom";
import { UserContext } from "../context/UserContext";


function Header() {
  const { user, isLoading } = useContext(UserContext);

  const logoNoTag = "https://drilca9ckdzo8.cloudfront.net/filters:format(webp)/white-notag.svg";
  const logoTag = "https://drilca9ckdzo8.cloudfront.net/white.svg"

  const { home, services, whyUs, contactUs } = useContext(GlobalInfo);
  const navigate = useNavigate()
  const [navSize, setnavSize] = useState("10rem");
  const [logoSize, setLogoSize] = useState("170px");
  const [logoSrc, setLogo] = useState(logoTag);
  const [navColor, setnavColor] = useState("transparent");
  const [active, setActiveNav] = useState({home:true,services:false,whyUs:false});

  const listenScrollEvent = () => {
    window.scrollY > 10 ? setnavColor("#252734") : setnavColor("transparent");
    window.scrollY > 10 ? setnavSize("5rem") : setnavSize("10rem");
    window.scrollY > 10 ? setLogoSize("100px") : setLogoSize("170px");
    window.scrollY > 10 ? setLogo(logoNoTag) : setLogo(logoTag);
    window.scrollY<1800 && setActiveNav((prev)=>({...prev,services:false,whyUs:false,home:true}))
    window.scrollY>1800 && window.scrollY < 2800 && setActiveNav((prev)=>({...prev,services:true,whyUs:false,home:false}))
    window.scrollY>2800 && window.scrollY < 3900 && setActiveNav((prev)=>({...prev,services:false,whyUs:true,home:false}))
    window.scrollY>3900 && setActiveNav((prev)=>({...prev,services:false,whyUs:false,home:false}))

  };

  useEffect(() => {
    window.addEventListener("scroll", listenScrollEvent);
    return () => {
      window.removeEventListener("scroll", listenScrollEvent);
    };
  }, []);

  useEffect(()=>{
  },[active])

  return (
    <>
    <div className="nav-main">
      <div
        className="navbar"
        style={{
          backgroundColor: navColor,
          height: navSize,
          transition: "all 1s",
        }}
      >
        <img
          className="me-4 pointer"
          src={logoSrc}
          draggable="false"
          style={{
            width:logoSize,
            transition: "all 1s",
          }}
          onClick={() => {
            navigate('/home')
          }}
        />
        <ul className="navlinks mt-3">
          <li
            className={`pointer ${active.home && 'active'}`}
            onClick={() => {
              navigate('/home')
            }}
          >
            Home
          </li>
          <li
            className={`pointer ${active.services && 'active'}`}
            onClick={() =>
              navigate('/services')
            }
          >
            Services
          </li>
          <li
            className={`pointer ${active.whyUs && 'active'}`}
            onClick={() =>
              navigate('/why-us')
            }
          >
            Why us
          </li>
          <li
            className={`pointer`}
            onClick={() =>
              navigate('/lending-partners')
            }
          >
            Lending Partners
          </li>
          <li
              className={`pointer`}
              onClick={() =>
                  navigate('/About-Us')
              }
          >
            About-Us
          </li>
          <li
              className={`pointer`}
              onClick={() =>
                  navigate('/blogs')
              }
          >
            Blogs
          </li>
          {user ? (
            <li
              className={`pointer`}
              onClick={() =>
                  navigate('/employee-details')
              }
          >
            {user?.name}
          </li>
          ) : (<li
              className={`pointer`}
              onClick={() =>
                  navigate('/login')
              }
          >
            Login
          </li>) }
          {/* <li>Contact</li> */}
        </ul>
        <Button className="contact-btn" variant="outlined" onClick={() =>
              navigate('/contact-us')
            }>
          Contact us
        </Button>
      </div>
    </div>

    <MobHeader/>
    </>
  );
}

export default Header;
