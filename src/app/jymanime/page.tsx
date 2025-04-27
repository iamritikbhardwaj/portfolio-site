"use client";
import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

function GolfAni() {
  gsap.registerPlugin(ScrollTrigger);
  const navRef = useRef(null);
  const mainRef = useRef(null);

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

    const cursor: any = document.getElementById("cursor");
    const blur: any = document.getElementById("cursor-blur");
    document.addEventListener("mousemove", (dets) => {
      console.log(dets.x, dets.y);
      cursor.style.left = dets.x + "px";
      cursor.style.top = dets.y + "px";
      blur.style.left = dets.x - 77 + "px";
      blur.style.top = dets.y - 77 + "px";
    });
  }, []);

  return (
    <div className="text-white w-full h-fit">
      <div
        id="nav"
        ref={navRef}
        style={{ paddingLeft: "145px", paddingRight: "145px", zIndex: "999" }}
        className="flex z-99 fixed px-36 items-center justify-start w-full h-36 gap-10"
      >
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
        className="w-40 h-40 bg-[#c9db97] rounded-full fixed z-99 blur-3xl"
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
      <div id="main" ref={mainRef} className="bg-black opacity-72 relative">
        <div
          id="page1"
          className="h-screen text-center w-full flex flex-col justify-center items-center"
        >
          <h1
            style={{ margin: "10px 0px 20px 0px" }}
            className="text-7xl font-bold before:content-['EAT. DRINK. PLAY'] relative"
          >
            EAT. DRINK. PLAY
          </h1>
          <h2 style={{ margin: "0px 0px 10px 0px" }} className="text-xl mt-2.5">
            WELCOME TO JYMANIME
          </h2>
          <p className="text-xs max-w-xl font-extralight">
            Dive into a world where flavor meets fun! Whether you're here to
            grab a bite, sip something smooth, or challenge your friends to a
            game, JYMANIME is your go-to spot for good times. Come hungry, stay
            playful.
          </p>
        </div>
        <div id="page2" className="h-screen w-full">
          <div
            id="scroller"
            className="whitespace-nowrap text-6xl text-transparent"
          >
            <div
              id="scroller-in"
              className="whitespace-nowrap inline-block hover:text-[#95C11E]"
            >
              <h4 className="uppercase inline-block">TOPTRACER RANGE</h4>
              <h4 className="uppercase font-extrabold inline-block">
                Golf lessons
              </h4>
              <h4 className="uppercase inline-block">Adventure Golf</h4>
              <h4 className="uppercase inline-block">Coffe Shop</h4>
              <h4 className="uppercase inline-block">leagues</h4>
            </div>
            <div id="scroller-in" className="whitespace-nowrap inline-block hover:text-[#95C11E]">
              <h4 className="uppercase inline-block hover:text-[#95C11E]">TOPTRACER RANGE</h4>
              <h4 className="uppercase inline-block">Golf lessons</h4>
              <h4 className="uppercase inline-block">Adventure Golf</h4>
              <h4 className="uppercase inline-block">Coffe Shop</h4>
              <h4 className="uppercase inline-block">leagues</h4>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default GolfAni;
