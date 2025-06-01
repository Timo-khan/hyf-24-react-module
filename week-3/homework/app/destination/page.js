"use client";

import styles from "@/components/destination/destination.module.css";

import { useState } from "react";

import { PLANET_LIST } from "@/data/consts/planetList";

import { AddWishlistItem } from "@/components/destination/AddWishlistItem";
import { PlanetCard } from "./(components)/planetCard/PlanetCard";
import { PlanetWishlistItem } from "./(components)/PlanetWishListItem";

export const Destinations = () => {
  const [selectedPlanets, onAddPlanet] = useState([]);

  const addPlanetHandler = (planet) => {
    if (!selectedPlanets.includes(planet)) {
      onAddPlanet([...selectedPlanets, planet]);
    }

    console.log(
      `You selected to add the following planet: ${planet.name}, with the index of ${planet.id}`
    );
  };

  const removePlanetHandler = (planet) => {
    if (selectedPlanets.includes(planet)) {
      const currentList = selectedPlanets.filter((x) => x !== planet);
      onAddPlanet([...currentList]);
    }

    console.log(
      `You selected to remove the following planet: ${planet.name}, with the index of ${planet.id}`
    );
  };

  return (
    <div className="fullBGpicture">
      <main className="mainContent">
        <h1>Travel Destinations</h1>
        <section className="card">
          <h2>Wishlist</h2>
          {selectedPlanets.length === 0 ? (
            <p>{`No planets in wishlist :(`}</p>
          ) : (
            <p>You have {selectedPlanets.length} planets in your wishlist</p>
          )}

          <AddWishlistItem onAddWishlistItem={addPlanetHandler} />
          <h3>Your current wishlist</h3>
          <div className={styles.wishlistList}>
            {selectedPlanets.map((x, i) => (
              <PlanetWishlistItem
                key={i}
                planet={x}
                onRemove={removePlanetHandler}
              />
            ))}
          </div>
        </section>
        <section className="card">
          <h2>Possible Destinations</h2>
          {PLANET_LIST.map((x, i) => (
            <PlanetCard
              key={i}
              planet={x}
              isSelected={selectedPlanets.includes(x)}
              onAddPlanet={addPlanetHandler}
              onRemovePlanet={removePlanetHandler}
            />
          ))}
        </section>
      </main>
    </div>
  );
};

export default Destinations;
