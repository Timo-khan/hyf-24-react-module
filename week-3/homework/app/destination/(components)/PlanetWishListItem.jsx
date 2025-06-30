import styles from "@/components/destination/destination.module.css";

export const PlanetWishlistItem = ({ planet, onRemove }) => {
  const removeHandle = () => {
    onRemove(planet, "remove");
  };

  return (
    <div className={styles.wishlistItem}>
      <img
        className={styles.wishlistItemThumbnail}
        src={planet.link}
        alt={planet.name}
      />
      <b>{planet.name.toUpperCase()}</b>
      <button onClick={removeHandle}>remove</button>
    </div>
  );
};
