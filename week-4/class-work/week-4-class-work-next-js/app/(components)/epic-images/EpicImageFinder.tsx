"use client";

import "./epicImageFinder.css";

import Image from "next/image";
import { ChangeEvent, useEffect, useRef, useState } from "react";

import { NASA_URLS } from "@/data/nasaApi";

import { getEpicCameraImageLinks } from "@/services/nasaApiServices";
import { EpicImageVm } from "@/models/nasa-api/EpicImageVm";

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
    }
  };

  useEffect(() => {
    if (date === "") return;

    getImageLinks(date);
  }, [date]);

  const dateHandler = (e: ChangeEvent<HTMLInputElement>) => {
    const date = e.target.value;
    setDate(date);
  };

  const imageHandler = (e: ChangeEvent<HTMLSelectElement>) => {
    const imageInput = e.target.value;

    if (imageInput === "reset") {
      query.current = "";
      setImage(null);
      return;
    }

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
      <div className="epic-form">
        <label className="epic-label">Pick a date</label>
        <input
          className="epic-date-input"
          type="date"
          name="date"
          placeholder="Select date"
          onChange={(e: ChangeEvent<HTMLInputElement>) => dateHandler(e)}
        />
        {imageLinks.length > 0 && (
          <select
            name="image"
            className="epic-select"
            onChange={(e: ChangeEvent<HTMLSelectElement>) => imageHandler(e)}
          >
            <option selected value="reset" className="epic-option">
              -- select image to display--
            </option>
            {imageLinks.map((x, i) => (
              <option className="epic-option" value={x.image} key={i}>
                {x.identifier}
              </option>
            ))}
          </select>
        )}
      </div>
      {image && (
        <div className="epic-display">
          <Image
            className="epic-img"
            alt={image.identifier}
            src={query.current}
            width={800}
            height={0}
          />
        </div>
      )}
    </div>
  );
};
