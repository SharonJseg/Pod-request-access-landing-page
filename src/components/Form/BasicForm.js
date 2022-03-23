import { Formik, Form, Field, ErrorMessage } from 'formik';
import './BasicForm.css';

const BasicForm = () => {
  return (
    <Formik
      initialValues={{ email: '' }}
      validate={(values) => {
        const errors = {};
        if (!values.email) {
          errors.email = 'Email required';
        } else if (
          !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
        ) {
          errors.email = 'Oops! Please check your email';
        }
        return errors;
      }}
      onSubmit={(values, { setSubmitting }) => {
        setTimeout(() => {
          alert(JSON.stringify(values, null, 2));
          setSubmitting(false);
        }, 400);
      }}
    >
      {({ isSubmitting }) => (
        <Form>
          <div className='form__input-container'>
            <Field
              placeholder='Email address'
              className='form__input'
              type='email'
              name='email'
            />

            <button
              className='form__button'
              type='submit'
              disabled={isSubmitting}
            >
              Request Access
            </button>
          </div>
          <span className='form__validation'>
            <ErrorMessage name='email' component='span' />
          </span>
        </Form>
      )}
    </Formik>
  );
};

export default BasicForm;
