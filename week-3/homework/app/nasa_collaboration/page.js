"use client";

import React, { useState, useEffect } from "react";
import styles from "./page.module.css";
import { RoverPhoto } from "./(components)/RoverPhoto";

// Read "/app/nasa_collaboration/README.md" for more info about the API_KEY
// You need a proper API_KEY for the requests to work
const API_KEY = "RjNJg3AgG1pTNjgjjzj7FFkcNvx76zRYxTRsgmK4";

const NASA_URLs = {
  astronomyPicOfTheDay: `https://api.nasa.gov/planetary/apod?api_key=${API_KEY}`,
  marsRoverPhoto: `https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?earth_date=2015-6-3&api_key=${API_KEY}`,
};

export const NasaCollaboration = () => {
  const [dailyImg, setDailyImg] = useState({});
  const [roverPhoto, setRoverPhoto] = useState({});

  useEffect(() => {
    fetchRoverPhotos();
    fetchDailyImage();
  }, []);

  const fetchRoverPhotos = async () => {
    const roverPhotoResponse = await fetch(NASA_URLs.marsRoverPhoto).then(
      (response) => response.json()
    );
    setRoverPhoto(roverPhotoResponse);
  };

  const fetchDailyImage = async () => {
    const dailyPhotoResponse = await fetch(NASA_URLs.astronomyPicOfTheDay).then(
      (response) => response.json()
    );
    setDailyImg(dailyPhotoResponse);
  };

  return (
    <div className="fullBGpicture">
      <main className="mainContent">
        <h1>Collaboration with NASA</h1>
        <section className="card">
          <h2>Astronomy Picture of the day</h2>
          <p>{dailyImg.title}</p>
          <img
            className={styles.nasaPicOfTheDayImg}
            src={dailyImg.url}
            alt={dailyImg.title}
          />
          <p>{dailyImg.explanation}</p>
        </section>
        <section className="card">
          <h2>Rover Photos</h2>
          {roverPhoto && roverPhoto.photos && roverPhoto.photos.length > 0 ? (
            roverPhoto.photos.map((x, i) => (
              <RoverPhoto
                src={x.img_src}
                roverName={x.rover.name}
                date={x.earth_date}
              />
            ))
          ) : (
            <p>Loading rover photos...</p>
          )}
        </section>
      </main>
    </div>
  );
};

export default NasaCollaboration;
