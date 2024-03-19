'use client';

import { Field, Form, Formik } from 'formik';

import { Input } from '..';

const TestForm: React.FC<any> = ({ className = '' }) => (
  <div className={className}>
    <Formik initialValues={{ categorySearchQuery: '' }} onSubmit={(values, { setSubmitting }) => {}}>
      {({ handleChange, handleBlur, values }) => (
        <Form>
          <Field
            id="categorySearchQuery"
            name="categorySearchQuery"
            label="Test Label"
            placeholder="Enter stuff here"
            isDisabled={false}
            isSuccess={false}
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.categorySearchQuery}
            component={Input}
          />
        </Form>
      )}
    </Formik>
  </div>
);

export default TestForm;
