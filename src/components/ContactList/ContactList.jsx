import { useSelector } from "react-redux";
import Contact from "../Contact/Contact";
import { selectContacts, selectFilter } from "../../redux/selectors";

const ContactList = () => {
  const contacts = useSelector(selectContacts);
  const filter = useSelector(selectFilter);

  const filteredData = contacts.filter((contact) =>
    contact.name.toLowerCase().includes(filter.toLowerCase())
  );

  return (
    <ul>
      {filteredData.map((contact) => {
        return (
          <li key={contact.id}>
            <Contact
              name={contact.name}
              number={contact.number}
              id={contact.id}
            />
          </li>
        );
      })}
    </ul>
  );
};

export default ContactList;
