import React from "react";
import { Navbar } from "../components";
import { AiOutlineArrowLeft } from "react-icons/ai";
import { Link } from "react-router-dom";
import {RichTextEditor} from '../components';


import 'draft-js/dist/Draft.css';



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

    <div className="flex ml-52 ">
        <div className="container mr-5 h-72 bg-blue-500">
            <h1>Placeholder for video player</h1>
        </div>

        <div className="container w-4/5  h-screen">
                <RichTextEditor />
        </div>
    </div>
       
    
    </>
  );
}

export default VideoPlayer;
