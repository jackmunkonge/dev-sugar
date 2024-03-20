'use client';

import { Form, Formik } from 'formik';
import * as Yup from 'yup';

import { SolidButton, TextButton } from '@components/Buttons';

const Schema = Yup.object().shape({
  categorySearchQuery: Yup.string().min(2, 'Too Short!').max(50, 'Too Long!').required('Required'),
  pinInput: Yup.string(),
});

const TestForm: React.FC<any> = ({ className = '' }) => (
  <div className={className}>
    <Formik
      validationSchema={Schema}
      initialValues={{ categorySearchQuery: '', pinInput: '' }}
      onSubmit={(values, { setSubmitting }) => {}}
    >
      {({ values }) => (
        <Form>
          <div className="flex flex-col space-y-2 items-start">
            <SolidButton text="Solid Button" />
            <TextButton text="Text Button" />
          </div>
        </Form>
      )}
    </Formik>
  </div>
);

export default TestForm;
