"use client";

import { motion, useAnimation } from "framer-motion";
import React, { useEffect } from "react";
import Slider from "./Slider";
import Sponsors from "./Sponsors";
const ScrollAnimationCode: React.FC = () => {
  const textControls = useAnimation();
  const sliderControls = useAnimation();
  const handleSliderAnimationComplete = () => {
    textControls.start({ opacity: 1, x: 30, y: 100 }); //determines final  positionn of text after completion of animation
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      sliderControls.start({ opacity: 1, x: 200 });
    }, 0);

    return () => clearTimeout(timer);
  });
  const controls = useAnimation();
  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY; //determines how much the user has scrolled
      const windowHeight = window.innerHeight; //determines the height of the  device the user is using
      window.addEventListener("scroll", function () {
        var scrollPosition = window.scrollY;
        if (scrollPosition > windowHeight / 1.3) {
          const element = document.getElementById("myElement"); // gets the circle on top of the slider

          if (element) {
            setTimeout(() => {
              element.classList.add("shadow-magenta"); // Glow adder for slider
            }, 0); // adds delay to the glow so that the glow starts after animation is complete
          }
        } else {
          const element = document.getElementById("myElement"); // gets the circle on top of the slider

          if (element) {
            element.classList.remove("shadow-magenta"); // Glow remover for slider
          }
        }
      });
      if (scrollPosition > windowHeight / .2) {
        controls.start({ opacity: 1, y: 70, x: 0 }); //Final position for slider
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  });

  return (
    <div className="w-screen flex pl-4 md:pl-[50px] lg:pl-[80px] xl:pl-[90px] 2xl:pl-[130px] pb-[100px] ">
      <motion.div
        className="justify-centre flex"
        initial={{ opacity: 0, y: 200 }} //before scrolling position of slider
        animate={controls} //refer to line 20
        transition={{ duration: 1 }} //slider duration for popping up. if you are changinng duration then make sure to change delay of glow adder so thatt  the gow starts after animation is complete
        onAnimationComplete={handleSliderAnimationComplete}
      >
        <Slider />

      </motion.div>
      {/* Completed slider animation */}
      <div
        className="flex overflow-hidden"

      >
        <Sponsors />
      </div>
      {/* Text animation(can be changed)*/}

    </div>
  );
};

export default ScrollAnimationCode;
