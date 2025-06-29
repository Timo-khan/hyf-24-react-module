"use client";

import { useEffect, useState } from "react";
import "./epicImageFinder.css";
import {
  getEpicCameraImageLinks,
  getEpicImage,
} from "@/services/nasaApiServices";

export const EpicImageFinder = ({ apiKey }) => {
  const [imageLinks, setImageLinks] = useState([]);
  const [date, setDate] = useState("0000-00-00");
  const [image, setImage] = useState("");
  const [data, setData] = useState({});

  useEffect(() => {
    // const dateString = new Date().toISOString().slice(0, 10);
    getImageLinks(date);
  }, [date]);

  useEffect(() => {
    getImage(image);
  }, [image]);

  const getImageLinks = async (date) => {
    try {
      const response = await getEpicCameraImageLinks(apiKey, false, date);
      setImageLinks(response);
    } catch (e) {
      // setIsError(true);
      // setError(e.message);
    } finally {
      // setIsLoading(false);
    }
  };

  const getImage = async (identifier) => {
    try {
      console.log("blah");
      const response = await getEpicImage(apiKey, date, identifier);
      setData(response);
    } catch (e) {}
  };

  const dateHandler = (formData) => {
    const date = formData.get("date");
    setDate(date);
  };

  const imageHandler = (formData) => {
    const image = formData.get("image");
    setImage(image);
  };

  return (
    <div className="epic-wrap">
      {/* <pre>{JSON.stringify(imageLinks, null, 2)}</pre> */}
      <pre>{JSON.stringify(data, null, 2)}</pre>
      <form>
        <input type="date" name="date" />
        <button formAction={dateHandler}>pick date</button>
      </form>
      {imageLinks.length > 0 && (
        <form>
          <select name="image">
            {imageLinks.map((x, i) => (
              <option value={x.image} key={i}>
                {x.identifier}
              </option>
            ))}
          </select>
          <button formAction={imageHandler}>pick image to display</button>
        </form>
      )}
    </div>
  );
};
