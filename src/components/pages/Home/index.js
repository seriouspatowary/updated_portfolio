import React, { Suspense } from "react";
import { Link } from "react-router-dom";
import dw from "./download/SIMANTA-RESUME-LATEST.pdf";
import Typewriter from "typewriter-effect";
import { motion } from "framer-motion";



const Home = () => {
  return (
    <>
      <motion.div
        className="  min-h-screen"
        initial={{ y: 1000 }}
        animate={{ y: [0, -100, 0] }}
        transition={{
          duration: 3,
          delay: 0.2,
        }}
        style={{ minHeight: 400 }}
      >
        <div className="grid py-14  px-4 mx-auto  mb-0 max-w-screen-xl lg:gap-8 xl:gap-0 lg:py-14 lg:grid-cols-12 ">
          <div className="place-self-center mr-auto lg:col-span-7">
            <h1 className="mb-4 max-w-2xl text-4xl font-extrabold leading-none md:text-5xl xl:text-6xl text-blue">
              Hi there!
            </h1>
            <div className="mb-6 max-w-2xl font-bold text-blue lg:mb-8 md:text-lg lg:text-xl">
              <Typewriter
                options={{
                  strings: [
                    "I am Simanta ",
                    "I am a Full Stack Developer",
                  ],
                  autoStart: true,
                  loop: true,
                }}
              />
            </div>

            <Link
              to={dw}
              target="_blank"
              className="inline-flex justify-center items-center py-3 px-5 text-base font-medium text-center bg-purple-800 text-white rounded-lg border border-gray-300 focus:ring-4 focus:ring-gray-100 dark:text-white dark:border-gray-700 dark:hover:bg-gray-700 dark:focus:ring-gray-800"
            >
              Download Resume
            </Link>
          </div>
          <div className="gap-6 mt-10 ">
            <Suspense fallback={<div>Loading...</div>}>
              <img
                className="mt-4 max-w-[300px] rounded-3xl lg:mt-10 float-left"
                src={require("./images/back.jpg")}
                alt=""
              />
            </Suspense>
          </div>
        </div>
      </motion.div>
      
      
     
    </>
  );
};

export default Home;
