import css from "./ImgGallery.module.css";

export const Gallery = ({ items }) => {
  console.log(items);
  return (
    <ul className={css.list}>
      {items.map((item) => (
        <li className={css.listItem} key={item.id}>
          <div className={css.imgCont}>
            <img
              className={css.img}
              src={item.urls.small}
              alt={item.alt_description}
            />
            {/* <div>
              <p>{item.description}</p>
              <p>Likes: {item.likes}</p>
            </div> */}
          </div>
        </li>
      ))}
    </ul>
  );
};
