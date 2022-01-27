import React from "react";
import Social from "./Social";

const Home = () => {
  return (
    <>
      <div className="tokyo_tm_home">
        <div className="home_content">
          <div className="avatar">
            <div
              className="image avatar_img"
              // style={{
              //   backgroundImage: "url(assets/img/slider/me.jpg)",
              // }}
            ></div>
          </div>
          <div className="details">
            <h3 className="name">Tino Liu</h3>
            <p className="job">
              Multitalented Software Developer with experience in web application development. True team player with strengths in adaptability and accuracy.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
