import React from "react";
import Slider from "react-slick";

import "../../styles/testimonial.css";

import ava01 from "../../assets/all-images/ava-1.jpg";
import ava02 from "../../assets/all-images/ava-2.jpg";
import ava03 from "../../assets/all-images/ava-3.jpg";
import ava04 from "../../assets/all-images/ava-4.jpg";
import ava05 from "../../assets/all-images/ava-5.jpg";

const coustomer = [
  {
    img: ava01,
    name: "Tony Stack",
    title: "Customer",
    post: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus magni explicabo molestias recusandae repudiandae, dolor, sapiente placeatab, animi eum minima nulla facere aliquam aut vitae quo pariatur voluptate odit.",
  },
  {
    img: ava02,
    name: "Mosraful",
    title: "Customer",
    post: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus magni explicabo molestias recusandae repudiandae, dolor, sapiente placeatab, animi eum minima nulla facere aliquam aut vitae quo pariatur voluptate odit.",
  },
  {
    img: ava03,
    name: "Bruce Banner",
    title: "Customer",
    post: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus magni explicabo molestias recusandae repudiandae, dolor, sapiente placeatab, animi eum minima nulla facere aliquam aut vitae quo pariatur voluptate odit.",
  },
  {
    img: ava04,
    name: "Peter Parker",
    title: "Customer",
    post: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus magni explicabo molestias recusandae repudiandae, dolor, sapiente placeatab, animi eum minima nulla facere aliquam aut vitae quo pariatur voluptate odit.",
  },
  {
    img: ava05,
    name: "Habib",
    title: "Customer",
    post: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus magni explicabo molestias recusandae repudiandae, dolor, sapiente placeatab, animi eum minima nulla facere aliquam aut vitae quo pariatur voluptate odit.",
  },
];

const Testimonial = () => {
  const settings = {
    dots: true,
    infinite: true,
    autoplay: true,
    speed: 1000,
    swipeToSlide: true,
    autoplaySpeed: 2000,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 576,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className="sliderSection">
      <Slider {...settings}>
        {coustomer.map((user, index) => (
          <div className="testimonial py-4 px-3" key={index}>
            <p className="section__description">{user.post}</p>

            <div className="mt-3 d-flex align-items-center gap-4">
              <img src={user.img} alt="" className="w-25 h-25 rounded-2" />

              <div>
                <h6 className="mb-0 mt-3">{user.name}</h6>
                <p className="section__description">{user.title}</p>
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default Testimonial;
