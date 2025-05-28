"use client";

import { useState } from "react";

import styles from "@/components/destination/destination.module.css";
import { AddWishlistItem } from "@/components/destination/AddWishlistItem";
import { PlanetCard } from "./(components)/planetCard/PlanetCard";
import { PLANET_LIST } from "@/data/consts/planetList";

export const Destinations = () => {
  const [selectedPlanets, onAddPlanet] = useState([]);

  let isPlanetSelected = false;
  let numberOfPlanets = 0;

  const onAddOrRemovePlanet = (name, index) => {
    if (!selectedPlanets.includes(index)) {
      onAddPlanet([...selectedPlanets, index]);
    }

    console.log(
      `You seleceted the following planet: ${name}, with the index of ${index}`
    );
  };

  return (
    <div className="fullBGpicture">
      <main className="mainContent">
        <h1>Travel destinations</h1>
        <section className="card">
          <h2>Wishlist</h2>
          {selectedPlanets.length === 0 ? (
            <p>{`No planets in wishlist :(`}</p>
          ) : (
            <p>You have {selectedPlanets.length} planets in your wishlist</p>
          )}

          <b>List coming soon after lesson 3!</b>

          {/* STOP! - this is for week 3!*/}
          {/* TASK - React 1 week 3 */}
          {/* Import the AddWishlistItem react component */}
          {/* <AddWishlistItem /> */}
          {/* TASK - React 1 week 3 */}
          {/* Convert the list, so it is using selectedPlanets.map() to display the items  */}
          {/* Implement the "REMOVE" function */}
          {/* uncomment the following code snippet: */}
          {/* 
          <h3>Your current wishlist</h3>
          <div className={styles.wishlistList}>
            <PlanetWishlistItem 
              name="europa"
              onRemove={() => removeFromWishlist('europa')}
              thumbnail="/destination/image-europa.png"
            />
            <PlanetWishlistItem 
              name="europa"
              onRemove={() => removeFromWishlist('europa')}
              thumbnail="/destination/image-europa.png"
            />
          </div> */}
        </section>
        <section className="card">
          <h2>Possible destinations</h2>
          {/* <pre>{JSON.stringify(selectedPlanets, null, 2)}</pre> */}
          <PlanetCard
            name={PLANET_LIST[0].name}
            description={PLANET_LIST[0].description}
            isSelected={selectedPlanets.includes(PLANET_LIST[0].id)}
            thumbnail={PLANET_LIST[0].link}
            onAddOrRemovePlanet={() =>
              onAddOrRemovePlanet(PLANET_LIST[0].name, PLANET_LIST[0].id)
            }
          />
          <PlanetCard
            name={PLANET_LIST[1].name}
            description={PLANET_LIST[1].description}
            isSelected={selectedPlanets.includes(PLANET_LIST[1].id)}
            thumbnail={PLANET_LIST[1].link}
            onAddOrRemovePlanet={() =>
              onAddOrRemovePlanet(PLANET_LIST[1].name, PLANET_LIST[1].id)
            }
          />
          <PlanetCard
            name={PLANET_LIST[2].name}
            description={PLANET_LIST[2].description}
            isSelected={selectedPlanets.includes(PLANET_LIST[2].id)}
            thumbnail={PLANET_LIST[2].link}
            onAddOrRemovePlanet={() =>
              onAddOrRemovePlanet(PLANET_LIST[2].name, PLANET_LIST[2].id)
            }
          />
          <PlanetCard
            name={PLANET_LIST[3].name}
            description={PLANET_LIST[3].description}
            isSelected={selectedPlanets.includes(PLANET_LIST[3].id)}
            thumbnail={PLANET_LIST[3].link}
            onAddOrRemovePlanet={() =>
              onAddOrRemovePlanet(PLANET_LIST[3].name, PLANET_LIST[3].id)
            }
          />
        </section>
      </main>
    </div>
  );
};

export default Destinations;
