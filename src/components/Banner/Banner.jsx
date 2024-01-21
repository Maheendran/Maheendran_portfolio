import React, { useEffect, useState } from "react";
import "./Banner.css";
import ScrollToTop from "react-scroll-to-top";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
const Banner = () => {
  const headingleftFence = useAnimation();
  const headingrightFence = useAnimation();
  const headingWalkMan = useAnimation();
  const headingCalloutOne = useAnimation();
  const { ref, inView } = useInView({
    threshold: 0.1,
  });
  const [state, setState] = useState(true);

  useEffect(() => {
    setState(true);
    if (inView) {
      headingleftFence.start({
        x: "0rem",
        transition: {
          type: "spring",
          duration: 2,
          bounce: 0.3,
        },
      });
    }
    if (!inView) {
      headingleftFence.start({ x: "-40vw" });
    }
    // ===================
    if (inView) {
      headingrightFence.start({
        x: "0rem",
        transition: {
          type: "spring",
          duration: 2,
          bounce: 0.3,
        },
      });
    }
    if (!inView) {
      headingrightFence.start({ x: "40vw" });
    }

    // =============================
    if (inView) {
      headingWalkMan.start({
        y: "0vh",
        transition: {
          type: "spring",
          duration: 4,
          bounce: 0.2,
        },
      });
    }
    if (!inView) {
      headingWalkMan.start({ y: "50rem" });
    }
    // ===========================

    if (inView) {
      headingCalloutOne.start({
        y: "0vh",
        scale: 1,
        transition: {
          type: "spring",
          duration: 7,
          bounce: 0.4,
        },
      });
    }
    if (!inView) {
      headingCalloutOne.start({ y: "-50rem", scale: 0 });
    }
  }, [inView]);

  useEffect(() => {
    const timer = setInterval(() => {
      setState((prevState) => !prevState);
    }, 5000);

    // Clean up the interval on component unmount
    return () => clearInterval(timer);
  }, []);

  return (
    <>
      {/* <div className="parent_div">
        <div className="dummy" id="home"></div>

        <ScrollToTop
          className="scrolltop"
          smooth="true"
          style={{
            height: "40px",
            width: "40px",
            backgroundColor: "white",
            borderRadius: "50%",
            boxShadow:
              " rgba(0, 0, 0, 0.4) 0px 2px 4px, rgba(0, 0, 0, 0.3) 0px 7px 13px -3px, rgba(0, 0, 0, 0.2) 0px -3px 0px inset",
          }}
        />

        <div className="banner_main" ref={ref}>





          <div className="row text-center ">
            <div className="col-12 col-lg-6  m-auto  text-center">
              <motion.div animate={headinganimation}>
                <div className="left-home-container ">
                  <span>
                    <h2>
                     
                      <span style={{ color: "orange" }}> Hello,</span> my name
                      is
                    </h2>
                  </span>
                  <span>
                    <h1>Maheendran kp</h1>
                  </span>
                  <span>
                    <div className="wrapper">
                      <div className="static-txt">I'm a</div>
                      <ul className="dynamic-txt">
                        <li>
                          {" "}
                          <span>FrontEnd Developer</span>
                        </li>
                      </ul>
                    </div>
                  </span>
                  <br />

                  <span className="resume_btn">
                    <a href="./assets/cv.pdf" download={"./assets/cv.pdf"}>
                      <button>RESUME</button>
                    </a>
                  </span>
                </div>
              </motion.div>
            </div>


            <div className="col-12 col-lg-3  m-auto right_main_container">
              
              <div className="right_side_profile">
         
                <img
                  id="profile_images"
                  className="img-fluid mahi_profile"
                  src="./assets/walkdog.gif"
                  alt=""
                />

               
              </div>
            </div>
          </div>



        </div>

        <div className="register_main ">
        <div className="bottom_chooseprofile_shadow">
          <div className="fence">
            <img
              src="https://th.bing.com/th/id/R.4c6ac6e965c8b02bbb531ec5c2a39770?rik=1mSJ%2boHEdh86eQ&riu=http%3a%2f%2fgetdrawings.com%2fvectors%2fvector-picket-fence-19.png&ehk=FZQ1ttzhi5Zxfir102MGQ8aTZyUKXPcKmqQVXzGGHsc%3d&risl=&pid=ImgRaw&r=0"
              alt=""
            />
          </div>
          <div className="fence_right">
            <img
              src="https://th.bing.com/th/id/R.4c6ac6e965c8b02bbb531ec5c2a39770?rik=1mSJ%2boHEdh86eQ&riu=http%3a%2f%2fgetdrawings.com%2fvectors%2fvector-picket-fence-19.png&ehk=FZQ1ttzhi5Zxfir102MGQ8aTZyUKXPcKmqQVXzGGHsc%3d&risl=&pid=ImgRaw&r=0"
              alt=""
            />
          </div>

          <div className="walkdog">
            <img     src="./assets/walkdog.gif" alt="" />
          </div>
        </div>

       
      </div>

      </div> */}

      <div className="parent_div" ref={ref}>
        <div className="sky_hero" id="home">
          <img
            src="https://images.vexels.com/media/users/3/154361/isolated/preview/6bf121fce45b68cb13657b95c6bebaea-cloudy-sky-illustration.png"
            alt=""
          />
        </div>

        <div className="bottom_chooseprofile_shadow">
          <div className="grass_ground">
            <img
              style={{ width: "100%", height: "100%" }}
              src="./assets/R (4).png"
              alt=""
            />
            <img
              style={{ width: "100%", height: "100%" }}
              src="./assets/R (4).png"
              alt=""
            />

            <img
              style={{ width: "100%", height: "100%" }}
              src="./assets/R (4).png"
              alt=""
            />

            <img
              style={{ width: "100%", height: "100%" }}
              src="./assets/R (4).png"
              alt=""
            />

            <img
              style={{ width: "100%", height: "100%" }}
              src="./assets/R (4).png"
              alt=""
            />
          </div>

          <motion.div animate={headingleftFence} className="fence">
            <img src="./assets/fence.png" alt="" />
          </motion.div>

          <motion.div animate={headingrightFence} className="fence_right">
            <img src="./assets/fence.png" alt="" />
          </motion.div>

          <motion.div animate={headingWalkMan} className="walkdog">
            <img src="./assets/walkdog.gif" alt="" />
          </motion.div>
        </div>
        {state ? (
          <motion.div animate={headingCalloutOne} className="callout_box">
            <div class="bubble">
              <p>
                {" "}
                Hello guys ,
                <br />
                Im Maheendran{" "}
              </p>
            </div>
          </motion.div>
        ) : (
          <motion.div animate={headingCalloutOne} className="callout_Two">
            <div class="bubbleTwo">
              <p>
                {" "}
                Im a Full stack developer <br />
                to more known about me <br /> just scroll down
              </p>
            </div>
          </motion.div>
        )}
      </div>
    </>
  );
};

export default Banner;
