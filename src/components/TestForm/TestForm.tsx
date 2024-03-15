'use client';

import { Field, Form, Formik } from 'formik';

import { Input } from '..';

const TestForm = () => (
  <div className="p-2">
    <Formik initialValues={{ foo: '' }} onSubmit={(values, { setSubmitting }) => {}}>
      {({ isSubmitting }) => (
        <Form>
          <Field label="Test Label" placeholder="Enter stuff here" component={Input} />
        </Form>
      )}
    </Formik>
  </div>
);

export default TestForm;
