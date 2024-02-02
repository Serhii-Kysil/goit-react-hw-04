import css from "./SearchBar.module.css";
import toast from "react-hot-toast";
import { IoIosSearch } from "react-icons/io";

export const SearchBar = ({ onSearch }) => {
  const handleSubmit = (e) => {
    e.preventDefault();
    if (e.target.elements.query.value.trim() === "") {
      toast.error("EMPTY STRING!");
      return;
    }
    onSearch(e.target.elements.query.value);
    e.target.reset();
  };

  return (
    <header className={css.header}>
      <form onSubmit={handleSubmit} className={css.form}>
        <div className={css.container}>
          <input
            className={css.input}
            name="query"
            type="text"
            autoComplete="off"
            autoFocus
            placeholder="Search images and photos"
          />
          <button className={css.btn} type="submit">
            <IoIosSearch />
          </button>
        </div>
      </form>
    </header>
  );
};
