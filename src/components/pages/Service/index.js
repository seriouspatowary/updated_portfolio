import React from "react";
import nas from "./nas.webp";
import ns from "./ns.png";
import sa from "./sa.png";
import wca from "./wca.jpg";
import job from "./job.png";

const Service = () => {
  return (
    <>
      <h1 className="text-3xl font-bold text-center my-19 mb-10 md:mb-6">
        Projects
      </h1>
      <div className="container my-24 px-6  mx-auto">
        <section className="mb-32  text-gray-800">
          <div className="flex flex-wrap mb-12 md:mb-0">
            <div className="grow-0 shrink-0 basis-auto w-2/12">
              <img
                className="w-full shadow-lg rounded-lg mb-6"
                src={nas}
                alt=""
              />
            </div>

            <div className="grow-0 shrink-0 basis-auto w-10/12 pl-4 md:pl-6">
              <p className="font-bold mb-3">News Aggregation System</p>
              <p>
                I Build a "News Aggregator Application" by scrapping from news
                portal and serving the scrapped articles on a web app. and we
                also cluster news by sports, entertainment, political, local
                news etc.(Tools: NLP, Python)
              </p>
            </div>
          </div>

          <div className="flex flex-wrap mb-12 md:mb-0">
            <div className="grow-0 shrink-0 basis-auto w-2/12">
              <img
                src={ns}
                className="w-full shadow-lg rounded-lg mb-6"
                alt=""
              />
            </div>

            <div className="grow-0 shrink-0 basis-auto w-10/12 pl-4 md:pl-6">
              <p className="font-bold mb-3">ENotebook</p>
              <p>
                ENotebook is a free note storing Software that provides a Secure
                Environment to store your notes. user can store the notes in
                Enotebook. user can delete notes whenever want to delete and
                user can also update note.( ReactJS, NodeJS, Express, MongoDB)
              </p>
            </div>
          </div>

          <div className="flex flex-wrap">
            <div className="grow-0 shrink-0 basis-auto w-2/12">
              <img
                src={sa}
                className="w-full shadow-lg rounded-lg mb-6"
                alt=""
              />
            </div>

            <div className="grow-0 shrink-0 basis-auto w-10/12 pl-4 md:pl-6">
              <p className="font-semibold mb-3">Real-time Chat Application</p>
              <p>
                I Developed an application by which multiple users can chat
                simultaneously.(NodeJS, Socket.IO)
              </p>
            </div>
          </div>
          <div className="flex flex-wrap">
            <div className="grow-0 shrink-0 basis-auto w-2/12">
              <img
                src={wca}
                className="w-full shadow-lg rounded-lg mb-6"
                alt=""
              />
            </div>

            <div className="grow-0 shrink-0 basis-auto w-10/12 pl-4 md:pl-6">
              <p className="font-semibold mb-3">
                TextUtils- Word counter | Character counter | Lowercase to
                Uppercase | Uppercase to lowercase | Remove Whitespaces
              </p>
              <p>
                TextUtils is free character counter tool that provides instant
                character count and word count statistics for a given text.
                TextUtils reports the number of words and characters. thus it is
                suitable for writing text with word/character
                limit.(ReactJS,Bootstrap5)
              </p>
            </div>
          </div>

          <div className="flex flex-wrap">
            <div className="grow-0 shrink-0 basis-auto w-2/12">
              <img
                src={job}
                className="w-full shadow-lg rounded-lg mb-6"
                alt=""
              />
            </div>

            <div className="grow-0 shrink-0 basis-auto w-10/12 pl-4 md:pl-6">
              <p className="font-semibold mb-3">Job Portal</p>
              <p>
                This web application manage updates both from the job seekers as
                well as the companies. It's a unique development methodology
                helps in acquiring the client and candidate information and
                separating them according to the job requirements and
                vacancies.(HTML,CSS,JS,PHP,MySQL,Bootstrap)
              </p>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default Service;
