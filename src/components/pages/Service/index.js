import React from "react";

import aid from "./aid.png";
import ims from "./ims.svg";
import fclone from "./fclone.avif";

import { Link } from "react-router-dom";

const Service = () => {
  return (
    <>
      <h1 className="text-3xl font-bold text-center mt-10 my-19 mb-10 md:mb-6 ">
        Projects
      </h1>
      <div className="container my-24 px-6 mx-auto">
        <section className="mb-32 text-gray-800">
          <div          
            className="flex flex-wrap mb-6  p-4 rounded-lg"
          >
            <div className="grow-0 shrink-0 basis-auto w-2/12">
              <img
                className="w-full shadow-2xl rounded-lg"
                src={aid}
                alt="AID 24x7"
              />
            </div>
            <div className="grow-0 shrink-0 basis-auto w-10/12 pl-4 md:pl-6">
              <p className="font-bold mb-3">AID 24x7 (Online Medicine Delivery Service)</p>
              <p className="mb-16">
                Developed Online Medicine delivery service in aid24x7.in. This service allows users to browse products, add items to their cart, and proceed to checkout. It is built using the MERN stack, with MongoDB as the database, Express.js as the backend, React as the frontend, and Node.js as the runtime environment.
              </p>
              <Link   to="https://private-frontend-nine.vercel.app"
                  target="blank"
                  className="text-blue-600">Visit the site
            </Link>
            </div>
          </div>

          <div

            className="flex flex-wrap mb-6  p-4 rounded-lg"
          >
            <div className="grow-0 shrink-0 basis-auto w-2/12 mt-10">
              <img
                className="w-full shadow-2xl rounded-lg"
                src={ims}
                alt="IMS"
              />
            </div>
            <div className="grow-0 shrink-0 basis-auto w-10/12 pl-4 md:pl-6">
              <p className="font-bold mb-3">Inventory Management System</p>
              <p className="mb-16">
                Developed an Inventory Management System that helps businesses manage and track their inventory levels. The system is built using the MERN stack, ensuring efficient data management and seamless user interactions.
              </p>
              <Link              to="https://ims-client-snsg.onrender.com"
                    target="blank"
                  className="text-blue-600">Visit the site
            </Link>
            
            </div>
          
          </div>

          <div
           
            className="flex flex-wrap mb-6  p-4 rounded-lg"
          >
            <div className="grow-0 shrink-0 basis-auto w-2/12">
              <img
                className="w-full shadow-2xl rounded-lg"
                src={fclone}
                alt="Flipkart Clone"
              />
            </div>
            <div className="grow-0 shrink-0 basis-auto w-10/12 pl-4 md:pl-6">
              <p className="font-bold mb-3">Flipkart Clone</p>
              <p className="mb-10">
                Built a Flipkart Clone that allows users to explore products, add them to their cart, and purchase them online. The application is created using the MERN stack, providing a robust and scalable solution for e-commerce.
              </p>
              <Link
               to="https://flipcart-cl0ne.netlify.app"
               target="blank" className="text-blue-600">
                Visit the site
              
              </Link>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default Service;
