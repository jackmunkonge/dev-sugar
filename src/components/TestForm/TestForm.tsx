'use client';

import { Form, Formik } from 'formik';
import * as Yup from 'yup';

import { Heart } from '@assets/icons';
import { OutlineButton, SolidButton, TextButton } from '@components/Buttons';
import { ComponentSize } from '@utils/globalTypes';

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
            <SolidButton text="Solid Button" leadIcon={Heart} size={ComponentSize.SMALL} />
            <TextButton text="Text Button" />
            <OutlineButton text="Text Button" leadIcon={Heart} size={ComponentSize.SMALL} />
          </div>
        </Form>
      )}
    </Formik>
  </div>
);

export default TestForm;
