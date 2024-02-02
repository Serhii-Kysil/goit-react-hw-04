import css from "./ImgGallery.module.css";
import Modal from "react-modal";
import { useState } from "react";

export const Gallery = ({ items }) => {
  Modal.setAppElement("#root");
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
        <li
          className={css.listItem}
          key={item.id}
          onClick={() => openModal(item)}
        >
          <div className={css.imgCont}>
            <img
              className={css.img}
              src={item.urls.small}
              alt={item.alt_description}
            />
          </div>
        </li>
      ))}

      {selectedItem && (
        <Modal
          closeTimeoutMS={10000}
          isOpen={isOpen}
          onRequestClose={closeModal}
          contentLabel="Card"
          style={customStyles}
        >
          <div className={css.modalCont}>
            <img
              className={css.modalImg}
              src={selectedItem.urls.regular}
              alt={selectedItem.alt_description}
            />
          </div>
        </Modal>
      )}
    </ul>
  );
};
