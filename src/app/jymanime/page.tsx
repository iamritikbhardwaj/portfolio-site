"use client";
import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

function GolfAni() {
  gsap.registerPlugin(ScrollTrigger);
  const navRef = useRef(null);
  const mainRef = useRef(null);
  const aboutRef1 = useRef(null);
  const aboutRef2 = useRef(null);
  const aboutRef3 = useRef(null);

  interface style {
    card: string;
    cardh4: string;
    overlay: string;
    nav: string;
    scrollerTags: string;
  }

  const styles: style = {
    card: "bg-green-400 h-[80%] w-[24%] rounded-lg bg-cover bg-center relative z-20 card",
    cardh4:
      "font-black text-2xl text-left text-black uppercase mb-4 whitespace-nowrap",
    overlay:
      "bg-[#95C11E] h-full w-full items-center pt-[80px] p-5 rounded-lg opacity-0 transform scale-100 transition-all duration-700 ease-in-out overlay ",
    nav: "flex z-99 fixed px-36 items-center justify-start w-full h-36 gap-10",
    scrollerTags:
      "uppercase inline-block mr-2.5 hover:text-[#95C11E] z-20 relative",
  };

  useEffect(() => {
    if (navRef.current) {
      gsap.to(navRef.current, {
        backgroundColor: "#000",
        height: "110px",
        duration: 0.5,
        scrollTrigger: {
          trigger: navRef.current,
          scroller: "body",
          // markers: true,
          start: "top -10%",
          end: "top -11%",
          scrub: true,
        },
      });
    }

    if (mainRef.current) {
      gsap.set(mainRef.current, { clearProps: "backgroundColor" });

      gsap.to(mainRef.current, {
        backgroundColor: "#000",
        duration: 0.5,
        opacity: 1,
        scrollTrigger: {
          trigger: mainRef.current,
          scroller: "body",
          // markers: true,
          start: "top -25%",
          end: "top -70%",
          scrub: 2,
        },
      });
    }

    if (aboutRef1.current) {
      gsap.to(aboutRef1.current, {
        y: 30,
        duration: 1,
        opacity: 1,
        scrollTrigger: {
          trigger: aboutRef1.current,
          scroller: "body",
          // markers: true,
          end: "top 60%",
          start: "top 70%",
        },
      });
    }
    if (aboutRef2.current) {
      gsap.to(aboutRef2.current, {
        y: 30,
        duration: 0.8,
        opacity: 1,
        scrollTrigger: {
          trigger: aboutRef2.current,
          scroller: "body",
          // markers: true,
          end: "top 60%",
          start: "top 70%",
        },
      });
    }
    if (aboutRef3.current) {
      gsap.to(aboutRef3.current, {
        y:30,
        duration: 0.6,
        opacity: 1,
        scrollTrigger: {
          trigger: aboutRef3.current,
          scroller: "body",
          // markers: true,
          end: "top 60%",
          start: "top 70%",
        },
      });
    }
    

    const cursor: any = document.getElementById("cursor");
    const blur: any = document.getElementById("cursor-blur");
    document.addEventListener("mousemove", (dets) => {
      cursor.style.left = dets.x + "px";
      cursor.style.top = dets.y + "px";
      blur.style.left = dets.x - 77 + "px";
      blur.style.top = dets.y - 77 + "px";
    });

    document.querySelectorAll("#nav h4").forEach((item) => {
      item.addEventListener("mouseenter", () => {
        cursor.style.scale = 3;
        cursor.style.border = "1px solid #fff";
        cursor.style.backgroundColor = "transparent";
      });
      item.addEventListener("mouseleave", () => {
        cursor.style.scale = 1;
        cursor.style.border = "none";
        cursor.style.backgroundColor = "#93b33c";
      });
    });
  }, []);

  return (
    <div className="text-white w-full h-fit">
      <div id="nav" ref={navRef} className={`${styles.nav}`}>
        <img
          className="h-20"
          src="https://eiwgew27fhz.exactdn.com/wp-content/uploads/2023/02/logo-white.svg"
          alt="background"
        />
        <h4 className="uppercase">TOPTRACER RANGE</h4>
        <h4 className="uppercase">Golf lessons</h4>
        <h4 className="uppercase">Adventure Golf</h4>
        <h4 className="uppercase">Coffe Shop</h4>
        <h4 className="uppercase">leagues</h4>
      </div>
      <div
        id="cursor"
        className="w-4 h-4 bg-[#93b33c] rounded-full fixed z-99"
      ></div>
      <div
        id="cursor-blur"
        className="w-50 h-50 bg-[#c9db97] rounded-full z-[9] blur-2xl fixed"
      ></div>
      <video
        autoPlay
        muted
        loop
        className="w-full h-screen object-cover fixed z-[-1]"
      >
        <source
          src="https://videos.pexels.com/video-files/854337/854337-sd_640_360_30fps.mp4"
          type="video/mp4"
        />
      </video>
      <div
        id="main"
        ref={mainRef}
        className="opacity-72 relative overflow-x-hidden z-10"
      >
        <div
          id="page1"
          className="min-h-screen text-center w-full flex flex-col justify-center items-center"
        >
          <h1
            style={{ margin: "10px 0px 20px 0px" }}
            className="text-7xl font-bold before:content-['EAT. DRINK. PLAY'] relative z-10"
          >
            EAT. DRINK. PLAY
          </h1>
          <h2 style={{ margin: "0px 0px 10px 0px" }} className="text-xl mt-2.5">
            WELCOME TO JYMANIME
          </h2>
          <p className="text-left text-white text-lg max-w-[400px] font-bold">
            Dive into a world where flavor meets fun! Whether you're here to
            grab a bite, sip something smooth, or challenge your friends to a
            game, JYMANIME is your go-to spot for good times. Come hungry, stay
            playful.
          </p>
        </div>
        <div id="page2" className="min-h-screen">
          <div className="whitespace-nowrap text-9xl font-extrabold text-stroke relative z-10">
            <div className="whitespace-nowrap inline-block">
              <h4 className="uppercase inline-block mr-2.5 hover:text-[#95C11E] transition-all duration-500">
                Top Racer Range{" "}
              </h4>
              <h4 className={`${styles.scrollerTags}`}>Golf lessons</h4>
              <h4 className={`${styles.scrollerTags}`}>Adventure Golf</h4>
              <h4 className={`${styles.scrollerTags}`}>Coffe Shop</h4>
              <h4 className={`${styles.scrollerTags}`}>leagues</h4>
            </div>
            <div className="whitespace-nowrap inline-block">
              <h4 className={`${styles.scrollerTags}`}>TOPTRACER RANGE</h4>
              <h4 className={`${styles.scrollerTags}`}>Golf lessons</h4>
              <h4 className={`${styles.scrollerTags}`}>Adventure Golf</h4>
              <h4 className={`${styles.scrollerTags}`}>Coffe Shop</h4>
              <h4 className={`${styles.scrollerTags}`}>leagues</h4>
            </div>
          </div>
          <div
            id="about-us"
            className="h-[40vh] items-center w-screen flex justify-around z-10 relative"
          >
            <img
              ref={aboutRef1}
              src="https://images.pexels.com/photos/8153618/pexels-photo-8153618.jpeg"
              className="md:w-50 md:h-60 w-30 h-40 object-cover rounded-2xl"
              alt="sample"
            />
            <div
              ref={aboutRef2}
              id="about-us-in"
              className="w-1/2 text-center items-center font-stretch-95%"
            >
              <h4
                style={{ margin: "0px 0px 30px 0px" }}
                className="font-bold text-4xl text-center"
              >
                Lorem ipsum dolor.
              </h4>
              <p className="text-left text-black text-xs">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ipsam
                ipsa vitae velit odit nam hic, vel sint nulla dolore nihil eum
                voluptates blanditiis voluptatem saepe dolorem incidunt id
                debitis sapiente possimus nemo commodi necessitatibus.
              </p>
            </div>
            <img
              ref={aboutRef3}
              src="https://images.pexels.com/photos/8153618/pexels-photo-8153618.jpeg"
              className="md:w-50 md:h-60 w-30 h-40 object-cover rounded-2xl"
              alt="sample"
            />
          </div>
          <div className=" w-screen h-[60vh] justify-center items-center gap-16 flex">
            <div id="card1" className={`${styles.card}`}>
              <div className={`${styles.overlay}`}>
                <h4 className={`${styles.cardh4}`}>Adventure Golf.</h4>
                <p className="text-left text-black text-xs">
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                  Ipsam ipsa vitae velit odit nam hic, vel sint nulla dolore
                  nihil eum voluptates blanditiis voluptatem saepe dolorem
                  incidunt id debitis sapiente possimus nemo commodi
                  necessitatibus.
                </p>
              </div>
            </div>
            <div id="card2" className={`${styles.card}`}>
              <div className={`${styles.overlay}`}>
                <h4 className={`${styles.cardh4}`}>Top RacerRange.</h4>
                <p className="text-left text-black text-xs">
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                  Ipsam ipsa vitae velit odit nam hic, vel sint nulla dolore
                  nihil eum voluptates blanditiis voluptatem saepe dolorem
                  incidunt id debitis sapiente possimus nemo commodi
                  necessitatibus.
                </p>
              </div>
            </div>
            <div id="card3" className={`${styles.card}`}>
              <div className={`${styles.overlay}`}>
                <h4 className={`${styles.cardh4}`}>Golf Lessons.</h4>
                <p className="text-left text-black text-xs">
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                  Ipsam ipsa vitae velit odit nam hic, vel sint nulla dolore
                  nihil eum voluptates blanditiis voluptatem saepe dolorem
                  incidunt id debitis sapiente possimus nemo commodi
                  necessitatibus.
                </p>
              </div>
            </div>
          </div>
          <div
            id="green-div"
            className="bg-gradient-to-br from-[#95C11E] to-[#c1dd97] h-[30vh] flex justify-between items-center"
          >
            <img
              className="h-full w-1/14"
              src="https://eiwgew27fhz.exactdn.com/wp-content/themes/puttosaurus/img/dots-side.svg"
              alt=""
            />
            <h4 className="text-black text-2xl font-black px-40 text-center">
              SIGN UP FOR SIDCUP NEWS AND SPECIAL OFFERS STRAIGHT TO YOUR INBOX
            </h4>
            <img
              className="h-full w-1/14"
              src="https://eiwgew27fhz.exactdn.com/wp-content/themes/puttosaurus/img/dots-side.svg"
              alt=""
            />
          </div>
        </div>
        <div
          id="page3"
          className="min-h-screen flex items-center justify-center p-10 relative"
        >
          <img
            id="colon1"
            className="h-8 mx-2 top-50 absolute left-40"
            src="https://eiwgew27fhz.exactdn.com/wp-content/themes/puttosaurus/img/quote-left.svg"
            alt=""
          />
          <p className="text-center text-3xl font-bold w-[70%] uppercase">
            Excellent couple of hours, relax and enjoy in the fun. Staff were
            accommodating, friendly and very helpful. Café on site for
            refreshments etc. Will keep children enterntained during the
            holidays. Worth a visit if you haven’t been.
          </p>
          <img
            id="colon2"
            className="h-8 mx-2 absolute bottom-50 right-40"
            src="https://eiwgew27fhz.exactdn.com/wp-content/themes/puttosaurus/img/quote-right.svg"
            alt=""
          />
        </div>
      </div>
    </div>
  );
}

export default GolfAni;
