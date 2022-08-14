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

    
        <div className="container ml-52 w-4/5  h-screen">
                <RichTextEditor />
        </div>
    
    </>
  );
}

export default VideoPlayer;
