import React from "react";
import { Navbar } from "../components";
import { AiOutlineArrowLeft } from "react-icons/ai";
import { Link } from "react-router-dom";
import { RichTextEditor } from "../components";

//for caraousel of thumbnail videos.
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';

import "draft-js/dist/Draft.css";

function VideoPlayer() {
  return (
    <>
      <div>
        <Link to="/home">
          <div className=" absolute top-8 left-44  max-w-max ">
            <AiOutlineArrowLeft />
          </div>
        </Link>

        <Navbar page="Go Back to Playlists" />
      </div>

      <div className="flex ml-52 max-h-max mr-12 ">
        <div className="container mr-5 h-72 bg-blue-500">
          <h1>Placeholder for video player</h1>
        </div>

        <div className="container w-4/5">
          <RichTextEditor />
        </div>
      </div>
      <div className=" ml-52 flex justify-between mr-16 mt-4">
        <div>
          <h2 className="font-bold">How to Design a Card?</h2>
          <p>
            This description to be fetched from fetch call. Just a filler text
            for now.
          </p>
        </div>

        <div className="bg-primary text-white h-max py-1 px-4 mr-1 rounded-lg">
          <Link to="/schedule">Schedule</Link>
        </div>
      </div>

      <div className="ml-52 mt-4">
        <h2 className="font-bold">Upcoming Videos</h2>
      </div>

      <section className="text-gray-600 body-font">
        <div className="container ml-48 px-5 py-12 ">
          <div className="flex flex-wrap -m-4">

            <div className="p-4 md:w-1/3">
              <div className="h-max border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden">
                <img
                  className="lg:h-48 md:h-36 w-full object-cover object-center"
                  src="https://dummyimage.com/720x400"
                  alt="blog"
                />
              </div>
            </div>

            <div className="p-4 md:w-1/3">
              <div className="h-max border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden">
                <img
                  className="lg:h-48 md:h-36 w-full object-cover object-center"
                  src="https://dummyimage.com/720x400"
                  alt="blog"
                />
              </div>
            </div>

            <div className="p-4 md:w-1/3">
              <div className="h-max border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden">
                <img
                  className="lg:h-48 md:h-36 w-full object-cover object-center"
                  src="https://dummyimage.com/720x400"
                  alt="blog"
                />
              </div>
            </div>
            
            
           
          </div>
        </div>
      </section>
    </>
  );
}

export default VideoPlayer;
