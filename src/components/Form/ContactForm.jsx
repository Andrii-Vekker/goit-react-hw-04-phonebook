import { Formik, ErrorMessage  } from 'formik';
import { FormContainer, BtnAdd, Label, Span, Input } from './Form.styled';
import * as yup from 'yup';
import { nanoid } from 'nanoid';
import PropTypes from 'prop-types';

const schema = yup.object().shape({
    name: yup.string().required("Please enter your name"),
    number: yup.string().trim().min(7).max(7)
    .required("Please enter your tel")
    .matches(
      /\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}/ ,
      "Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
    ),
    
});

const initialValues = {
    id: "",
        name: '',
    number: "",
};
export default function ContactFormrm(propa) {
    const handleSubmit = (values, { resetForm }) => {
        values.id = nanoid()
        resetForm();
        propa.onSubmit(values);
    };

    
    return (
        <>
        <Formik validationSchema={schema} onSubmit={handleSubmit} initialValues={initialValues}>
            <FormContainer autoComplete="off">
                <Label htmlFor="name">
                    <Span>Name</Span>
                        <Input type="text" name="name"  />
                    <ErrorMessage name='name' component="div"/> 
                </Label>
                 <Label htmlFor="number">
                  <Span>Number</Span>
                        <Input type="tel" name="number" />
                    <ErrorMessage name='number' component="div"/> 
                </Label>
                <BtnAdd type="submit">Add contact</BtnAdd>
            </FormContainer>
            </Formik>
            </>
    );
};

ContactFormrm.propTypes = {
    onSubmit: PropTypes.func.isRequired,
}