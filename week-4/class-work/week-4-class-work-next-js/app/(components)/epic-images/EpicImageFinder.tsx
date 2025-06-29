"use client";

import { ChangeEvent, useEffect, useRef, useState } from "react";
import "./epicImageFinder.css";
import { getEpicCameraImageLinks } from "@/services/nasaApiServices";
import Image from "next/image";
import { NASA_URLS } from "@/data/nasaApi";

interface EpicImageVm {
  identifier: string;
  image: string;
}

type Props = {
  apiKey: string;
};

export const EpicImageFinder = ({ apiKey }: Props) => {
  const [imageLinks, setImageLinks] = useState<EpicImageVm[]>([]);
  const [date, setDate] = useState<string>("");
  const [image, setImage] = useState<EpicImageVm | null>(null);
  const query = useRef<string>("");

  const getImageLinks = async (date: string) => {
    try {
      const response = await getEpicCameraImageLinks(apiKey, false, date);
      setImageLinks(response);
    } catch (e) {
      console.log(e);
      throw e;
      // setIsError(true);
      // setError(e.message);
    } finally {
      // setIsLoading(false);
    }
  };

  useEffect(() => {
    if (date === "") return;

    getImageLinks(date);
  }, [date]);

  // useEffect(() => {
  //   getImage(image);
  // }, [image]);

  // const getImage = async (identifier: string) => {
  //   try {
  //     const response = await getEpicImage(apiKey, date, identifier);
  //     setData(response);
  //   } catch (e) {
  //     console.log(e);
  //     throw e;
  //   }
  // };

  // const query: string = `${
  //   NASA_URLS.EPIC_IMAGES
  // }archive/natural/${date.replaceAll(
  //   "-",
  //   "/"
  // )}/png/${identifier}.png?api_key=${apiKey}`;

  const dateHandler = (e: ChangeEvent<HTMLInputElement>) => {
    const date = e.target.value;
    setDate(date);
  };

  const imageHandler = (e: ChangeEvent<HTMLSelectElement>) => {
    const imageInput = e.target.value;
    console.log(imageInput);
    query.current = `${NASA_URLS.BASE_URL}${
      NASA_URLS.EPIC_IMAGES
    }archive/natural/${date.replaceAll(
      "-",
      "/"
    )}/png/${imageInput}.png?api_key=${apiKey}`;
    setImage({ identifier: "", image: imageInput });
  };

  return (
    <div className="epic-wrap">
      {/* <pre>{JSON.stringify(imageLinks, null, 2)}</pre> */}
      {/* <pre>{JSON.stringify(data, null, 2)}</pre> */}
      {/* <form> */}
      <input
        className="epic-date-input"
        type="date"
        name="date"
        placeholder="Select date"
        onChange={(e: ChangeEvent<HTMLInputElement>) => dateHandler(e)}
      />
      {/* <button formAction={dateHandler}>pick date</button> */}
      {/* </form> */}
      {imageLinks.length > 0 && (
        <select
          name="image"
          onChange={(e: ChangeEvent<HTMLSelectElement>) => imageHandler(e)}
        >
          {imageLinks.map((x, i) => (
            <option value={x.image} key={i}>
              {x.identifier}
            </option>
          ))}
        </select>
      )}

      {image && (
        <div>
          <img className="epic-img" src={query.current} />
        </div>
      )}
    </div>
  );
};
