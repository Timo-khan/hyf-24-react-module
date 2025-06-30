"use client";

import { PLANET_LIST } from "@/data/consts/planetList";
import styles from "./destination.module.css";

import { useState } from "react";

export const AddWishlistItem = ({ onAddWishlistItem }) => {
  const [wishListItem, setWishListItem] = useState("");
  const [thumbnail, onThumbnailChange] = useState(
    "/destination/image-europa.png"
  );

  const handleInput = (event) => {
    setWishListItem(event.target.value);
  };

  const handleSelect = (event) => {
    onThumbnailChange(event.target.value);
  };

  const onAddItemPressed = () => {
    if (
      PLANET_LIST.some(
        (x) =>
          x.name.toUpperCase() === wishListItem.toUpperCase() &&
          x.link === thumbnail
      )
    ) {
      onAddWishlistItem(
        PLANET_LIST.find(
          (x) =>
            x.name.toUpperCase() === wishListItem.toUpperCase() &&
            x.link === thumbnail
        )
      );
    }
    setWishListItem("");
  };

  return (
    <div className={styles.addWishlistItem}>
      <p>Add custom planet to wishlist</p>
      <label htmlFor="customWishlist">Wishlist item name</label>
      <input
        id="customWishlist"
        type="text"
        value={wishListItem}
        onChange={handleInput}
      />
      <label htmlFor="customWishlistThumbnail">Wishlist item thumbnail</label>
      <select onChange={handleSelect} id="customWishlistThumbnail">
        <option value="/destination/image-europa.png">EUROPA</option>
        <option value="/destination/image-mars.png">MARS</option>
        <option value="/destination/image-moon.png">MOON</option>
        <option value="/destination/image-titan.png">TITAN</option>
      </select>
      <button onClick={onAddItemPressed}>ADD CUSTOM</button>
    </div>
  );
};
