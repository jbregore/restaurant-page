import React from "react";

import { SubHeading } from "../../components";
import { images } from "../../constants";
import "./Chef.css";

const Chef = () => (
  <div className="app__bg app__wrapper section__padding">
    {/* image */}
    <div className="app__wrapper_img app__wrapper_img-reverse">
      <img src={images.chef} alt="" />
    </div>

    {/* content */}
    <div className="app__wrapper_info">
      <SubHeading title="Chef's Word" />
      <h1 className="headtext__cormorant">What We Believe In</h1>

      {/* info */}
      <div className="app__chef-content">
        <div className="app__chef-content_quote">
          <img src={images.quote} alt="" />
          <p className="p__opensans">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Harum ex,
            sed eos voluptates explicabo dicta accusamus. 
          </p>
        </div>

        <p className="p__opensans" style={{color: "#AAA"}}>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Culpa
          explicabo aspernatur totam nesciunt. Impedit voluptatum rem quaerat
          magni quas repellendus.
        </p>
      </div>

      {/* chef sign */}
      <div className="app__chef-sign">
        <p className="" style={{fontSize: 24}}>Kevin Luo</p>
        <p className="p__opensans">Chef & Founder</p>
        <img src={images.sign} alt="" />
      </div>
    </div>
  </div>
);

export default Chef;
