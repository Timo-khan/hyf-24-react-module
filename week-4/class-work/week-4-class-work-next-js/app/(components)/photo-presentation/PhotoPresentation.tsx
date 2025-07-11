"use client";

import "./photoPresentation.css";

import { useEffect, useState } from "react";

import Image from "next/image";

import { getMarsRoverPhotos } from "@/services/nasaApiServices";
import { MarsPhotoVm } from "@/models/nasa-api/MarsPhotoVm";

type Props = {
  apiKey: string;
};

export const PhotoPresentation = ({ apiKey }: Props) => {
  const [data, setData] = useState<MarsPhotoVm[]>([]);

  useEffect(() => {
    getPhotos();
  });

  const getPhotos = async () => {
    try {
      const response = await getMarsRoverPhotos(apiKey);
      setData(response);
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <div className="pp-wrap">
      {/* <pre>{JSON.stringify(data, null, 2)}</pre> */}
      {data.length != 0 &&
        data.map((x, i) => (
          <div key={i} className="pp-photo-block">
            <p className="pp-img-date">Captured - {x.earth_date}</p>
            <Image
              alt={x.earth_date}
              className="pp-img"
              src={x.img_src}
              width={400}
              height={0}
            />
          </div>
        ))}
    </div>
  );
};
