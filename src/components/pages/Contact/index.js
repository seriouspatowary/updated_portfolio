import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLocationDot } from "@fortawesome/free-solid-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { faPhone } from "@fortawesome/free-solid-svg-icons";

const Contact = () => {
  return (
    <>
      <div className="container my-24 px-6 mx-auto items-center">
        <section className="mb-32 text-gray-800">
          <div className="flex flex-wrap">
            <div className="grow-0 shrink-0 basis-auto mb-6 md:mb-0 w-full md:w-6/12 px-3 lg:px-6">
              <h2 className="text-3xl font-bold mb-6">Contact Me</h2>
           
              <div className="container col-4 d-flex justify-content-center text-center">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3578.244178292409!2d91.69600072464814!3d26.25373743810044!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x375a51303807a927%3A0x10f8ebea82f31549!2sAll%20India%20Institute%20of%20Medical%20Sciences%2C%20Guwahati!5e0!3m2!1sen!2sin!4v1681798113397!5m2!1sen!2sin"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Google Map"
                ></iframe>
              </div>

              <p className="text-gray-500 mb-2">
                <FontAwesomeIcon icon={faLocationDot} /> Guwahati,Assam,India.
              </p>
              <p className="text-gray-500 mb-2">
                <FontAwesomeIcon icon={faPhone} />{" "}
                  9395268347
              </p>
              <p className="text-gray-500 mb-2">
                <FontAwesomeIcon icon={faEnvelope} />{" "}
                simantapatowary963@gmail.com
              </p>
            </div>
            <div className="grow-0 shrink-0 basis-auto mb-12 md:mb-0 w-full md:w-6/12 px-3 lg:px-6">
              <form
                action="https://formspree.io/f/xoqzyara"
                method="POST"
                target="blank"
              >
                <div className="form-group mb-6">
                  <input
                    type="text"
                    name="name"
                    className="form-control block
            w-full
            px-3
            py-1.5
            text-base
            font-normal
            text-gray-700
            bg-white bg-clip-padding
            border border-solid border-gray-300
            rounded
            transition
            ease-in-out
            m-0
            focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                    id="exampleInput7"
                    placeholder="Name"
                  />
                </div>
                <div className="form-group mb-6">
                  <input
                    type="email"
                    name="email"
                    className="form-control block
            w-full
            px-3
            py-1.5
            text-base
            font-normal
            text-gray-700
            bg-white bg-clip-padding
            border border-solid border-gray-300
            rounded
            transition
            ease-in-out
            m-0
            focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                    id="exampleInput8"
                    placeholder="Email address"
                  />
                </div>
                <div className="form-group mb-6">
                  <textarea
                    className="
            form-control
            block
            w-full
            px-3
            py-1.5
            text-base
            font-normal
            text-gray-700
            bg-white bg-clip-padding
            border border-solid border-gray-300
            rounded
            transition
            ease-in-out
            m-0
            focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none
          "
                    id="exampleFormControlTextarea13"
                    rows="3"
                    placeholder="Message"
                    name="message"
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="
          w-full
          px-6
          py-2.5
          bg-purple-600
          text-white
          font-medium
          text-xs
          leading-tight
          uppercase
          rounded
          shadow-md
          hover:bg-purple-700 hover:shadow-lg
          focus:bg-purple-700 focus:shadow-lg focus:outline-none focus:ring-0
          active:bg-purple-800 active:shadow-lg
          transition
          duration-150
          ease-in-out"
                >
                  Send
                </button>
              </form>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default Contact;
