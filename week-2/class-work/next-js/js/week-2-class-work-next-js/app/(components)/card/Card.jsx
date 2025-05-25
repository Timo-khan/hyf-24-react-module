import "./card.css";

import Image from "next/image";

export const Card = ({ title, description, image }) => {
  return (
    <div className="card-block">
      <h4 className="card-title">{title}</h4>
      <Image src={image} alt={title} width={200} height={120} />
      <p className="card-description">{description}</p>
    </div>
  );
};
