import { Formik, Form, Field, ErrorMessage } from "formik";
import { addContact } from "../../redux/contactsOps";
import { useDispatch } from "react-redux";
import s from "./ContactForm.module.css";
import * as Yup from "yup";

const ContactForm = () => {
  const registerSchema = Yup.object({
    name: Yup.string()
      .required("Required")
      .min(3, "Too short!")
      .max(50, "Too long!"),
    number: Yup.string()
      .required("Required")
      .min(3, "Too short!")
      .max(50, "Too long!"),
  });

  const dispatch = useDispatch();
  const initialValues = { name: "", number: "" };

  const onSubmit = (values, options) => {
    dispatch(addContact({ name: values.name, number: values.number }));
    options.resetForm();
  };

  return (
    <div className={s.wrapper}>
      <Formik
        initialValues={initialValues}
        onSubmit={onSubmit}
        validationSchema={registerSchema}
      >
        <Form className={s.form}>
          <label>
            <span className={s.text}>Name</span>
            <Field className={s.input} name="name"></Field>
            <ErrorMessage name="name" component="span" className={s.error} />
          </label>
          <label>
            <span className={s.text}> Number</span>
            <Field className={s.input} name="number"></Field>
            <ErrorMessage name="number" component="span" className={s.error} />
          </label>
          <button className={s.button} type="submit">
            Add contact
          </button>
        </Form>
      </Formik>
    </div>
  );
};

export default ContactForm;
