import React from "react";
import "./Work.css";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-cards";
import { project, reactdata, cssData,spline } from "./Projects";
import { BsFillCameraVideoFill, BsFillEyeFill, BsGithub } from "react-icons/bs";

const Work = () => {
  return (
    <>
      <div className="dummy" id="work"></div>
      <div className="work_main">
        <div className="row">
          <h1 className="mb-4 mt-2 text-center">
            My Creative Portfolio Section
          </h1>
          <p className="text-center 
           fw-bold text-danger projectText">30+ 
           <span className="projectTextTwo">
           Projects</span></p>
       
        </div>

        <div className="row m-auto card_row_main">
          <div className="col-12 ">
            <h4 className="text-center  m-3">React</h4>

            <Swiper
              draggable={true}
              slidesPerView={3}
              slidesPerColumn={3}
              spaceBetween={30}
              
              breakpoints={{
                0: {
                  slidesPerView: 1, 
                },
                650: {
                  slidesPerView: 3, 
                },
              }}
              className="mySwiper"
            >
              {reactdata.map((e) => (
                <SwiperSlide>
                  <img className="img-fluid" src={e.img} alt="" />

                  <div className="card_icons">
                    <h4 className="text-center">{e.name}</h4>
                    <p>{e.discription}</p>
                    <p>Tech :{e.tech}</p>
                    <div className="button_section">
                      <a href={e.linked}>
                        <button>
                          <BsFillCameraVideoFill size={"1.3rem"} />
                        </button>
                      </a>
                      <a href={e.fachebook}>
                        <button>
                          <BsFillEyeFill size={"1.3rem"} />
                        </button>
                      </a>
                      <a href={e.github}>
                        <button>
                          <BsGithub size={"1.3rem"} />
                        </button>
                      </a>
                    </div>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
          {/*  */}

          <div className="col-12 single_card">
            <h4 className="text-center  m-3">Javascript</h4>

            <Swiper
              draggable={true}
              slidesPerView={4}
              slidesPerColumn={3}
              spaceBetween={30}
              
              breakpoints={{
                0: {
                  slidesPerView: 1, 
                },
                650: {
                  slidesPerView: 4, 
                },
              }}
              className="mySwiper"
            >
              {project.map((e) => (
                <SwiperSlide>
                  <img className="img-fluid" src={e.img} alt="" />

                  <div className="card_icons">
                    <h4 className="text-center">{e.name}</h4>
                    <p>{e.discription}</p>
                    <div className="marquee_box">
                      <p>{e.tech}</p>
                    </div>
                    <div className="button_section">
                      <a href={e.linked}>
                        <button>
                          <BsFillCameraVideoFill size={"1.3rem"} />
                        </button>
                      </a>
                      <a href={e.fachebook}>
                        <button>
                          <BsFillEyeFill size={"1.3rem"} />
                        </button>
                      </a>
                      <a href={e.github}>
                        <button>
                          <BsGithub size={"1.3rem"} />
                        </button>
                      </a>
                    </div>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
          {/*  */}
          <div className="col-12 single_card">
            <h4 className="text-center m-3">CSS & Animation</h4>
            <Swiper
             draggable={true}
             slidesPerView={3}
             slidesPerColumn={3}
             spaceBetween={30}
             
             breakpoints={{
               0: {
                 slidesPerView: 1, 
               },
               650: {
                 slidesPerView: 5, 
               },
             }}
              className="mySwiper"
            >
              {cssData.map((e) => (
                <SwiperSlide>
                  <img className="img-fluid" src={e.img} alt="" />

                  <div className="card_icons">
                    <h4 className="text-center">{e.name}</h4>
                    <p>{e.discription}</p>
                
                      <p>{e.tech}</p>
                
                    <div className="button_section">
                      <a href={e.linked}>
                        <button>
                          <BsFillCameraVideoFill size={"1.3rem"} />
                        </button>
                      </a>
                      <a href={e.fachebook}>
                        <button>
                          <BsFillEyeFill size={"1.3rem"} />
                        </button>
                      </a>
                      <a href={e.github}>
                        <button>
                          <BsGithub size={"1.3rem"} />
                        </button>
                      </a>
                    </div>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
          {/*  */}
          <div className="col-12 single_card">
            <h4 className="text-center m-3">Gsap animations</h4>
            <Swiper
             draggable={true}
             slidesPerView={3}
             slidesPerColumn={3}
             spaceBetween={30}
        
             breakpoints={{
               0: {
                 slidesPerView: 1, 
               },
               650: {
                 slidesPerView: 5, 
               },
             }}
              className=""
            >
              {spline.map((e) => (
                <SwiperSlide>
                  <img className="img-fluid" src={e.img} alt="" />

                  <div className="card_icons">
                    <h4 className="text-center">{e.name}</h4>
                    <p>{e.discription}</p>
                
                      <p>{e.tech}</p>
                
                    <div className="button_section">
                      <a href={e.linked}>
                        <button>
                          <BsFillCameraVideoFill size={"1.3rem"} />
                        </button>
                      </a>
                      <a href={e.fachebook}>
                        <button>
                          <BsFillEyeFill size={"1.3rem"} />
                        </button>
                      </a>
                      <a href={e.github}>
                        <button>
                          <BsGithub size={"1.3rem"} />
                        </button>
                      </a>
                    </div>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
        {/*  */}
        
      </div>
    </>
  );
};
export default Work;
