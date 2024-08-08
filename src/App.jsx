import { useDispatch, useSelector } from "react-redux";
import ContactForm from "./components/ContactForm/ContactForm";
import ContactList from "./components/ContactList/ContactList";
import SearchBox from "./components/SearchBox/SearchBox";
import { useEffect } from "react";
import { fetchContacts } from "./redux/contactsOps";
import { selectError, selectLoading } from "./redux/selectors";

const App = () => {
  const dispatch = useDispatch();
  const isLoading = useSelector(selectLoading);
  const isError = useSelector(selectError);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);
  return (
    <>
      <h1>Phonebook</h1>
      <ContactForm />
      <SearchBox />
      <ContactList />
      {isLoading && <h1>Loading...</h1>}
      {isError && <h2>Something went wrong!</h2>}
    </>
  );
};

export default App;
