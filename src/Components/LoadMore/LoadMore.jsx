import css from "./LoadMore.module.css";

export const LoadMore = ({ handleLoadMore }) => {
  return (
    <div className={css.btnCont}>
      <button className={css.btn} onClick={handleLoadMore}>
        Load more
      </button>
    </div>
  );
};
