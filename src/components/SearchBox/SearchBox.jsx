import { useDispatch } from "react-redux";
import { changeFilter } from "../../redux/filterSlice";
import s from "./SearchBox.module.css";

const SearchBox = () => {
  const dispatch = useDispatch();
  return (
    <div className={s.wrapper}>
      <p className={s.text}>Find contacts by name</p>
      <input
        className={s.input}
        onChange={(e) => dispatch(changeFilter(e.target.value))}
        type="text"
      ></input>
    </div>
  );
};

export default SearchBox;
