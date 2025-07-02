"use client";
import Link from "next/link";
import Slider from "react-slick";

const Team = () => {
  const teamSlider = {
    dots: false,
    arrows: false,
    infinite: true,
    speed: 8000, 
    autoplay: true,
    autoplaySpeed: 0,  
    cssEase: "linear",  
    slidesToShow: 4,
    slidesToScroll: 1,
    pauseOnHover: false,
    swipe: false,
    draggable: false,
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 576,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  const teamMembers = [
    "member1.jpg",
    "member2.jpg",
    "member3.jpg",
    "member4.jpg",
    "member5.jpg",
    "member6.jpg",
    
  ];

  return (
    <Slider {...teamSlider} className="team-slider continuous-slider">
      {teamMembers.map((img, i) => (
        <div key={i} className="team-item style-two">
          <div className="image">
            <img
              src={`assets/images/team/${img}`}
              alt="Team Member"
              className="w-full h-auto object-cover new-slider-images"
            />
          </div>
        </div>
      ))}
    </Slider>
  );
};

export default Team;
