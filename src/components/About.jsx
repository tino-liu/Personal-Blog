import React, { useState } from "react";
import Modal from "react-modal";
import Brand from "./Brand";

Modal.setAppElement("#root");

const About = () => {
  const [isOpen, setIsOpen] = useState(false);

  function toggleModal() {
    setIsOpen(!isOpen);
  }

  return (
    <>
      <div className="tokyo_tm_about">
        <div className="about_image ">
          <img className="about_image_resize" src="assets/img/slider/sea.jpg" alt="about" />
        </div>
        {/* <div className="o-video">
          <iframe src="youtube link"></iframe>
        </div> */}
        {/* END ABOUT IMAGE */}
        <div className="description">
          <h3 className="name">Tino Liu</h3>
          <div className="description_inner">
            <div className="left">
              <p>
                Hello, My name is Tino and I am a web developer with 2+ years of work experience.
                I'm always excited and motivated to connect, create, and learn.
                So let's connect and build friendship and value together.
              </p>
              <div className="tokyo_tm_button">
                <button onClick={toggleModal} className="ib-button">
                  Read More
                </button>
              </div>
              {/* END TOKYO BUTTON */}
            </div>
            {/* END LEFT */}
            <div className="right">
              <ul>
                <li>
                  <p>
                    <span>Email:</span>
                    <a href="mailto:justinoliu.work@gmail.com">justinoliu.work@gmail.com</a>
                  </p>
                </li>
                <li>
                  <p>
                    <span>Phone:</span>
                    <a href="tel:+8618062199418">+86 18062199418</a>
                  </p>
                </li>
                <li>
                  <p>
                    <span>Study:</span>Lipscomb University
                  </p>
                </li>
                <li>
                  <p>
                    <span>Freelance:</span>Available
                  </p>
                </li>
              </ul>
              {/* END UL */}
            </div>
            {/* END RIGHT */}
          </div>
          {/* END DESCRIPTION INNER */}
        </div>
      </div>

      {/* START ABOUT POPUP BOX */}
      <Modal
        isOpen={isOpen}
        onRequestClose={toggleModal}
        contentLabel="My dialog"
        className="mymodal"
        overlayClassName="myoverlay"
        closeTimeoutMS={500}
      >
        <div className="tokyo_tm_modalbox_about">
          <button className="close-modal" onClick={toggleModal}>
            <img src="assets/img/svg/cancel.svg" alt="close icon" />
          </button>
          {/* END POPUP CLOSE BUTTON */}
          <div className="box-inner">
            <div
              className="description_wrap scrollable"
              data-aos="fade-right"
              data-aos-duration="1200"
            >
              <div className="my_box">
                <div className="left">
                  <div className="about_title">
                    <h3>Development Skills</h3>
                  </div>
                  {/* END ABOUT TITLE */}

                  <div className="tokyo_progress">
                    <div className="progress_inner" data-value="95">
                      <span>
                        <span className="label">Next.js</span>
                        <span className="number">95%</span>
                      </span>
                      <div className="background">
                        <div className="bar">
                          <div
                            className="bar_in"
                            style={{ width: 95 + "%" }}
                          ></div>
                        </div>
                      </div>
                    </div>

                    <div className="progress_inner" data-value="95">
                      <span>
                        <span className="label">React</span>
                        <span className="number">95%</span>
                      </span>
                      <div className="background">
                        <div className="bar">
                          <div
                            className="bar_in"
                            style={{ width: 95 + "%" }}
                          ></div>
                        </div>
                      </div>
                    </div>

                    <div className="progress_inner" data-value="95">
                      <span>
                        <span className="label">Angular</span>
                        <span className="number">95%</span>
                      </span>
                      <div className="background">
                        <div className="bar">
                          <div
                            className="bar_in"
                            style={{ width: 95 + "%" }}
                          ></div>
                        </div>
                      </div>
                    </div>

                    <div className="progress_inner" data-value="90">
                      <span>
                        <span className="label">Tailwind CSS</span>
                        <span className="number">90%</span>
                      </span>
                      <div className="background">
                        <div className="bar">
                          <div
                            className="bar_in"
                            style={{ width: 90 + "%" }}
                          ></div>
                        </div>
                      </div>
                    </div>
                  </div>
                  {/* END PROGRESS */}
                </div>
                {/* END LEFT */}

                <div className="right">
                  <div className="about_title">
                    <h3>Language Skills</h3>
                  </div>
                  {/* END TITLE */}
                  <div className="tokyo_progress">
                    <div className="progress_inner" data-value="95">
                      <span>
                        <span className="label">English</span>
                        <span className="number">95%</span>
                      </span>
                      <div className="background">
                        <div className="bar">
                          <div
                            className="bar_in"
                            style={{ width: 95 + "%" }}
                          ></div>
                        </div>
                      </div>
                    </div>

                    <div className="progress_inner" data-value="90">
                      <span>
                        <span className="label">Chinese</span>
                        <span className="number">90%</span>
                      </span>
                      <div className="background">
                        <div className="bar">
                          <div
                            className="bar_in"
                            style={{ width: 90 + "%" }}
                          ></div>
                        </div>
                      </div>
                    </div>
                  </div>
                  {/* EDN TOKYO PROGRESS */}
                </div>
                {/* END RIGHT */}
              </div>
              {/* END MYBOX */}

              <div>
                <div className="about_title">
                  <h3 className="">Experiences</h3>
                  <h6 className="label">Ernst & Young</h6>
                  <p>Nashville, TN, USA</p>
                  <p className="label">February, 2019 - November, 2020</p>
                </div>
                <h6>Project 1:</h6>
                <p>Developed EY's internal data integration web application for collecting bulk data and client feedback across client groups.</p>
                <h6>Responsibility: Front-end Developer & Business Analyst</h6>
                <ul>
                  <li>Collaborated with architects, business analyst, and stake holder to perform
                    cost-benefit analysis of in-house development vs. procurement of third-party tools</li>
                  <li>Collaborated on all stages of system development lifecycle.</li>
                  <li>Implemented UI/UX expert’s design with Angular8 framework.</li>
                  <li>Practiced test-driven development with Jasmine.</li>
                  <li>Integrated API endpoints in front-end application.</li>
                </ul>
                <h6>Project 2:</h6>
                <p>Developed EY’s Severance Tax web application. Successfully transformed complex severance tax calculation and simplified data collection.</p>
                <h6>Responsibility: Full-stack Developer & Pod Leader</h6>
                <ul>
                  <li>Learn the extraction process and tax calculations with a senior developer from oil extraction tax expert</li>
                  <li>Developed components of REST API with .NET 3.1</li>
                  <li>Designed and integrated front-end and API endpoints with Angular9 framework.</li>
                  <li>Configured YAML CI/CD pipeline on Azure DevOps.</li>
                  <li>Collaborated and led a pod of developers from Colombia and successfully completed story points.</li>
                </ul>
              </div>

              {/* <div className="counter">
                <div className="about_title">
                  <h3>Fun Facts</h3>
                </div>
                <ul>
                  <li>
                    <div className="list_inner">
                      <h3>777+</h3>
                      <span>Projects Completed</span>
                    </div>
                  </li>
                  <li>
                    <div className="list_inner">
                      <h3>3K</h3>
                      <span>Happy Clients</span>
                    </div>
                  </li>
                  <li>
                    <div className="list_inner">
                      <h3>9K+</h3>
                      <span>Lines of Code</span>
                    </div>
                  </li>
                </ul>
              </div> */}

            </div>
          </div>
        </div>
      </Modal>
    </>
  );
};

export default About;
