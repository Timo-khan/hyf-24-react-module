"use client";

import "./photoPresentation.css";

import { useEffect, useState } from "react";

import { getMarsRoverPhotos } from "@/services/nasaApiServices";

export const PhotoPresentation = ({ apiKey }) => {
  const [data, setData] = useState([]);

  useEffect(() => {
    getPhotos();
  }, []);

  const getPhotos = async () => {
    try {
      const response = await getMarsRoverPhotos(apiKey);
      setData(response);
    } catch (e) {
      console.log(e.message ?? "Something went wrong");
    }
  };

  return (
    <div className="pp-wrap">
      {/* <pre>{JSON.stringify(data, null, 2)}</pre> */}
      {data.length != 0 &&
        data.map((x, i) => (
          <div key={i} className="pp-photo-block">
            <p className="pp-img-date">Captured - {x.earth_date}</p>
            <img className="pp-img" src={x.img_src} />
          </div>
        ))}
    </div>
  );
};
