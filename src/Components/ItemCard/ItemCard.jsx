import css from "./ItemCard.module.css";

export const ItemCard = ({ item, openModal }) => {
  return (
    <li className={css.listItem} onClick={() => openModal(item)}>
      <div className={css.imgCont}>
        <img
          className={css.img}
          src={item.urls.small}
          alt={item.alt_description}
        />
      </div>
    </li>
  );
};
