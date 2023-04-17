import { Container } from "@mui/system";
import React, { useEffect, useRef, useState } from "react";
import Header from "../Components/PlainHeader";
import "./Style.css";
import HttpsIcon from "@mui/icons-material/Https";
import FooterComp from "../Components/Footer";
import { Grid } from "@mui/material";
import vaniLogo from "../Assets/vani.png";
import prestLogo from "../Assets/prest.png";
import nyLogo from "../Assets/ny.png";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";

const LendingPartners = () => {
  return (
    <>
      <Header />
      <div className="privacy-head-div">
        <Container>
          <p className="privacy-heading">
            {/* <HttpsIcon className="mb-1 me-1" style={{ fontSize: "40px" }} /> */}
            <p className="lending-head" style={{ fontSize: "40px" }}>
              Our Lending Partners
            </p>
            <div className="line"></div>
          </p>
        </Container>
      </div>
      <Container className="privacy-container pt-3 pb-5">
        <p className="description-1 mt-3">
          Embifi is a loan facilitation platform which enables a smooth flow of
          loan transactions between its partner RBI registered Financial
          Institution (NBFCs/Banks) and the borrowers.
        </p>

        <Grid container sx={{display: "flex", justifyContent: "center"}} spacing={2} className="py-5">
          <Grid item xs={12} md={6} lg={4} className={"content-center"}>
            <div className="w-50 lender-card">
              <p className="text-center">
                <img
                  src={vaniLogo}
                  className="pulse"
                  alt="Vani commercials logo"
                  width={220}
                />
              </p>
              <p className="mt-5">
                <b>Vani Commercials Limited</b>
              </p>
              <p
                className="mt-2 visit-web"
                onClick={() => {
                  window.open(`https://vanicommercials.com/`, `_blank`);
                }}
              >
                Visit website <ArrowForwardIcon />
              </p>
            </div>
          </Grid>
          {/* <Grid item xs={12} md={6} lg={4} className={"content-center"}>
            <div className="w-50 lender-card lender-card-last">
              <p>
                <img
                  src={prestLogo}
                  className="pulse"
                  width={"150px"}
                  alt="Prest Loans logo"
                />
              </p>
              <p className="mt-5">
                <b>
                  Prest Loans <br></br>
                  <span style={{fontSize:'13px'}}>(trade name of “Lord Krishna <br></br>
                  Financial Services Ltd”)</span>
                </b>
              </p>
              <p
                className="mt-2 visit-web"
                onClick={() => {
                  window.open(`https://prestloans.com/`, `_blank`);
                }}
              >
                Visit website <ArrowForwardIcon />
              </p>
            </div>
          </Grid> */}
          <Grid item xs={12} md={6} lg={4} className={"content-center"}>
            <div className="w-50 lender-card lender-card-last">
              <p>
                <img
                  src={nyLogo}
                  className="pulse"
                  width={"100px"}
                  alt="N Y Leasing"
                />
              </p>
              <p className="mt-5">
                <b>N Y Leasing</b>
              </p>
              <p
                className="mt-2 visit-web"
                onClick={() => {
                  window.open(`https://nyleasing.in/`, `_blank`);
                }}
              >
                Visit website <ArrowForwardIcon />
              </p>
            </div>
          </Grid>
        </Grid>
      </Container>
      <FooterComp />
    </>
  );
};

export default LendingPartners;
