import React from "react";
import "../../styles/our-member.css";
import { Col } from "reactstrap";
import { Link } from "react-router-dom";

const OUR__MEMBERS = [
  {
    name: "Vedant Gokhale",
    experience: "5 years of experience",
    fbUrl: "#",
    instUrl: "#",
    twitUrl: "#",
    linkedinUrl: "#",
    imgUrl: "https://media-exp1.licdn.com/dms/image/D4D03AQE3jFwwokKGpQ/profile-displayphoto-shrink_400_400/0/1664902127537?e=1670457600&v=beta&t=Z1DvJKf-A2EHLcPVuKIl_-wbTJv2xIlkEFcKTOSkyxQ",
  },
  

  {
    name: "Rohan Sasne",
    experience: "1 years of experience",
    fbUrl: "#",
    instUrl: "#",
    twitUrl: "#",
    linkedinUrl: "#",
    imgUrl: "https://media-exp1.licdn.com/dms/image/C4D03AQHFFDcx7iilWw/profile-displayphoto-shrink_800_800/0/1656781446535?e=1670457600&v=beta&t=zfZBlgdl0gS3iD0-gWRaR8Lpxlg81uRTrcrapaGfR3U",
  },

  {
    name: "Ojas Ketkar",
    experience: "1 years of experience",
    fbUrl: "#",
    instUrl: "#",
    twitUrl: "#",
    linkedinUrl: "#",
    imgUrl: "https://media-exp1.licdn.com/dms/image/C4E03AQG0DnTvlAJ_sQ/profile-displayphoto-shrink_400_400/0/1642062496300?e=1670457600&v=beta&t=nks9ixPxzbf-1BJTXbME53th1NYXkstfTsy2QtGSz7M",
  },

  {
    name: "Mayuresh Kaulwar",
    experience: "1 years of experience",
    fbUrl: "#",
    instUrl: "#",
    twitUrl: "#",
    linkedinUrl: "#",
    imgUrl: "https://media-exp1.licdn.com/dms/image/C5603AQHYoZFoe4ZKgw/profile-displayphoto-shrink_400_400/0/1654781786969?e=1670457600&v=beta&t=HoghKpMb6HUmI_5u4cscinRDvOFUXtbRy68MAeYB4nI",
  },
];

const OurMembers = () => {
  return (
    <>
      {OUR__MEMBERS.map((item, index) => (
        <Col lg="3" md="3" sm="4" xs="6" key={index} className="mb-4 ">
          <div className="single__member">
            <div className="single__member-img">
              <img src={item.imgUrl} alt="" className="w-100" />

              <div className="single__member-social">
                <Link to={item.fbUrl}>
                  <i class="ri-facebook-line"></i>
                </Link>
                <Link to={item.twitUrl}>
                  <i class="ri-twitter-line"></i>
                </Link>

                <Link to={item.linkedinUrl}>
                  <i class="ri-linkedin-line"></i>
                </Link>

                <Link to={item.instUrl}>
                  <i class="ri-instagram-line"></i>
                </Link>
              </div>
            </div>

            <h6 className="text-center mb-0 mt-3">{item.name}</h6>
            <p className="section__description text-center">
              {item.experience}
            </p>
          </div>
        </Col>
      ))}
    </>
  );
};

export default OurMembers;
