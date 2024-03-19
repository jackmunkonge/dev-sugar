'use client';

import { ErrorMessage, Field, Form, Formik } from 'formik';
import * as Yup from 'yup';

import { Heart } from '@assets/icons';
import PinInput from '@components/PinInput/PinInput';
import { Caption } from '@components/Typography';
import { ComponentSize } from '@utils/globalTypes';

import { Input } from '..';

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
      {({ handleChange, handleBlur, values }) => (
        <Form>
          <Field
            id="categorySearchQuery"
            name="categorySearchQuery"
            label="Test Label"
            icon={Heart}
            placeholder="Enter stuff here"
            isDisabled={false}
            isSuccess={false}
            size={ComponentSize.SMALL}
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.categorySearchQuery}
            component={Input}
          />
          <ErrorMessage name="categorySearchQuery">
            {(msg) => <Caption className="mt-1 text-error">{msg}</Caption>}
          </ErrorMessage>

          <Field id="pinInput" name="pinInput" component={PinInput} />
        </Form>
      )}
    </Formik>
  </div>
);

export default TestForm;
