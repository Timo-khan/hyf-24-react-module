import styles from "@/components/destination/destination.module.css";

export const PlanetCard = ({
  planet,
  isSelected,
  onAddPlanet,
  onRemovePlanet,
}) => {
  const addOrRemoveHandler = () => {
    if (isSelected) {
      onRemovePlanet(planet);
    }
    if (!isSelected) {
      onAddPlanet(planet);
    }
  };

  return (
    <div className={styles.planetCard}>
      <img
        className={styles.planetThumbnail}
        src={planet.link}
        alt={planet.name}
      />
      <div className={styles.planetDescription}>
        <h2>
          {planet.name} {isSelected ? "- SELECTED" : ""}
        </h2>
        <p>{planet.description}</p>
      </div>
      <button className="roundButton" onClick={addOrRemoveHandler}>
        {isSelected ? "REMOVE" : "ADD PLANET"}
      </button>
    </div>
  );
};
