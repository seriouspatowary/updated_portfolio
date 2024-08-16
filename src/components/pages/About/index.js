import React from "react";

import cc from "./cloud.jpeg";
import geek from "./geek.png"

import { Link } from "react-router-dom";

const About = () => {
  return (
    <>
      <h1 className="text-3xl font-bold text-center mt-10 my-19 mb-10 md:mb-6 ">
        Work Experience
      </h1>
      <div className="container my-24 px-6 mx-auto">
        <section className="mb-32 text-gray-800">
          <div          
            className="flex flex-wrap mb-6  p-4 rounded-lg"
          >
            <div className="grow-0 shrink-0 basis-auto w-2/12">
              <img
                className="w-full shadow-2xl rounded-lg"
                src={cc}
                alt="Cloud Civil"
              />
            </div>
            <div className="grow-0 shrink-0 basis-auto w-10/12 pl-4 md:pl-6">
              <p className="font-bold mb-3">Cloud Civil Technologies</p>
              <p className="mb-3 font-bold">01/07/2023 to 31/06/2024</p>
              <p className="mb-2">
            
              I worked as a Software Developer at Cloud Civil Technologies from July 2023 to June 2024. During this time, I specialized in developing and maintaining web applications using React and Next.js. I also built RESTful APIs with Express and Node.js, integrating with both MongoDB and PostgreSQL databases. Additionally, I managed and deployed applications on AWS, ensuring scalability and performance while collaborating closely with cross-functional teams to deliver high-quality software solutions.
              </p>
              <Link   to="https://cloudcivil.in"
                  target="blank"
                  className="text-blue-600">Cloud Civil Technologies
            </Link>
            </div>
          </div>

          <div

            className="flex flex-wrap mb-6  p-4 rounded-lg"
          >
            <div className="grow-0 shrink-0 basis-auto w-2/12 mt-10">
              <img
                className="w-full shadow-2xl rounded-lg"
                src={geek}
                alt="Geekworkx Technologies"
              />
            </div>
            <div className="grow-0 shrink-0 basis-auto w-10/12 pl-4 md:pl-6">
              <p className="font-bold mb-3 mt-12"> Geekworkx Technology Pvt. Ltd</p>
              <p className="mb-3 font-bold">18/07/2023 to Present</p>
              <p className="mb-8">
              I recently started a position as an Application Developer at Geekworkx Technologies
              </p>
              <Link to="https://geekworkx.com"
                    target="blank"
                  className="text-blue-600">Geekworkx Technology Pvt. Ltd
            </Link>
            
            </div>
          
          </div>

          
        </section>
      </div>
    </>
  );
};

export default About;
