import css from "./ImgGallery.module.css";

import { useState } from "react";
import { ItemCard } from "../ItemCard/ItemCard";
import { ImageModal } from "../ImageModal/ImageModal";

export const Gallery = ({ items }) => {
  const [selectedItem, setSelectedItem] = useState(null);
  const [isOpen, setIsOpen] = useState(false);

  const openModal = (item) => {
    setSelectedItem(item);
    setIsOpen(true);
  };

  const closeModal = () => {
    setSelectedItem(null);
    setIsOpen(false);
  };

  const customStyles = {
    content: {
      top: "50%",
      left: "50%",
      right: "auto",
      bottom: "auto",
      marginRight: "-50%",
      transform: "translate(-50%, -50%)",
      padding: 0,
      opacity: isOpen ? 1 : 0,
      transition: "opacity 1s ease-in-out",
    },
  };

  return (
    <ul className={css.list}>
      {items.map((item) => (
        <ItemCard item={item} key={item.id} openModal={openModal} />
      ))}

      {selectedItem && (
        <ImageModal
          isOpen={isOpen}
          selectedItem={selectedItem}
          closeModal={closeModal}
          customStyles={customStyles}
        />
      )}
    </ul>
  );
};
