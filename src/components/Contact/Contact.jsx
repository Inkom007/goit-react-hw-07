import { FaUserAlt } from "react-icons/fa";
import { FaPhone } from "react-icons/fa6";
import { useDispatch } from "react-redux";
import { deleteContact } from "../../redux/contactsOps";
import s from "./Contact.module.css";

const Contact = ({ name, number, id }) => {
  const dispatch = useDispatch();
  return (
    <div className={s.wrapper}>
      <div className={s.userWrapper}>
        <p className={s.text}>
          <span className={s.span}>
            <FaUserAlt color="rgba(21, 139, 76, 0.792)" />
          </span>
          {name}
        </p>
        <p className={s.text}>
          <span className={s.span}>
            <FaPhone color="rgba(21, 139, 76, 0.792)" />
          </span>
          {number}
        </p>
      </div>
      <button className={s.button} onClick={() => dispatch(deleteContact(id))}>
        Delete
      </button>
    </div>
  );
};

export default Contact;
