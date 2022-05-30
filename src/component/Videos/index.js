import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import ReactPlayer from "react-player";
import "./Video.css";
import api from "../../constant/index";

const url = api.BaseUrl;

function Videos() {
  const [videos, setVideos] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    async function fecthVideo() {
      const res = await axios.get(
        `${url}/movie/${id}/videos?api_key=d6839191e269dda942246111abe8bfda&language=en-US`
      );

      setVideos(res.data.results.find((vid) => vid.type === "Trailer"));
      return res;
    }
    fecthVideo();
  }, [id]);

  return (
    <>
      <div className="trailer-container">
        <ReactPlayer url={`https://www.youtube.com/watch?v=${videos.key}`} />
      </div>
    </>
  );
}

export default Videos;
