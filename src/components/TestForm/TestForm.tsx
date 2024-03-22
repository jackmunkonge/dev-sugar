'use client';

import { Form, Formik } from 'formik';
import * as Yup from 'yup';

import { Heart } from '@assets/icons';
import { OutlineButton, SolidButton, SolidIconButton, TextButton } from '@components/Buttons';
import IconOnlyButton from '@components/Buttons/IconOnlyButton/IconOnlyButton';

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
            <SolidButton text="Solid Button" leadIcon={Heart} />
            <TextButton text="Text Button" leadIcon={Heart} />
            <OutlineButton text="Text Button" leadIcon={Heart} />
            <SolidIconButton icon={Heart} />
            <IconOnlyButton icon={Heart} solid />
          </div>
        </Form>
      )}
    </Formik>
  </div>
);

export default TestForm;
